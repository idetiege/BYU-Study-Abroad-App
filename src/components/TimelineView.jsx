import { useRef, useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORY_COLORS } from '../data/tripData';

// ─── Layout constants ─────────────────────────────────────────────────────────
const HOUR_HEIGHT = 80;
const START_HOUR  = 6;
const END_HOUR    = 23;
const LEFT_COL    = 54;

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

function minutesToTime(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
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

const CATEGORY_TEXT = {
  'Company Visit': '#FFFFFF',
  'Cultural':      '#1B1B1B',
  'Food':          '#FFFFFF',
  'Transport':     '#FFFFFF',
  'Free Time':     '#FFFFFF',
  'Accommodation': '#FFFFFF',
};

const CATEGORIES = ['Company Visit', 'Cultural', 'Food', 'Transport', 'Free Time', 'Accommodation'];

// ─── Input styles shared by modals ───────────────────────────────────────────
const inputStyle = {
  width: '100%', boxSizing: 'border-box',
  padding: '10px 12px', borderRadius: '10px',
  background: '#F5F0E8', border: '1px solid rgba(7,60,119,0.12)',
  color: '#1B1B1B', fontSize: '15px', outline: 'none',
  marginBottom: '12px', fontFamily: 'inherit',
};

const labelStyle = {
  display: 'block', color: '#A3876F',
  fontSize: '11px', fontWeight: 700,
  letterSpacing: '1px', textTransform: 'uppercase',
  marginBottom: '5px',
};

// ─── Event Modal (Add / Edit) ─────────────────────────────────────────────────
function EventModal({ activity, isNew, onSave, onClose }) {
  const [time, setTime]         = useState(activity?.time || '09:00');
  const [title, setTitle]       = useState(activity?.title || '');
  const [category, setCategory] = useState(activity?.category || 'Cultural');
  const [location, setLocation] = useState(activity?.location || '');
  const [notes, setNotes]       = useState(activity?.notes || '');

  const canSave = title.trim().length > 0;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
      <div style={{
        position: 'relative', background: '#FFFFFF',
        borderRadius: '20px 20px 0 0',
        padding: '20px 20px calc(env(safe-area-inset-bottom) + 20px)',
        maxHeight: '85vh', overflowY: 'auto', zIndex: 1,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, color: '#073C77', fontSize: '17px', fontWeight: 700 }}>
            {isNew ? 'Add Activity' : 'Edit Activity'}
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#A3876F', fontSize: '14px', cursor: 'pointer', padding: '4px 8px' }}>
            Cancel
          </button>
        </div>

        <label style={labelStyle}>Time</label>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} style={inputStyle} />

        <label style={labelStyle}>Title</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Activity title" style={inputStyle} />

        <label style={labelStyle}>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <label style={labelStyle}>Location</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Optional" style={inputStyle} />

        <label style={labelStyle}>Notes</label>
        <textarea
          value={notes} onChange={e => setNotes(e.target.value)}
          placeholder="Optional notes..."
          rows={3}
          style={{ ...inputStyle, resize: 'none', lineHeight: 1.5 }}
        />

        <button
          onClick={() => { if (canSave) onSave({ time, title: title.trim(), category, location, notes }); }}
          style={{
            width: '100%', padding: '14px', borderRadius: '12px',
            background: canSave ? '#073C77' : '#D0C4B0',
            color: '#FFFFFF', fontSize: '15px', fontWeight: 700,
            border: 'none', cursor: canSave ? 'pointer' : 'default',
            marginTop: '4px',
          }}
        >
          {isNew ? 'Add to Schedule' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

// ─── Delete confirm sheet ─────────────────────────────────────────────────────
function DeleteConfirm({ activity, onConfirm, onCancel }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div onClick={onCancel} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
      <div style={{
        position: 'relative', background: '#FFFFFF',
        borderRadius: '20px 20px 0 0',
        padding: '24px 20px calc(env(safe-area-inset-bottom) + 20px)',
        zIndex: 1,
      }}>
        <h3 style={{ margin: '0 0 8px', color: '#073C77', fontSize: '17px', fontWeight: 700 }}>Remove Activity?</h3>
        <p style={{ margin: '0 0 24px', color: '#A3876F', fontSize: '14px', lineHeight: 1.5 }}>
          "{activity.title}" will be removed from today's schedule.
        </p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onCancel}
            style={{ flex: 1, padding: '13px', borderRadius: '12px', background: '#F5F0E8', border: 'none', color: '#073C77', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{ flex: 1, padding: '13px', borderRadius: '12px', background: '#DC2626', border: 'none', color: '#FFFFFF', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Activity block ───────────────────────────────────────────────────────────
function ActivityBlock({ activity, editMode, onPress, onDragStart, onResizeStart, onDeleteTap, liveOverride }) {
  const displayAct = liveOverride ? { ...activity, ...liveOverride } : activity;
  const isDragging = !!liveOverride;

  const bg        = CATEGORY_COLORS[activity.category] || '#3A3A4A';
  const textColor = CATEGORY_TEXT[activity.category] || '#FFFFFF';
  const colW      = 100 / activity.numCols;
  const leftPct   = `${activity.col * colW}%`;
  const widthStr  = `calc(${colW}% - 2px)`;
  const height    = toHeight(displayAct.durationMinutes);
  const showLoc   = activity.location && height > 72;

  return (
    <div
      onTouchStart={editMode ? (e) => { e.preventDefault(); onDragStart(e, activity); } : undefined}
      onClick={!editMode ? onPress : undefined}
      style={{
        position: 'absolute',
        top: toY(displayAct.time) + 1,
        left: leftPct,
        width: widthStr,
        height: height - 2,
        background: bg,
        borderRadius: '6px',
        boxShadow: isDragging ? '0 8px 24px rgba(0,0,0,0.28)' : '0 1px 4px rgba(0,0,0,0.15)',
        padding: '5px 28px 22px 8px',
        textAlign: 'left',
        cursor: editMode ? 'grab' : 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        WebkitTapHighlightColor: 'transparent',
        transform: isDragging ? 'scale(1.025)' : undefined,
        zIndex: isDragging ? 100 : undefined,
        userSelect: 'none',
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

      {/* Delete button (edit) OR category badge (normal) */}
      {editMode ? (
        <div
          onTouchStart={(e) => { e.stopPropagation(); e.preventDefault(); onDeleteTap(activity); }}
          onClick={(e) => { e.stopPropagation(); onDeleteTap(activity); }}
          style={{
            position: 'absolute', top: 3, right: 3,
            width: 20, height: 20, borderRadius: '50%',
            background: '#DC2626',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 5,
          }}
        >
          <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 700, lineHeight: 1 }}>×</span>
        </div>
      ) : (
        <div style={{
          position: 'absolute', top: 4, right: 4,
          background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '1px 4px', maxWidth: '60px', overflow: 'hidden',
        }}>
          <span style={{ color: textColor, fontSize: '8px', fontWeight: 700, letterSpacing: '0.2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {activity.category.split(' ')[0]}
          </span>
        </div>
      )}

      {/* Resize handle (edit mode only) */}
      {editMode && (
        <div
          onTouchStart={(e) => { e.stopPropagation(); e.preventDefault(); onResizeStart(e, activity); }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 20,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'ns-resize', zIndex: 5,
          }}
        >
          <div style={{ width: 28, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.45)' }} />
        </div>
      )}
    </div>
  );
}

// ─── Curfew banner ────────────────────────────────────────────────────────────
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
export default function TimelineView({
  activities, dayData, selectedDay, isToday,
  editMode,
  addModalOpen, onAddModalClose,
  onUpdateActivity, onDeleteActivity, onAddActivity,
}) {
  const navigate  = useNavigate();
  const scrollRef = useRef(null);

  const [liveOverrides, setLiveOverrides]       = useState({});
  const [editingActivity, setEditingActivity]   = useState(null);
  const [deletingActivity, setDeletingActivity] = useState(null);

  // Drag state (mutable ref — no re-render during drag)
  const dragRef = useRef(null);

  // Stable refs so the effect closure stays current without re-registering
  const activitiesRef = useRef(activities);
  const onUpdateRef   = useRef(onUpdateActivity);
  useEffect(() => { activitiesRef.current = activities; }, [activities]);
  useEffect(() => { onUpdateRef.current = onUpdateActivity; }, [onUpdateActivity]);

  const isCurfew = a => a.title.toLowerCase().includes('curfew');

  const { regular, curfews } = useMemo(() => ({
    regular: activities.filter(a => !isCurfew(a)),
    curfews: activities.filter(a =>  isCurfew(a)),
  }), [activities]);

  const withLayout = useMemo(() => {
    const sorted = [...regular].sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
    const withDurations = sorted.map((act, i) => {
      if (act.durationMinutes) return act;
      const next = sorted[i + 1];
      const dur  = next
        ? Math.min(120, Math.max(45, toMinutes(next.time) - toMinutes(act.time)))
        : 60;
      return { ...act, durationMinutes: dur };
    });
    return withNumCols(assignColumns(withDurations));
  }, [regular]);

  // Scroll to first event when selected day changes
  useEffect(() => {
    if (!scrollRef.current) return;
    const target = withLayout.length > 0 ? Math.max(0, toY(withLayout[0].time) - 80) : 0;
    scrollRef.current.scrollTop = target;
  }, [selectedDay]); // eslint-disable-line react-hooks/exhaustive-deps

  // Global touch listeners for drag (only active in edit mode)
  useEffect(() => {
    if (!editMode) {
      dragRef.current = null;
      setLiveOverrides({});
      return;
    }

    const handleMove = (e) => {
      if (!dragRef.current) return;
      e.preventDefault();

      const dy = e.touches[0].clientY - dragRef.current.startY;
      if (Math.abs(dy) > 5) dragRef.current.hasMoved = true;

      const deltaMins = Math.round((dy / HOUR_HEIGHT) * 60 / 15) * 15;
      const { type, actId, origTime, origDuration } = dragRef.current;

      if (type === 'move') {
        const newMins = Math.max(START_HOUR * 60, Math.min((END_HOUR - 1) * 60, toMinutes(origTime) + deltaMins));
        setLiveOverrides({ [actId]: { time: minutesToTime(Math.round(newMins / 15) * 15) } });
      } else {
        const newDur = Math.max(15, origDuration + deltaMins);
        setLiveOverrides({ [actId]: { durationMinutes: Math.round(newDur / 15) * 15 } });
      }
    };

    const handleEnd = (e) => {
      if (!dragRef.current) return;
      const { actId, hasMoved, type, startY, origTime, origDuration } = dragRef.current;
      dragRef.current = null;
      setLiveOverrides({});

      if (hasMoved) {
        const dy = e.changedTouches[0].clientY - startY;
        const deltaMins = Math.round((dy / HOUR_HEIGHT) * 60 / 15) * 15;
        if (type === 'move') {
          const newMins = Math.max(START_HOUR * 60, Math.min((END_HOUR - 1) * 60, toMinutes(origTime) + deltaMins));
          onUpdateRef.current(actId, { time: minutesToTime(Math.round(newMins / 15) * 15) });
        } else {
          const newDur = Math.max(15, origDuration + deltaMins);
          onUpdateRef.current(actId, { durationMinutes: Math.round(newDur / 15) * 15 });
        }
      } else if (type === 'move') {
        // Tap (no drag) → open edit modal
        const act = activitiesRef.current.find(a => a.id === actId);
        if (act) setEditingActivity(act);
      }
    };

    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [editMode]);

  const handleDragStart = useCallback((e, activity, type) => {
    dragRef.current = {
      type,
      actId: activity.id,
      startY: e.touches[0].clientY,
      origTime: activity.time,
      origDuration: activity.durationMinutes,
      hasMoved: false,
    };
  }, []);

  // Current-time indicator
  const now      = new Date();
  const nowMins  = now.getHours() * 60 + now.getMinutes();
  const currentY = (isToday && nowMins >= START_HOUR * 60 && nowMins <= END_HOUR * 60)
    ? ((nowMins - START_HOUR * 60) / 60) * HOUR_HEIGHT
    : null;

  const hours       = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);
  const totalHeight = (END_HOUR - START_HOUR + 1) * HOUR_HEIGHT;

  return (
    <>
      <div
        ref={scrollRef}
        style={{ flex: 1, overflowY: 'auto', background: '#FFFFFF', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}
      >
        {/* Packed lunch banner */}
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

          {/* Hour labels */}
          <div style={{ width: LEFT_COL, flexShrink: 0 }}>
            {hours.map(h => (
              <div key={h} style={{ height: HOUR_HEIGHT, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '10px', paddingTop: '2px' }}>
                <span style={{ color: '#A3876F', fontSize: '10px', fontWeight: 500, whiteSpace: 'nowrap', lineHeight: 1 }}>
                  {formatHour(h)}
                </span>
              </div>
            ))}
          </div>

          {/* Grid + events */}
          <div style={{ flex: 1, position: 'relative', height: totalHeight, paddingRight: '12px' }}>

            {/* Grid lines */}
            {hours.map(h => (
              <div key={h} style={{
                position: 'absolute',
                top: (h - START_HOUR) * HOUR_HEIGHT,
                left: 0, right: 0, height: '1px',
                background: '#F0EDE8', pointerEvents: 'none',
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
                editMode={editMode}
                liveOverride={liveOverrides[act.id]}
                onPress={() => navigate(`/activity/${act.id}`)}
                onDragStart={(e, a) => handleDragStart(e, a, 'move')}
                onResizeStart={(e, a) => handleDragStart(e, a, 'resize')}
                onDeleteTap={a => setDeletingActivity(a)}
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

        {/* Buy lunch tonight banner */}
        {dayData?.buyLunchTonight && (
          <div style={{ margin: '4px 12px 12px', borderRadius: '10px', padding: '10px 14px', background: '#FEF3C7', border: '1px solid #E9B753', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '17px', lineHeight: 1 }}>🛒</span>
            <p style={{ margin: 0, color: '#92400E', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>
              Buy tomorrow's packed lunch tonight before bed.
            </p>
          </div>
        )}
      </div>

      {/* Edit existing activity modal */}
      {editingActivity && (
        <EventModal
          activity={editingActivity}
          isNew={false}
          onSave={(changes) => {
            onUpdateActivity(editingActivity.id, changes);
            setEditingActivity(null);
          }}
          onClose={() => setEditingActivity(null)}
        />
      )}

      {/* Add new activity modal (triggered by FAB in Itinerary) */}
      {addModalOpen && (
        <EventModal
          activity={null}
          isNew={true}
          onSave={onAddActivity}
          onClose={onAddModalClose}
        />
      )}

      {/* Delete confirmation sheet */}
      {deletingActivity && (
        <DeleteConfirm
          activity={deletingActivity}
          onConfirm={() => {
            onDeleteActivity(deletingActivity.id);
            setDeletingActivity(null);
          }}
          onCancel={() => setDeletingActivity(null)}
        />
      )}
    </>
  );
}
