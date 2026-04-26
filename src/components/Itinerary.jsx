import { useState, useRef, useMemo, useCallback } from 'react';
import DayTabBar from './DayTabBar';
import TimelineView from './TimelineView';
import { getTodayDayNumber, getDayData, getActivitiesForDay, days } from '../data/tripData';
import { useAppContext } from '../App';

// ─── Check-in card ────────────────────────────────────────────────────────────
const CHECKINS_KEY = 'byu_checkins';

function loadCheckins() {
  try { return JSON.parse(localStorage.getItem(CHECKINS_KEY) || '{}'); }
  catch { return {}; }
}

function CheckInCard({ dayId }) {
  const [checkins, setCheckins] = useState(loadCheckins);
  const checked = checkins[String(dayId)];

  const handleCheckIn = () => {
    const next = { ...checkins, [String(dayId)]: { time: new Date().toISOString() } };
    localStorage.setItem(CHECKINS_KEY, JSON.stringify(next));
    setCheckins(next);
  };

  const timeStr = checked
    ? new Date(checked.time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : null;

  return (
    <div style={{
      margin: '10px 16px 0',
      background: checked ? '#F0FDF4' : '#F5F0E8',
      border: `1px solid ${checked ? 'rgba(22,101,52,0.2)' : 'rgba(7,60,119,0.12)'}`,
      borderRadius: '14px',
      padding: '12px 14px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '10px', flexShrink: 0,
    }}>
      <div>
        <p style={{ color: checked ? '#166534' : '#073C77', fontSize: '14px', fontWeight: 700, margin: '0 0 1px' }}>
          {checked ? '✓ Checked in' : 'Mark your attendance'}
        </p>
        <p style={{ color: '#A3876F', fontSize: '11px', margin: 0 }}>
          {checked ? `Recorded at ${timeStr}` : "Let the professor know you're here today"}
        </p>
      </div>
      {!checked && (
        <button
          onClick={handleCheckIn}
          style={{
            background: '#073C77', border: 'none', borderRadius: '10px',
            color: '#FFFFFF', fontSize: '13px', fontWeight: 700,
            padding: '8px 14px', cursor: 'pointer', flexShrink: 0,
          }}
        >
          I'm Here
        </button>
      )}
    </div>
  );
}

// ─── Professor edits helpers ──────────────────────────────────────────────────
function loadEdits() {
  try { return JSON.parse(localStorage.getItem('professorEdits') || '{}'); }
  catch { return {}; }
}

function toMinsSort(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function mergeEdits(dayId, baseActivities, edits) {
  const { overrides = {}, additions = [], deletions = [] } = edits[String(dayId)] || {};
  const del = new Set(deletions.map(String));
  return [
    ...baseActivities
      .filter(a => !del.has(String(a.id)))
      .map(a => {
        const ov = overrides[String(a.id)];
        return ov ? { ...a, ...ov } : a;
      }),
    ...additions,
  ].sort((a, b) => toMinsSort(a.time) - toMinsSort(b.time));
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ItineraryHero({ selectedDay, dayData }) {
  const date      = new Date(dayData.date + 'T12:00:00');
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const shortDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase();

  return (
    <div style={{ position: 'relative', height: '220px', flexShrink: 0, overflow: 'hidden', paddingTop: 'env(safe-area-inset-top)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #073C77 0%, #0F2B52 60%, #073C77 100%)', zIndex: 0 }} />
      <img
        src={`/images/day-${selectedDay}.jpg`}
        alt={dayData.city}
        onError={e => { e.currentTarget.style.display = 'none'; }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 1 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(0,0,0,0.65) 0%, transparent 50%)', zIndex: 2 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 16px 14px', zIndex: 3 }}>
        <p style={{ color: '#E9B753', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 3px', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
          {dayOfWeek} · {shortDate}
        </p>
        <h2 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 800, lineHeight: 1.1, margin: '0 0 2px', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
          {dayData.city}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 400, margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
          {dayData.country}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Itinerary() {
  const todayDay = getTodayDayNumber();
  const { professorMode, isActivityVisible } = useAppContext();

  const [selectedDay, setSelectedDay] = useState(() => {
    const saved = sessionStorage.getItem('itinerary_selected_day');
    return saved ? parseInt(saved) : (todayDay || 1);
  });
  const [editMode, setEditMode]         = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [professorEdits, setProfEdits]  = useState(loadEdits);
  const touchStart = useRef(null);

  const saveEdits = useCallback((next) => {
    localStorage.setItem('professorEdits', JSON.stringify(next));
    setProfEdits(next);
  }, []);

  const handleSelectDay = (day) => {
    sessionStorage.setItem('itinerary_selected_day', String(day));
    setSelectedDay(day);
    setEditMode(false);
  };

  const handleUpdateActivity = useCallback((actId, changes) => {
    setProfEdits(prev => {
      const key = String(selectedDay);
      const dayEdits = prev[key] || {};
      const isAdd = (dayEdits.additions || []).some(a => a.id === actId);
      let next;
      if (isAdd) {
        next = { ...prev, [key]: { ...dayEdits, additions: (dayEdits.additions || []).map(a => a.id === actId ? { ...a, ...changes } : a) } };
      } else {
        const existing = dayEdits.overrides?.[String(actId)] || {};
        next = { ...prev, [key]: { ...dayEdits, overrides: { ...(dayEdits.overrides || {}), [String(actId)]: { ...existing, ...changes } } } };
      }
      localStorage.setItem('professorEdits', JSON.stringify(next));
      return next;
    });
  }, [selectedDay]);

  const handleDeleteActivity = useCallback((actId) => {
    setProfEdits(prev => {
      const key = String(selectedDay);
      const dayEdits = prev[key] || {};
      const isAdd = (dayEdits.additions || []).some(a => a.id === actId);
      let next;
      if (isAdd) {
        next = { ...prev, [key]: { ...dayEdits, additions: (dayEdits.additions || []).filter(a => a.id !== actId) } };
      } else {
        next = { ...prev, [key]: { ...dayEdits, deletions: [...(dayEdits.deletions || []), actId] } };
      }
      localStorage.setItem('professorEdits', JSON.stringify(next));
      return next;
    });
  }, [selectedDay]);

  const handleAddActivity = useCallback((newAct) => {
    setProfEdits(prev => {
      const key = String(selectedDay);
      const dayEdits = prev[key] || {};
      const addition = { ...newAct, id: `add-${Date.now()}`, dayId: selectedDay, showStudents: true };
      const next = { ...prev, [key]: { ...dayEdits, additions: [...(dayEdits.additions || []), addition] } };
      localStorage.setItem('professorEdits', JSON.stringify(next));
      return next;
    });
    setAddModalOpen(false);
  }, [selectedDay]);

  const handleResetDay = () => {
    setProfEdits(prev => {
      const { [String(selectedDay)]: _, ...rest } = prev;
      localStorage.setItem('professorEdits', JSON.stringify(rest));
      return rest;
    });
  };

  const baseActivities = useMemo(() => getActivitiesForDay(selectedDay), [selectedDay]);
  const mergedActivities = useMemo(
    () => mergeEdits(selectedDay, baseActivities, professorEdits),
    [selectedDay, baseActivities, professorEdits]
  );
  const activities = professorMode
    ? mergedActivities
    : mergedActivities.filter(isActivityVisible);

  const dayData = getDayData(selectedDay);

  // Swipe to change day (disabled in edit mode)
  const handleTouchStart = (e) => {
    if (editMode) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const handleTouchEnd = (e) => {
    if (editMode || !touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const idx = days.findIndex(d => d.id === selectedDay);
      if (dx < 0 && idx < days.length - 1) handleSelectDay(days[idx + 1].id);
      if (dx > 0 && idx > 0) handleSelectDay(days[idx - 1].id);
    }
  };

  const activeEditMode = professorMode && editMode;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* Hero + Edit Day button */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {dayData && <ItineraryHero selectedDay={selectedDay} dayData={dayData} />}
        {professorMode && !editMode && (
          <button
            onClick={() => setEditMode(true)}
            style={{
              position: 'absolute',
              top: 'calc(env(safe-area-inset-top) + 10px)',
              right: '12px', zIndex: 10,
              background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)', borderRadius: '20px',
              padding: '5px 12px', color: '#FFFFFF', fontSize: '12px', fontWeight: 700,
              cursor: 'pointer', letterSpacing: '0.3px',
            }}
          >
            Edit Day
          </button>
        )}
      </div>

      {/* Editing header bar */}
      {activeEditMode && (
        <div style={{ background: '#073C77', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px', flexShrink: 0 }}>
          <button
            onClick={handleResetDay}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.55)', fontSize: '12px', cursor: 'pointer', padding: 0 }}
          >
            Reset Day
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E9B753' }} />
            <span style={{ color: '#E9B753', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px' }}>EDITING</span>
          </div>
          <button
            onClick={() => setEditMode(false)}
            style={{ background: '#E9B753', border: 'none', color: '#073C77', fontSize: '12px', fontWeight: 700, cursor: 'pointer', padding: '5px 12px', borderRadius: '12px' }}
          >
            Done
          </button>
        </div>
      )}

      {/* Day tab bar */}
      <DayTabBar selectedDay={selectedDay} onSelect={handleSelectDay} />

      {/* Check-in card — today only, not in edit mode */}
      {selectedDay === todayDay && !activeEditMode && (
        <CheckInCard dayId={selectedDay} />
      )}

      {/* Timeline + FAB */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', touchAction: 'pan-y' }}
      >
        <TimelineView
          activities={activities}
          dayData={dayData}
          selectedDay={selectedDay}
          isToday={selectedDay === todayDay}
          editMode={activeEditMode}
          addModalOpen={addModalOpen}
          onAddModalClose={() => setAddModalOpen(false)}
          onUpdateActivity={handleUpdateActivity}
          onDeleteActivity={handleDeleteActivity}
          onAddActivity={handleAddActivity}
        />

        {/* Add event FAB */}
        {activeEditMode && (
          <button
            onClick={() => setAddModalOpen(true)}
            style={{
              position: 'absolute',
              bottom: 'calc(env(safe-area-inset-bottom) + 14px)',
              right: '16px',
              width: '52px', height: '52px',
              borderRadius: '50%',
              background: '#E9B753', border: 'none',
              color: '#073C77', fontSize: '30px', fontWeight: 300,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(233,183,83,0.55)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 50, lineHeight: 1,
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
