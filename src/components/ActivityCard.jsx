import { useNavigate } from 'react-router-dom';
import { CATEGORY_COLORS, formatTime } from '../data/tripData';

export default function ActivityCard({ activity, compact = false }) {
  const navigate = useNavigate();
  const color = CATEGORY_COLORS[activity.category] || '#3A3A4A';

  if (compact) {
    return (
      <button
        onClick={() => navigate(`/activity/${activity.id}`)}
        className="w-full text-left flex items-center gap-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, minWidth: '60px', fontVariantNumeric: 'tabular-nums' }}>
          {formatTime(activity.startTime)}
        </span>
        <span style={{ background: color, borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {activity.category}
        </span>
        <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500, flex: 1, textAlign: 'left' }}>
          {activity.title}
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A9A" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate(`/activity/${activity.id}`)}
      className="w-full text-left rounded-xl overflow-hidden flex"
      style={{ background: '#1A1A2E', borderLeft: `4px solid ${color}`, marginBottom: '10px' }}
    >
      <div className="flex-1 p-3">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 700 }}>{formatTime(activity.startTime)}</span>
          <span style={{ background: color, borderRadius: '4px', padding: '1px 6px', fontSize: '10px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {activity.category}
          </span>
        </div>
        <p style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, margin: 0 }}>{activity.title}</p>
        {activity.location && (
          <p style={{ color: '#8A8A9A', fontSize: '12px', margin: '2px 0 0' }}>{activity.location}</p>
        )}
      </div>
      <div className="flex items-center pr-3">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A9A" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </button>
  );
}
