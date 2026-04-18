import { useState, useEffect } from 'react';
import HeroImage from './HeroImage';
import QuoteCard from './QuoteCard';
import ActivityCard from './ActivityCard';
import { useAppContext } from '../App';
import {
  TRIP_START, TOTAL_DAYS, PROFESSOR_PASSWORD,
  getTodayDayNumber, getDayData, getActivitiesForDay, getNextActivity, getQuoteForDay,
  getFunFactForDay, formatDate,
} from '../data/tripData';

// ─── Professor mode modal ─────────────────────────────────────────────────────
function ProfessorModal({ onClose }) {
  const { professorMode, setProfessorMode } = useAppContext();
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  const handleEnable = () => {
    if (pw === PROFESSOR_PASSWORD) {
      setProfessorMode(true);
      onClose();
    } else {
      setError('Incorrect password.');
      setPw('');
    }
  };

  const handleDisable = () => {
    setProfessorMode(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'flex-end' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#0F2B52', width: '100%', borderRadius: '20px 20px 0 0', padding: '24px 20px', paddingBottom: 'calc(24px + env(safe-area-inset-bottom))', border: '1px solid rgba(233,183,83,0.2)' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: professorMode ? 'rgba(233,183,83,0.15)' : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={professorMode ? '#E9B753' : '#D2AF7D'} strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d={professorMode ? 'M7 11V7a5 5 0 0 1 10 0v4' : 'M7 11V7a5 5 0 0 1 9.9-1'}/>
            </svg>
          </div>
          <div>
            <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, margin: 0 }}>Professor Mode</p>
            <p style={{ color: '#D2AF7D', fontSize: '12px', margin: 0 }}>{professorMode ? 'Currently enabled' : 'Password required'}</p>
          </div>
        </div>

        {professorMode ? (
          <>
            <div className="flex items-center gap-2 rounded-xl p-3 mb-4" style={{ background: 'rgba(233,183,83,0.1)', border: '1px solid rgba(233,183,83,0.3)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E9B753" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span style={{ color: '#E9B753', fontSize: '13px', fontWeight: 600 }}>Professor mode is active</span>
            </div>
            <button
              onClick={handleDisable}
              className="w-full py-3 rounded-xl font-bold"
              style={{ background: 'rgba(220,38,38,0.15)', color: '#DC2626', fontSize: '15px', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              Disable Professor Mode
            </button>
          </>
        ) : (
          <>
            <label style={{ display: 'block', color: '#D2AF7D', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Enter Password
            </label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleEnable()}
              placeholder="••••••••••"
              autoFocus
              className="w-full px-4 py-3 rounded-xl outline-none mb-3"
              style={{ background: '#0A1F3D', border: `1px solid ${error ? '#DC2626' : 'rgba(255,255,255,0.1)'}`, color: '#FFFFFF', fontSize: '16px', caretColor: '#E9B753' }}
            />
            {error && <p style={{ color: '#DC2626', fontSize: '12px', marginBottom: '8px' }}>{error}</p>}
            <button
              onClick={handleEnable}
              className="w-full py-3 rounded-xl font-bold"
              style={{ background: '#E9B753', color: '#073C77', fontSize: '15px' }}
            >
              Unlock Professor Mode
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Sub-cards ────────────────────────────────────────────────────────────────
function DaysUntilCard() {
  const diff = Math.ceil((new Date('2026-04-27T00:00:00') - new Date()) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return null;
  return (
    <div className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center" style={{ background: '#0F2B52', border: '1px solid rgba(233,183,83,0.2)' }}>
      <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Days Until Trip</p>
      <p style={{ color: '#E9B753', fontSize: '42px', fontWeight: 800, lineHeight: 1, margin: 0 }}>{diff}</p>
      <p style={{ color: '#D2AF7D', fontSize: '11px', marginTop: '4px' }}>Apr 27, 2026</p>
    </div>
  );
}

function DayProgressCard({ dayNumber }) {
  return (
    <div className="flex-1 rounded-2xl p-4" style={{ background: '#0F2B52', border: '1px solid rgba(233,183,83,0.2)' }}>
      <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Trip Progress</p>
      <p style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: 800, lineHeight: 1, margin: 0 }}>
        Day <span style={{ color: '#E9B753' }}>{dayNumber}</span>
        <span style={{ color: '#D2AF7D', fontSize: '16px' }}> / {TOTAL_DAYS}</span>
      </p>
      <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '4px', height: '4px', marginTop: '10px', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(90deg, #E9B753, #F0D080)', height: '100%', width: `${(dayNumber / TOTAL_DAYS) * 100}%`, borderRadius: '4px', transition: 'width 0.5s' }} />
      </div>
    </div>
  );
}

function WeatherClock({ city, timezone }) {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  useEffect(() => {
    fetch(`https://wttr.in/${encodeURIComponent(city)}?format=%C+%t`)
      .then(r => r.text())
      .then(t => {
        const clean = t.trim();
        setWeather(clean && !clean.startsWith('<') ? clean : 'Weather unavailable');
      })
      .catch(() => setWeather('Weather unavailable'));
  }, [city]);

  return (
    <div className="mx-4 mb-4 rounded-2xl overflow-hidden flex" style={{ background: '#0F2B52', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex-1 p-4" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Weather</p>
        <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500, margin: 0 }}>{weather || '...'}</p>
      </div>
      <div className="flex-1 p-4 flex flex-col items-end">
        <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Local Time</p>
        <p style={{ color: '#E9B753', fontSize: '18px', fontWeight: 700, fontVariantNumeric: 'tabular-nums', margin: 0 }}>{time}</p>
      </div>
    </div>
  );
}

function NextUpCard({ activity }) {
  if (!activity) return null;
  return (
    <div className="mx-4 mb-4 rounded-2xl p-4" style={{ background: '#0F2B52', border: '2px solid #E9B753' }}>
      <p style={{ color: '#E9B753', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Next Up</p>
      <p style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }}>{activity.title}</p>
      <p style={{ color: '#D2AF7D', fontSize: '13px', margin: '0 0 12px' }}>
        {activity.time}{activity.location ? ` · ${activity.location}` : ''}
      </p>
      {activity.mapsUrl && (
        <a href={activity.mapsUrl} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 justify-center rounded-xl py-2"
           style={{ background: 'rgba(233,183,83,0.15)', color: '#E9B753', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Maps
        </a>
      )}
    </div>
  );
}

function FunFactCard({ fact, dayId, onSave }) {
  const { professorMode } = useAppContext();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(fact);

  const handleSave = () => { onSave(dayId, draft.trim() || fact); setEditing(false); };
  const handleCancel = () => { setDraft(fact); setEditing(false); };

  return (
    <div className="mx-4 mb-4 rounded-2xl p-4 flex gap-3" style={{ background: '#0F2B52', border: '1px solid rgba(255,255,255,0.06)' }}>
      <span style={{ fontSize: '24px', lineHeight: '1.4' }}>💡</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>Fun Fact</p>
          {professorMode && !editing && (
            <button onClick={() => { setDraft(fact); setEditing(true); }}
                    style={{ color: '#E9B753', background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
          )}
        </div>
        {editing ? (
          <>
            <textarea
              value={draft}
              onChange={e => setDraft(e.target.value)}
              autoFocus
              style={{ width: '100%', boxSizing: 'border-box', background: '#0A1F3D', border: '1px solid rgba(233,183,83,0.4)', borderRadius: '8px', color: '#FFFFFF', fontSize: '14px', lineHeight: 1.6, padding: '8px', resize: 'vertical', minHeight: '80px', outline: 'none', caretColor: '#E9B753', fontFamily: 'inherit' }}
            />
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button onClick={handleSave} style={{ flex: 1, padding: '8px', borderRadius: '8px', background: '#E9B753', color: '#073C77', fontWeight: 700, fontSize: '13px', border: 'none', cursor: 'pointer' }}>Save</button>
              <button onClick={handleCancel} style={{ flex: 1, padding: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.08)', color: '#D2AF7D', fontSize: '13px', border: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </>
        ) : (
          <p style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{fact}</p>
        )}
      </div>
    </div>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────
export default function Home() {
  const { professorMode, isActivityVisible } = useAppContext();
  const [profModalOpen, setProfModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [funFactOverrides, setFunFactOverridesState] = useState(() => {
    try { return JSON.parse(localStorage.getItem('byu_funfact_overrides') || '{}'); }
    catch { return {}; }
  });

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);

  const saveFunFact = (dayId, text) => {
    const next = { ...funFactOverrides, [dayId]: text };
    localStorage.setItem('byu_funfact_overrides', JSON.stringify(next));
    setFunFactOverridesState(next);
  };

  const dayNumber = getTodayDayNumber();
  const preTrip = dayNumber === null && new Date() < new Date(TRIP_START);
  const displayDay = dayNumber || (preTrip ? 1 : TOTAL_DAYS);
  const dayData = getDayData(displayDay);
  const allDayActivities = getActivitiesForDay(displayDay);
  const dayActivities = professorMode ? allDayActivities : allDayActivities.filter(isActivityVisible);
  const nextActivity = dayNumber ? getNextActivity(dayNumber) : null;
  const quote = getQuoteForDay(displayDay);
  const fact = funFactOverrides[displayDay] || getFunFactForDay(displayDay);
  const daysUntil = Math.ceil((new Date(TRIP_START) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Offline indicator — fixed pill, visible on all screens */}
      {!isOnline && (
        <div style={{ position: 'fixed', top: 'calc(env(safe-area-inset-top) + 8px)', left: '50%', transform: 'translateX(-50%)', zIndex: 200, background: 'rgba(40,40,40,0.96)', borderRadius: '20px', padding: '5px 14px', display: 'flex', alignItems: 'center', gap: '7px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
          <span style={{ color: '#FFFFFF', fontSize: '11px', fontWeight: 600, whiteSpace: 'nowrap' }}>Offline mode</span>
        </div>
      )}

      {/* Scroll container — no padding-bottom (iOS Safari bug); spacer at bottom instead */}
      <div className="overflow-y-auto h-full">

        {/* Hero + professor toggle button overlaid */}
        <div style={{ position: 'relative' }}>
          {dayData && (
            <HeroImage
              dayNumber={displayDay}
              city={dayData.city}
              country={dayData.country}
              date={formatDate(dayData.date)}
              height="56vw"
            />
          )}
          {/* Professor mode toggle — sits top-right of hero */}
          <button
            onClick={() => setProfModalOpen(true)}
            style={{
              position: 'absolute',
              top: 'calc(env(safe-area-inset-top) + 12px)',
              right: '14px',
              zIndex: 10,
              width: '34px', height: '34px',
              borderRadius: '50%',
              background: professorMode ? 'rgba(233,183,83,0.25)' : 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              border: professorMode ? '1px solid rgba(233,183,83,0.6)' : '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={professorMode ? '#E9B753' : 'rgba(255,255,255,0.7)'} strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d={professorMode ? 'M7 11V7a5 5 0 0 1 10 0v4' : 'M7 11V7a5 5 0 0 1 9.9-1'}/>
            </svg>
          </button>
        </div>

        {/* Countdown / Progress Cards */}
        <div className="flex gap-3 mx-4 my-4">
          {preTrip && daysUntil > 0 && <DaysUntilCard />}
          {dayNumber && <DayProgressCard dayNumber={dayNumber} />}
          {(preTrip || dayNumber) && dayData && (
            <div className="flex-1 rounded-2xl p-4 flex flex-col justify-between" style={{ background: '#0F2B52', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: '#D2AF7D', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Today</p>
              <div>
                <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, margin: 0 }}>{dayData.city}</p>
                <p style={{ color: '#D2AF7D', fontSize: '12px', margin: '2px 0 0' }}>{dayData.country}</p>
              </div>
            </div>
          )}
        </div>

        {dayData && <WeatherClock city={dayData.city} timezone={dayData.timezone} />}
        {nextActivity && <NextUpCard activity={nextActivity} />}

        {dayActivities.length > 0 && (
          <div className="mx-4 mb-4 rounded-2xl p-4" style={{ background: '#0F2B52', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ color: '#E9B753', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Today's Full Schedule</p>
            {dayActivities.map(a => <ActivityCard key={a.id} activity={a} compact />)}
          </div>
        )}

        <FunFactCard fact={fact} dayId={displayDay} onSave={saveFunFact} />
        <QuoteCard quote={quote} />

        {/* Explicit bottom spacer — avoids iOS Safari padding-bottom bug in overflow:auto */}
        <div style={{ height: 'calc(4rem + env(safe-area-inset-bottom) + 16px)' }} />
      </div>

      {/* Professor mode modal — rendered outside scroll container */}
      {profModalOpen && <ProfessorModal onClose={() => setProfModalOpen(false)} />}
    </>
  );
}
