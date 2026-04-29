import { NavLink } from 'react-router-dom';

const tabs = [
  { path: '/', label: 'Home', icon: HomeIcon },
  { path: '/itinerary', label: 'Itinerary', icon: CalendarIcon },
  { path: '/map', label: 'Map', icon: MapIcon },
  { path: '/phrases', label: 'Phrases', icon: PhrasesIcon },
  { path: '/emergency', label: 'Emergency', icon: PhoneIcon },
];

function HomeIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? '#E9B753' : 'none'} stroke={active ? '#E9B753' : 'rgba(255,255,255,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function CalendarIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#E9B753' : 'rgba(255,255,255,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function MapIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#E9B753' : 'rgba(255,255,255,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  );
}

function PhrasesIcon({ active }) {
  const c = active ? '#E9B753' : 'rgba(255,255,255,0.5)';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <line x1="8" y1="10" x2="16" y2="10"/>
      <line x1="8" y1="14" x2="13" y2="14"/>
    </svg>
  );
}

function PhoneIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#E9B753' : 'rgba(255,255,255,0.5)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

export default function BottomNav() {
  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
      background: '#073C77',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      <div style={{ display: 'flex', height: '60px', maxWidth: '480px', margin: '0 auto' }}>
        {tabs.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className="flex-1 flex flex-col items-center justify-center gap-1 transition-opacity"
          >
            {({ isActive }) => (
              <>
                <Icon active={isActive} />
                <span style={{ fontSize: '10px', fontWeight: isActive ? 700 : 400, color: isActive ? '#E9B753' : 'rgba(255,255,255,0.5)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
