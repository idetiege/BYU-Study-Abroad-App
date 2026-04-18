import { useNavigate } from 'react-router-dom';
import { CATEGORY_COLORS } from '../data/tripData';
import { useAppContext } from '../App';

function EyeIcon({ open }) {
  return open ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  );
}

export default function ActivityCard({ activity, compact = false }) {
  const navigate = useNavigate();
  const { professorMode, isActivityVisible, setVisibilityOverride } = useAppContext();
  const color = CATEGORY_COLORS[activity.category] || '#3A3A4A';
  const visible = isActivityVisible(activity);

  const handleToggle = (e) => {
    e.stopPropagation();
    setVisibilityOverride(activity.id, !visible);
  };

  if (compact) {
    return (
      <button
        onClick={() => navigate(`/activity/${activity.id}`)}
        className="w-full text-left flex items-center gap-3 py-2"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', opacity: professorMode && !visible ? 0.45 : 1 }}
      >
        <span style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 700, minWidth: '68px', fontVariantNumeric: 'tabular-nums' }}>
          {activity.time}
        </span>
        <span style={{ background: color, borderRadius: '4px', padding: '2px 8px', fontSize: '10px', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {activity.category}
        </span>
        <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500, flex: 1, textAlign: 'left' }}>
          {activity.title}
        </span>
        {professorMode ? (
          <button
            onClick={handleToggle}
            style={{ color: visible ? '#C9A84C' : '#8A8A9A', flexShrink: 0, padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <EyeIcon open={visible} />
          </button>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A9A" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate(`/activity/${activity.id}`)}
      className="w-full text-left rounded-xl overflow-hidden flex"
      style={{ background: '#1A1A2E', borderLeft: `4px solid ${color}`, marginBottom: '10px', opacity: professorMode && !visible ? 0.45 : 1 }}
    >
      <div className="flex-1 p-3">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 700 }}>{activity.time}</span>
          <span style={{ background: color, borderRadius: '4px', padding: '1px 6px', fontSize: '10px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {activity.category}
          </span>
          {professorMode && !visible && (
            <span style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '4px', padding: '1px 6px', fontSize: '10px', fontWeight: 700, color: '#DC2626', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Hidden
            </span>
          )}
        </div>
        <p style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600, margin: 0 }}>{activity.title}</p>
        {activity.location && (
          <p style={{ color: '#8A8A9A', fontSize: '12px', margin: '2px 0 0' }}>{activity.location}</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center pr-3 gap-2">
        {professorMode ? (
          <button
            onClick={handleToggle}
            style={{ color: visible ? '#C9A84C' : '#8A8A9A', padding: '6px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <EyeIcon open={visible} />
          </button>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8A9A" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        )}
      </div>
    </button>
  );
}
