import { useState } from 'react';
import DayTabBar from './DayTabBar';
import ActivityCard from './ActivityCard';
import { getTodayDayNumber, getDayData, getActivitiesForDay } from '../data/tripData';

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
        // The image extends behind the Dynamic Island cutout.
        // padding-top pushes our overlay text content below it.
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* Navy gradient placeholder — always rendered behind the image */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, #0A1931 0%, #1A1A4E 60%, #0A1931 100%)',
        zIndex: 0,
      }} />

      {/* Hero photo — fills the entire 220px container including behind the notch */}
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

      {/* Dark gradient overlay — stronger at bottom where text lives */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,25,49,0.15) 0%, rgba(10,25,49,0.55) 50%, rgba(10,25,49,0.96) 100%)',
        zIndex: 2,
      }} />

      {/* Overlay text — pinned to the bottom of the container */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 16px 14px',
        zIndex: 3,
      }}>
        <p style={{
          color: '#C9A84C',
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
  const [selectedDay, setSelectedDay] = useState(todayDay || 6);

  const dayData = getDayData(selectedDay);
  const activities = getActivitiesForDay(selectedDay);

  return (
    // Full-height flex column — nothing scrolls except the activity list
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>

      {/* 1. Hero image — fixed 220px, safe area baked in */}
      {dayData && <ItineraryHero selectedDay={selectedDay} dayData={dayData} />}

      {/* 2. Day tab bar — flush below the hero, zero gap */}
      <DayTabBar selectedDay={selectedDay} onSelect={setSelectedDay} />

      {/* 3. Activity list — flex-1 so it takes all remaining space, scrolls independently */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}>
        {activities.length === 0 ? (
          <p style={{ color: '#8A8A9A', textAlign: 'center', marginTop: '40px', fontSize: '14px' }}>
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
