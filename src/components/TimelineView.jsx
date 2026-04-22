import { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORY_COLORS } from '../data/tripData';

// ─── Layout constants ─────────────────────────────────────────────────────────
const HOUR_HEIGHT = 80;   // px per hour
const START_HOUR  = 6;    // 6 AM
const END_HOUR    = 23;   // 11 PM
const LEFT_COL    = 54;   // px width of the hour-label column

// ─── Pure helpers ─────────────────────────────────────────────────────────────
function formatHour(h) {
  if (h === 12) return '12 PM';
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

function toMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function toY(timeStr) {
  return Math.max(0, ((toMinutes(timeStr) - START_HOUR * 60) / 60) * HOUR_HEIGHT);
}

function toHeight(mins) {
  return Math.max(60, (mins / 60) * HOUR_HEIGHT);
}

// Greedy column assignment for overlapping events
function assignColumns(acts) {
  const colEnds = [];
  return acts.map(act => {
    const start = toMinutes(act.time);
    const end   = start + act.durationMinutes;
    let col = colEnds.findIndex(e => e <= start);
    if (col === -1) { col = colEnds.length; colEnds.push(end); }
    else { colEnds[col] = end; }
    return { ...act, col };
  });
}

// For each event, count how many columns are active during its time window
function withNumCols(withCols) {
  return withCols.map(act => {
    const start = toMinutes(act.time);
    const end   = start + act.durationMinutes;
    const concurrent = withCols.filter(o => {
      const os = toMinutes(o.time); const oe = os + o.durationMinutes;
      return os < end && oe > start;
    });
    return { ...act, numCols: Math.max(...concurrent.map(c => c.col)) + 1 };
  });
}

// Text color per category (dark only for Cultural which has a gold background)
const CATEGORY_TEXT = {
  'Company Visit': '#FFFFFF',
  'Cultural':      '#1B1B1B',
  'Food':          '#FFFFFF',
  'Transport':     '#FFFFFF',
  'Free Time':     '#FFFFFF',
  'Accommodation': '#FFFFFF',
};

// ─── Activity block ───────────────────────────────────────────────────────────
function ActivityBlock({ activity, onPress }) {
  const bg       = CATEGORY_COLORS[activity.category] || '#3A3A4A';
  const textColor = CATEGORY_TEXT[activity.category] || '#FFFFFF';
  const colW     = 100 / activity.numCols;
  const leftPct  = `${activity.col * colW}%`;
  const widthStr = `calc(${colW}% - 2px)`;
  const height   = toHeight(activity.durationMinutes);
  const showLoc  = activity.location && height > 72;

  return (
    <button
      onClick={onPress}
      style={{
        position: 'absolute',
        top: toY(activity.time) + 1,
        left: leftPct,
        width: widthStr,
        height: height - 2,
        background: bg,
        border: 'none',
        borderRadius: '6px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
        padding: '5px 28px 5px 8px',
        textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <p style={{
        color: textColor, fontSize: '12px', fontWeight: 700,
        margin: 0, lineHeight: 1.3,
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {activity.title}
      </p>
      {showLoc && (
        <p style={{ color: textColor, opacity: 0.75, fontSize: '10px', margin: '2px 0 0', lineHeight: 1.3, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {activity.location}
        </p>
      )}
      {/* Category badge — 20% white overlay so it doesn't clash with block color */}
      <div style={{
        position: 'absolute', top: 4, right: 4,
        background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '1px 4px', maxWidth: '60px', overflow: 'hidden',
      }}>
        <span style={{ color: textColor, fontSize: '8px', fontWeight: 700, letterSpacing: '0.2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {activity.category.split(' ')[0]}
        </span>
      </div>
    </button>
  );
}

// ─── Curfew banner (positioned in timeline) ───────────────────────────────────
function CurfewBanner({ activity }) {
  return (
    <div style={{
      position: 'absolute',
      top: toY(activity.time) + 1,
      left: 0, right: 0,
      height: 36,
      background: 'rgba(220,38,38,0.08)',
      border: '1px solid rgba(220,38,38,0.25)',
      borderRadius: '6px',
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '0 12px',
    }}>
      <span style={{ fontSize: '14px' }}>🏠</span>
      <span style={{ color: '#DC2626', fontSize: '12px', fontWeight: 700 }}>{activity.title}</span>
      <span style={{ color: '#A3876F', fontSize: '11px', marginLeft: 'auto' }}>{activity.time}</span>
    </div>
  );
}

// ─── Main timeline ────────────────────────────────────────────────────────────
export default function TimelineView({ activities, dayData, selectedDay, isToday }) {
  const navigate  = useNavigate();
  const scrollRef = useRef(null);

  const isCurfew = a => a.title.toLowerCase().includes('curfew');

  // Separate regular activities from curfew banners; memoize per selected day
  const { regular, curfews } = useMemo(() => ({
    regular: activities.filter(a => !isCurfew(a)),
    curfews: activities.filter(a =>  isCurfew(a)),
  }), [activities]);

  // Build layout: sort → durations → column assignment → numCols
  const withLayout = useMemo(() => {
    const sorted = [...regular].sort((a, b) => toMinutes(a.time) - toMinutes(b.time));

    const withDurations = sorted.map((act, i) => {
      const next = sorted[i + 1];
      let dur = next
        ? Math.min(120, Math.max(45, toMinutes(next.time) - toMinutes(act.time)))
        : 60;
      return { ...act, durationMinutes: dur };
    });

    return withNumCols(assignColumns(withDurations));
  }, [regular]);

  // Scroll to just before the first event when the selected day changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const target = withLayout.length > 0
      ? Math.max(0, toY(withLayout[0].time) - 80)
      : 0;
    scrollRef.current.scrollTop = target;
  }, [selectedDay]); // eslint-disable-line react-hooks/exhaustive-deps

  // Current-time indicator
  const now         = new Date();
  const nowMins     = now.getHours() * 60 + now.getMinutes();
  const currentY    = (isToday && nowMins >= START_HOUR * 60 && nowMins <= END_HOUR * 60)
    ? ((nowMins - START_HOUR * 60) / 60) * HOUR_HEIGHT
    : null;

  const hours       = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);
  const totalHeight = (END_HOUR - START_HOUR + 1) * HOUR_HEIGHT;

  return (
    <div
      ref={scrollRef}
      style={{ flex: 1, overflowY: 'auto', background: '#FFFFFF', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}
    >
      {/* Packed lunch banner — above timeline */}
      {dayData?.packedLunch && (
        <div style={{ margin: '10px 12px 4px', borderRadius: '10px', padding: '10px 14px', background: '#FEF3C7', border: '1px solid #E9B753', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '17px', lineHeight: 1 }}>🥪</span>
          <p style={{ margin: 0, color: '#92400E', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>
            Bring a packed lunch today — you will be eating on the bus.
          </p>
        </div>
      )}

      {/* Timeline */}
      <div style={{ display: 'flex', paddingTop: '8px' }}>

        {/* Left: hour labels */}
        <div style={{ width: LEFT_COL, flexShrink: 0 }}>
          {hours.map(h => (
            <div key={h} style={{ height: HOUR_HEIGHT, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '10px', paddingTop: '2px' }}>
              <span style={{ color: '#A3876F', fontSize: '10px', fontWeight: 500, whiteSpace: 'nowrap', lineHeight: 1 }}>
                {formatHour(h)}
              </span>
            </div>
          ))}
        </div>

        {/* Right: grid + events */}
        <div style={{ flex: 1, position: 'relative', height: totalHeight, paddingRight: '12px' }}>

          {/* Horizontal grid lines */}
          {hours.map(h => (
            <div key={h} style={{
              position: 'absolute',
              top: (h - START_HOUR) * HOUR_HEIGHT,
              left: 0, right: 0,
              height: '1px',
              background: '#F0EDE8',
              pointerEvents: 'none',
            }} />
          ))}

          {/* Current time indicator */}
          {currentY !== null && (
            <div style={{
              position: 'absolute', top: currentY,
              left: -LEFT_COL, right: 0,
              display: 'flex', alignItems: 'center',
              zIndex: 20, pointerEvents: 'none',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#DC2626', flexShrink: 0, marginLeft: LEFT_COL - 4 }} />
              <div style={{ flex: 1, height: '2px', background: '#DC2626' }} />
            </div>
          )}

          {/* Curfew banners */}
          {curfews.map(act => <CurfewBanner key={act.id} activity={act} />)}

          {/* Activity blocks */}
          {withLayout.map(act => (
            <ActivityBlock
              key={act.id}
              activity={act}
              onPress={() => navigate(`/activity/${act.id}`)}
            />
          ))}

          {/* Empty state */}
          {withLayout.length === 0 && curfews.length === 0 && (
            <div style={{ position: 'absolute', top: '30%', left: 0, right: 0, textAlign: 'center' }}>
              <p style={{ color: '#A3876F', fontSize: '14px' }}>No activities scheduled.</p>
            </div>
          )}
        </div>
      </div>

      {/* Buy lunch tonight banner — below timeline */}
      {dayData?.buyLunchTonight && (
        <div style={{ margin: '4px 12px 12px', borderRadius: '10px', padding: '10px 14px', background: '#FEF3C7', border: '1px solid #E9B753', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span style={{ fontSize: '17px', lineHeight: 1 }}>🛒</span>
          <p style={{ margin: 0, color: '#92400E', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>
            Buy tomorrow's packed lunch tonight before bed.
          </p>
        </div>
      )}
    </div>
  );
}
