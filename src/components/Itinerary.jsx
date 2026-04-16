import { useState } from 'react';
import DayTabBar from './DayTabBar';
import HeroImage from './HeroImage';
import ActivityCard from './ActivityCard';
import { getTodayDayNumber, getDayData, getActivitiesForDay, formatDate } from '../data/tripData';

export default function Itinerary() {
  const todayDay = getTodayDayNumber();
  const [selectedDay, setSelectedDay] = useState(todayDay || 6);

  const dayData = getDayData(selectedDay);
  const activities = getActivitiesForDay(selectedDay);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DayTabBar selectedDay={selectedDay} onSelect={setSelectedDay} />

      <div className="flex-1 overflow-y-auto pb-nav">
        {dayData && (
          <HeroImage
            dayNumber={selectedDay}
            city={dayData.city}
            country={dayData.country}
            date={formatDate(dayData.date)}
            height="200px"
          />
        )}

        {dayData && (
          <div className="px-4 py-3" style={{ background: '#1A1A2E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ background: '#C9A84C', color: '#0A1931', borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Day {selectedDay}
              </span>
              {todayDay === selectedDay && (
                <span style={{ background: 'rgba(201,168,76,0.2)', color: '#C9A84C', borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Today
                </span>
              )}
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: 1.5, margin: 0, marginTop: '4px' }}>{dayData.summary}</p>
          </div>
        )}

        <div className="p-4">
          {activities.length === 0 ? (
            <p style={{ color: '#8A8A9A', textAlign: 'center', marginTop: '32px' }}>No activities scheduled.</p>
          ) : (
            activities.map(a => <ActivityCard key={a.id} activity={a} />)
          )}
        </div>
      </div>
    </div>
  );
}
