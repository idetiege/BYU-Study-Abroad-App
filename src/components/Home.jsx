import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from './HeroImage';
import QuoteCard from './QuoteCard';
import ActivityCard from './ActivityCard';
import {
  DAYS, QUOTES, FUN_FACTS, CITY_TIMEZONES, TRIP_START, TOTAL_DAYS,
  getTodayDayNumber, getDayData, getActivitiesForDay, getNextActivity,
  formatDate, formatShortDate, formatTime
} from '../data/tripData';

function DaysUntilCard() {
  const tripDate = new Date('2026-04-27T00:00:00');
  const now = new Date();
  const diff = Math.ceil((tripDate - now) / (1000 * 60 * 60 * 24));

  if (diff <= 0) return null;
  return (
    <div className="flex-1 rounded-2xl p-4 flex flex-col items-center justify-center" style={{ background: '#1A1A2E', border: '1px solid rgba(201,168,76,0.2)' }}>
      <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Days Until Trip</p>
      <p style={{ color: '#C9A84C', fontSize: '42px', fontWeight: 800, lineHeight: 1, margin: 0 }}>{diff}</p>
      <p style={{ color: '#8A8A9A', fontSize: '11px', marginTop: '4px' }}>Apr 27, 2026</p>
    </div>
  );
}

function DayProgressCard({ dayNumber }) {
  return (
    <div className="flex-1 rounded-2xl p-4" style={{ background: '#1A1A2E', border: '1px solid rgba(201,168,76,0.2)' }}>
      <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Trip Progress</p>
      <p style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: 800, lineHeight: 1, margin: 0 }}>
        Day <span style={{ color: '#C9A84C' }}>{dayNumber}</span>
        <span style={{ color: '#8A8A9A', fontSize: '16px' }}> / {TOTAL_DAYS}</span>
      </p>
      <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '4px', height: '4px', marginTop: '10px', overflow: 'hidden' }}>
        <div style={{ background: 'linear-gradient(90deg, #C9A84C, #F0D080)', height: '100%', width: `${(dayNumber / TOTAL_DAYS) * 100}%`, borderRadius: '4px', transition: 'width 0.5s' }} />
      </div>
    </div>
  );
}

function WeatherClock({ city }) {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('');

  const timezone = CITY_TIMEZONES[city] || 'America/Denver';

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  useEffect(() => {
    const cityEncoded = encodeURIComponent(city);
    fetch(`https://wttr.in/${cityEncoded}?format=3`)
      .then(r => r.text())
      .then(t => setWeather(t.trim()))
      .catch(() => setWeather('Weather unavailable'));
  }, [city]);

  return (
    <div className="mx-4 mb-4 rounded-2xl overflow-hidden flex" style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex-1 p-4" style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Weather</p>
        <p style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500, margin: 0 }}>{weather || '...'}</p>
      </div>
      <div className="flex-1 p-4 flex flex-col items-end">
        <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Local Time</p>
        <p style={{ color: '#C9A84C', fontSize: '18px', fontWeight: 700, fontVariantNumeric: 'tabular-nums', margin: 0 }}>{time}</p>
      </div>
    </div>
  );
}

function NextUpCard({ activity }) {
  if (!activity) return null;
  return (
    <div className="mx-4 mb-4 rounded-2xl p-4" style={{ background: '#1A1A2E', border: '2px solid #C9A84C' }}>
      <p style={{ color: '#C9A84C', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Next Up</p>
      <p style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }}>{activity.title}</p>
      <p style={{ color: '#8A8A9A', fontSize: '13px', margin: '0 0 12px' }}>
        {formatTime(activity.startTime)} {activity.location ? `· ${activity.location}` : ''}
      </p>
      {activity.mapsUrl && (
        <a href={activity.mapsUrl} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 justify-center rounded-xl py-2"
           style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Open in Maps
        </a>
      )}
    </div>
  );
}

function FunFactCard({ fact }) {
  return (
    <div className="mx-4 mb-4 rounded-2xl p-4 flex gap-3" style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
      <span style={{ fontSize: '24px' }}>💡</span>
      <div>
        <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Fun Fact</p>
        <p style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{fact}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const dayNumber = getTodayDayNumber();
  const preTrip = dayNumber === null && new Date() < new Date(TRIP_START);
  const postTrip = dayNumber === null && !preTrip;

  // If pre-trip, show day 1 data for preview
  const displayDay = dayNumber || (preTrip ? 1 : TOTAL_DAYS);
  const dayData = getDayData(displayDay);
  const activities = getActivitiesForDay(displayDay);
  const nextActivity = dayNumber ? getNextActivity(dayNumber) : null;
  const quote = QUOTES[(displayDay - 1) % QUOTES.length];
  const fact = FUN_FACTS[(displayDay - 1) % FUN_FACTS.length];

  const tripStartDate = new Date(TRIP_START);
  const now = new Date();
  const daysUntil = Math.ceil((tripStartDate - now) / (1000 * 60 * 60 * 24));

  return (
    <div className="pb-nav overflow-y-auto h-full">
      {/* Hero */}
      {dayData && (
        <HeroImage
          dayNumber={displayDay}
          city={dayData.city}
          country={dayData.country}
          date={formatDate(dayData.date)}
          height="56vw"
        />
      )}

      {/* Countdown / Progress Cards */}
      <div className="flex gap-3 mx-4 my-4">
        {preTrip && daysUntil > 0 && <DaysUntilCard />}
        {dayNumber && <DayProgressCard dayNumber={dayNumber} />}
        {(preTrip || dayNumber) && dayData && (
          <div className="flex-1 rounded-2xl p-4 flex flex-col justify-between" style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>Today</p>
            <div>
              <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, margin: 0 }}>{dayData.city}</p>
              <p style={{ color: '#8A8A9A', fontSize: '12px', margin: '2px 0 0' }}>{dayData.country}</p>
            </div>
          </div>
        )}
      </div>

      {/* Weather + Clock */}
      {dayData && <WeatherClock city={dayData.city} />}

      {/* Next Up */}
      {nextActivity && <NextUpCard activity={nextActivity} />}

      {/* Today's Schedule */}
      {activities.length > 0 && (
        <div className="mx-4 mb-4 rounded-2xl p-4" style={{ background: '#1A1A2E', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ color: '#8A8A9A', fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>Today's Schedule</p>
          {activities.map(a => (
            <ActivityCard key={a.id} activity={a} compact />
          ))}
        </div>
      )}

      {/* Fun Fact */}
      <FunFactCard fact={fact} />

      {/* Rick Rubin Quote */}
      <QuoteCard quote={quote} />

      <div style={{ height: '8px' }} />
    </div>
  );
}
