import { useParams, useNavigate } from 'react-router-dom';
import { activities, CATEGORY_COLORS } from '../data/tripData';

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find(a => a.id === parseInt(id));

  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center h-full" style={{ color: '#A3876F' }}>
        <p>Activity not found.</p>
        <button onClick={() => navigate(-1)} style={{ color: '#073C77', marginTop: '16px' }}>Go Back</button>
      </div>
    );
  }

  const color = CATEGORY_COLORS[activity.category] || '#3A3A4A';

  return (
    <div className="flex flex-col h-full overflow-y-auto" style={{ background: '#FFFFFF', paddingBottom: 'calc(4rem + env(safe-area-inset-bottom))' }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 sticky top-0 z-10"
           style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingTop: 'calc(env(safe-area-inset-top) + 12px)' }}>
        <button onClick={() => navigate(-1)}
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{ background: 'rgba(7,60,119,0.08)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#073C77" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span style={{ color: '#A3876F', fontSize: '14px', fontWeight: 500 }}>Activity Detail</span>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-6">
        {/* Category badge */}
        <div className="inline-block mb-3">
          <span style={{ background: color, borderRadius: '6px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            {activity.category}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ color: '#1B1B1B', fontSize: '26px', fontWeight: 800, lineHeight: 1.2, margin: '0 0 16px' }}>
          {activity.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#073C77" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span style={{ color: '#073C77', fontSize: '15px', fontWeight: 600 }}>{activity.time}</span>
          </div>

          {activity.location && (
            <div className="flex items-start gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3876F" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{ color: '#A3876F', fontSize: '15px' }}>{activity.location}</span>
            </div>
          )}

        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: '20px' }} />

        {/* Notes */}
        {activity.notes && (
          <div className="rounded-xl p-4 mb-5" style={{ background: '#F5F0E8', border: '1px solid rgba(0,0,0,0.06)' }}>
            <p style={{ color: '#A3876F', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>Notes</p>
            <p style={{ color: '#1B1B1B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>{activity.notes}</p>
          </div>
        )}

        {/* Maps button */}
        {activity.mapsUrl && (
          <a href={activity.mapsUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl"
             style={{ background: '#073C77', color: '#FFFFFF', fontSize: '16px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.5px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Maps
          </a>
        )}
      </div>
    </div>
  );
}
