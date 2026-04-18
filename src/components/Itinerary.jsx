import { useState, useRef } from 'react';
import DayTabBar from './DayTabBar';
import ActivityCard from './ActivityCard';
import { getTodayDayNumber, getDayData, getActivitiesForDay, days } from '../data/tripData';
import { useAppContext } from '../App';

function ItineraryHero({ selectedDay, dayData }) {
  const date = new Date(dayData.date + 'T12:00:00');
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const shortDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase();

  return (
    <div
      style={{
        position: 'relative',
        height: '220px',
        flexShrink: 0,
        overflow: 'hidden',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* Navy gradient placeholder — shown when photo fails to load */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, #073C77 0%, #0F2B52 60%, #073C77 100%)',
        zIndex: 0,
      }} />

      {/* Hero photo */}
      <img
        src={`/images/day-${selectedDay}.jpg`}
        alt={dayData.city}
        onError={e => { e.currentTarget.style.display = 'none'; }}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Gradient overlay — fades to navy at bottom, matching the tab bar */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(7,60,119,0) 0%, rgba(7,60,119,0.6) 55%, rgba(7,60,119,1) 100%)',
        zIndex: 2,
      }} />

      {/* Overlay text — pinned to the bottom of the container */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 16px 14px',
        zIndex: 3,
      }}>
        <p style={{
          color: '#E9B753',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          margin: '0 0 3px',
        }}>
          {dayOfWeek} · {shortDate}
        </p>
        <h2 style={{
          color: '#FFFFFF',
          fontSize: '26px',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: '0 0 2px',
        }}>
          {dayData.city}
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.72)',
          fontSize: '14px',
          fontWeight: 400,
          margin: 0,
        }}>
          {dayData.country}
        </p>
      </div>
    </div>
  );
}

export default function Itinerary() {
  const todayDay = getTodayDayNumber();
  const [selectedDay, setSelectedDay] = useState(() => {
    const saved = sessionStorage.getItem('itinerary_selected_day');
    return saved ? parseInt(saved) : (todayDay || 6);
  });
  const touchStart = useRef(null);

  const handleSelectDay = (day) => {
    sessionStorage.setItem('itinerary_selected_day', String(day));
    setSelectedDay(day);
  };

  const handleTouchStart = (e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const idx = days.findIndex(d => d.id === selectedDay);
      if (dx < 0 && idx < days.length - 1) handleSelectDay(days[idx + 1].id);
      if (dx > 0 && idx > 0) handleSelectDay(days[idx - 1].id);
    }
  };

  const { professorMode, isActivityVisible } = useAppContext();
  const dayData = getDayData(selectedDay);
  const allActivities = getActivitiesForDay(selectedDay);
  const activities = professorMode ? allActivities : allActivities.filter(isActivityVisible);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* 1. Hero image */}
      {dayData && <ItineraryHero selectedDay={selectedDay} dayData={dayData} />}

      {/* 2. Day tab bar */}
      <DayTabBar selectedDay={selectedDay} onSelect={handleSelectDay} />

      {/* 3. Activity list — swipe here to change day */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ flex: 1, overflowY: 'auto', background: '#FFFFFF', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}
      >
        {/* Packed lunch banners */}
        {dayData?.packedLunch && (
          <div style={{ margin: '12px 16px 0', borderRadius: '12px', padding: '12px 14px', background: '#E9B753', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '20px', lineHeight: 1 }}>🥪</span>
            <p style={{ margin: 0, color: '#1A0E00', fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              Bring a packed lunch today — you will be eating on the bus.
            </p>
          </div>
        )}
        {dayData?.buyLunchTonight && (
          <div style={{ margin: '12px 16px 0', borderRadius: '12px', padding: '12px 14px', background: '#E9B753', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '20px', lineHeight: 1 }}>🛒</span>
            <p style={{ margin: 0, color: '#1A0E00', fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}>
              Buy tomorrow's packed lunch tonight before bed.
            </p>
          </div>
        )}

        {activities.length === 0 ? (
          <p style={{ color: '#A3876F', textAlign: 'center', marginTop: '40px', fontSize: '14px' }}>
            No activities scheduled.
          </p>
        ) : (
          <div style={{ padding: '12px 16px 0' }}>
            {activities.map(a => <ActivityCard key={a.id} activity={a} />)}
          </div>
        )}
      </div>
    </div>
  );
}
