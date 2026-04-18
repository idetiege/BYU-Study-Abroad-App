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
         style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '0 8px', flexShrink: 0 }}>
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
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: isSelected ? '#073C77' : '#A3876F' }}>
              DAY {day.id}
            </span>
            <span style={{ fontSize: '12px', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#073C77' : '#A3876F', margin: '1px 0' }}>
              {day.city.split(' ')[0]}
            </span>
            <span style={{ fontSize: '10px', color: isSelected ? '#073C77' : '#A3876F' }}>
              {formatShortDate(day.date)}
            </span>
            {isSelected && (
              <div style={{ position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '3px', background: '#073C77', borderRadius: '2px 2px 0 0' }} />
            )}
            {isToday && !isSelected && (
              <div style={{ position: 'absolute', bottom: 0, left: '12px', right: '12px', height: '2px', background: 'rgba(7,60,119,0.2)', borderRadius: '1px 1px 0 0' }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
