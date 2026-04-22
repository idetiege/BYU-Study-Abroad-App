import { useMemo, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../App';

// ─── Layout constants ─────────────────────────────────────────────────────────
const HOUR_H    = 64;   // px per hour
const DAY_START = 6;    // first hour label (6 AM)
const DAY_END   = 23;   // last hour mark  (11 PM)
const LABEL_W   = 52;   // px width of the hour-label column
const MIN_H     = 60;   // minimum card height in px
const CARD_GAP  = 4;    // px gap between side-by-side overlapping cards

// ─── Category colours (per spec) ─────────────────────────────────────────────
const COLORS = {
  'Company Visit': '#073C77',
  'Cultural':      '#E9B753',
  'Food':          '#2D6A4F',
  'Transport':     '#A3876F',
  'Free Time':     '#4F84B4',
  'Accommodation': '#6B4FA3',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** "6:00 PM" or "14:30" → minutes since midnight */
function parseMins(t = '') {
  const ampm = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (ampm) {
    let h = +ampm[1];
    const m = +ampm[2];
    const p = ampm[3].toUpperCase();
    if (p === 'PM' && h !== 12) h += 12;
    if (p === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  }
  const [h, m] = t.split(':');
  return (+h || 0) * 60 + (+m || 0);
}

/** Minutes-since-midnight → px offset from top of the scrollable container */
function toTop(mins) {
  return (mins - DAY_START * 60) * (HOUR_H / 60);
}

/** Integer hour → "6 AM", "12 PM", "3 PM" */
function fmtHour(h) {
  if (h === 0 || h === 24) return '12 AM';
  if (h === 12) return '12 PM';
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

/**
 * Greedy interval-scheduling column assignment.
 * Mutates each item to add `.col` and `.totalCols`.
 */
function assignColumns(items) {
  const colEnds = []; // colEnds[c] = end time of last item placed in column c
  for (const item of items) {
    const c = colEnds.findIndex(end => item.startMins >= end);
    item.col = c === -1 ? colEnds.length : c;
    colEnds[item.col] = item.endMins;
  }
  // totalCols = highest column index among all items that overlap this one, + 1
  for (const a of items) {
    let maxCol = 0;
    for (const b of items) {
      if (b.startMins < a.endMins && b.endMins > a.startMins) {
        maxCol = Math.max(maxCol, b.col);
      }
    }
    a.totalCols = maxCol + 1;
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SpecialBanner({ icon, text, style }) {
  return (
    <div style={{
      flexShrink: 0, margin: '10px 12px 0', borderRadius: 10,
      padding: '10px 14px', background: '#FFFBEC',
      border: '1.5px solid #E9B753',
      display: 'flex', alignItems: 'flex-start', gap: 10,
      ...style,
    }}>
      <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>
      <p style={{ margin: 0, color: '#1A0E00', fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>
        {text}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DayTimeline({ activities, dayData, isToday }) {
  const navigate = useNavigate();
  const { professorMode, isActivityVisible } = useAppContext();
  const scrollRef = useRef(null);

  // Live clock — only ticks when today's day is selected
  const [nowMins, setNowMins] = useState(() => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  });
  useEffect(() => {
    if (!isToday) return;
    const id = setInterval(() => {
      const d = new Date();
      setNowMins(d.getHours() * 60 + d.getMinutes());
    }, 60_000);
    return () => clearInterval(id);
  }, [isToday]);

  // ── Layout (memoised — only recomputes when activities list changes) ────────
  const { regular, curfews, firstMins } = useMemo(() => {
    const regular = [];
    const curfews = [];

    for (const a of activities) {
      const mins = parseMins(a.time);
      const isCurfew =
        a.category === 'Curfew' ||
        a.title?.toLowerCase().includes('curfew');

      if (isCurfew) {
        curfews.push({ ...a, startMins: mins });
      } else {
        regular.push({ ...a, startMins: mins });
      }
    }

    // Sort chronologically
    regular.sort((a, b) => a.startMins - b.startMins);

    // Compute end time = start of next activity, or +60 for the last one
    for (let i = 0; i < regular.length; i++) {
      const next = regular[i + 1]?.startMins;
      regular[i].endMins = next != null
        ? Math.max(regular[i].startMins + 15, next)
        : regular[i].startMins + 60;
    }

    assignColumns(regular);

    const firstMins =
      regular[0]?.startMins ??
      curfews[0]?.startMins ??
      (DAY_START * 60);

    return { regular, curfews, firstMins };
  }, [activities]);

  // ── Auto-scroll to first event whenever the day changes ────────────────────
  useEffect(() => {
    if (!scrollRef.current) return;
    // Instant (no animation) so position is set before the user sees the view
    scrollRef.current.scrollTop = Math.max(0, toTop(firstMins) - 40);
  }, [firstMins]);

  // ── Derived render values ───────────────────────────────────────────────────
  const totalH = (DAY_END - DAY_START) * HOUR_H;
  const hours  = Array.from({ length: DAY_END - DAY_START }, (_, i) => DAY_START + i);
  const nowTop = isToday && nowMins >= DAY_START * 60 && nowMins <= DAY_END * 60
    ? toTop(nowMins) : null;

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden', background: '#fff' }}>

      {/* Packed-lunch warning — above the scrollable timeline */}
      {dayData?.packedLunch && (
        <SpecialBanner
          icon="🥪"
          text="Bring a packed lunch today — you will be eating on the bus."
        />
      )}

      {/* ── Scrollable timeline ─────────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))',
        }}
      >
        {/* Total-height container that everything is positioned inside */}
        <div style={{ position: 'relative', height: totalH, marginTop: 16, marginBottom: 8 }}>

          {/* ── Hour grid: labels (left) + lines (right) ─────────────────── */}
          {hours.map(h => (
            <div
              key={h}
              style={{
                position: 'absolute',
                left: 0, right: 0,
                top: (h - DAY_START) * HOUR_H,
                display: 'flex',
                alignItems: 'flex-start',
                pointerEvents: 'none',
              }}
            >
              <span style={{
                width: LABEL_W,
                paddingRight: 10,
                marginTop: -9,
                textAlign: 'right',
                flexShrink: 0,
                color: '#A3876F',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: 0.3,
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}>
                {fmtHour(h)}
              </span>
              <div style={{ flex: 1, height: 1, background: '#F0EDE8', marginRight: 8 }} />
            </div>
          ))}

          {/* ── Cards + curfew banners + time indicator ───────────────────── */}
          {/* This inner div starts right of the label column */}
          <div style={{ position: 'absolute', left: LABEL_W, right: 4, top: 0, bottom: 0 }}>

            {/* Curfew banners — full-width, red-tinted */}
            {curfews.map(a => (
              <div
                key={a.id}
                style={{
                  position: 'absolute',
                  left: 0, right: 0,
                  top: toTop(a.startMins),
                  height: 30,
                  background: 'rgba(220,38,38,0.08)',
                  border: '1.5px solid rgba(220,38,38,0.35)',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: 6,
                  paddingLeft: 10,
                  zIndex: 2,
                }}
              >
                <span style={{ fontSize: 14 }}>🏠</span>
                <span style={{ color: '#DC2626', fontSize: 12, fontWeight: 700 }}>
                  {a.title}
                </span>
              </div>
            ))}

            {/* Event cards */}
            {regular.map(a => {
              const N = a.col, T = a.totalCols;
              const top    = toTop(a.startMins) + 1;
              const height = Math.max(MIN_H, (a.endMins - a.startMins) * (HOUR_H / 60)) - 2;
              const color  = COLORS[a.category] || '#A3876F';
              const dimmed = professorMode && !isActivityVisible(a);

              // Column geometry — pure percentage math so no nested calc() is needed.
              // For N columns of width w with gap G between them:
              //   w = 100%/T − G*(T−1)/T
              //   left of col N = N/T*100% + N*G/T
              const cardWidth = `calc(${100 / T}% - ${CARD_GAP * (T - 1) / T}px)`;
              const cardLeft  = `calc(${N * 100 / T}% + ${N * CARD_GAP / T}px)`;

              return (
                <button
                  key={a.id}
                  onClick={() => navigate(`/activity/${a.id}`)}
                  style={{
                    position: 'absolute',
                    top,
                    left: cardLeft,
                    width: cardWidth,
                    height,
                    // Borders: thin all-round, thick coloured on the left
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderLeft: `4px solid ${color}`,
                    borderRadius: 8,
                    background: '#fff',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
                    padding: '6px 8px',
                    textAlign: 'left',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    zIndex: 1,
                    opacity: dimmed ? 0.45 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.12s, box-shadow 0.12s',
                  }}
                  onPointerDown={e  => { e.currentTarget.style.transform = 'scale(0.97)'; e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)'; }}
                  onPointerUp={e    => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.08)'; }}
                  onPointerLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.08)'; }}
                >
                  {/* Category badge pill — top right */}
                  <span style={{
                    position: 'absolute',
                    top: 5, right: 6,
                    background: color,
                    borderRadius: 4,
                    padding: '1px 5px',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: 0.3,
                    textTransform: 'uppercase',
                    maxWidth: '48%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {a.category}
                  </span>

                  {/* Title */}
                  <p style={{
                    margin: 0,
                    paddingRight: 52,     // keeps title clear of the badge
                    color: '#1B1B1B',
                    fontSize: 13,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: height > 82 ? 3 : 2,
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {a.title}
                  </p>

                  {/* Location — only shown when card is tall enough */}
                  {a.location && height >= 82 && (
                    <p style={{
                      margin: '3px 0 0',
                      color: '#A3876F',
                      fontSize: 11,
                      lineHeight: 1.3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {a.location}
                    </p>
                  )}
                </button>
              );
            })}

            {/* Current-time indicator — red dot + horizontal line */}
            {nowTop !== null && (
              <div
                style={{
                  position: 'absolute',
                  left: -4, right: 0,
                  top: nowTop,
                  zIndex: 3,
                  pointerEvents: 'none',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 0, top: -4,
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#DC2626',
                }} />
                <div style={{
                  position: 'absolute',
                  left: 6, right: 0, top: -0.5,
                  height: 1.5,
                  background: '#DC2626',
                  opacity: 0.85,
                }} />
              </div>
            )}
          </div>
        </div>

        {/* Buy-lunch-tonight warning — below the timeline grid */}
        {dayData?.buyLunchTonight && (
          <SpecialBanner
            icon="🛒"
            text="Buy tomorrow's packed lunch tonight before bed."
            style={{ margin: '8px 12px 16px' }}
          />
        )}
      </div>
    </div>
  );
}
