import { useEffect, useRef } from 'react';
import { days, getTodayDayNumber, formatShortDate } from '../data/tripData';

export default function DayTabBar({ selectedDay, onSelect }) {
  const todayDay = getTodayDayNumber();
  const scrollRef = useRef(null);
  const activeRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const center = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
      if (!mounted.current) {
        container.scrollLeft = center;
        mounted.current = true;
      } else {
        container.scrollTo({ left: center, behavior: 'smooth' });
      }
    }
  }, [selectedDay]);

  return (
    <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar"
         style={{ background: '#0A1931', borderTop: 'none', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '0 8px', flexShrink: 0 }}>
      {days.map(day => {
        const isToday = todayDay === day.id;
        const isSelected = selectedDay === day.id;
        const isPast = todayDay && day.id < todayDay;

        return (
          <button
            key={day.id}
            ref={isSelected ? activeRef : null}
            onClick={() => onSelect(day.id)}
            className="flex flex-col items-center flex-shrink-0 px-3 py-2 relative"
            style={{ minWidth: '64px', opacity: isPast && !isSelected ? 0.4 : 1 }}
          >
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: isSelected ? '#C9A84C' : '#8A8A9A' }}>
              DAY {day.id}
            </span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: isSelected ? '#FFFFFF' : '#8A8A9A', margin: '1px 0' }}>
              {day.city.split(' ')[0]}
            </span>
            <span style={{ fontSize: '10px', color: isSelected ? '#C9A84C' : '#8A8A9A' }}>
              {formatShortDate(day.date)}
            </span>
            {isSelected && (
              <div style={{ position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '2px', background: '#C9A84C', borderRadius: '1px 1px 0 0' }} />
            )}
            {isToday && !isSelected && (
              <div style={{ position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '2px', background: 'rgba(201,168,76,0.4)', borderRadius: '1px 1px 0 0' }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
