import { useState, useEffect } from 'react';
import { useAppContext } from '../App';

const DISMISSED_KEY = 'byu_dismissed_announcements';

function getDismissed() {
  try { return JSON.parse(localStorage.getItem(DISMISSED_KEY) || '[]'); }
  catch { return []; }
}

export default function AnnouncementBanner() {
  const { announcements } = useAppContext();
  const [dismissed, setDismissed] = useState(getDismissed);

  // Re-read dismissed list whenever announcements update or tab regains focus
  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') setDismissed(getDismissed());
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  const visible = announcements.find(a => a.active && !dismissed.includes(a.id)) || null;

  if (!visible) return null;

  const dismiss = () => {
    const next = [...dismissed, visible.id];
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(next));
    setDismissed(next);
  };

  return (
    <div style={{
      background: '#073C77', color: '#FFFFFF',
      padding: '10px 16px',
      display: 'flex', alignItems: 'flex-start', gap: '10px',
      borderBottom: '1px solid rgba(255,255,255,0.12)',
      flexShrink: 0,
    }}>
      {visible.emoji && (
        <span style={{ fontSize: '18px', flexShrink: 0, lineHeight: 1.35 }}>{visible.emoji}</span>
      )}
      <p style={{ flex: 1, margin: 0, fontSize: '13px', lineHeight: 1.45 }}>{visible.message}</p>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.65)', fontSize: '20px',
          cursor: 'pointer', flexShrink: 0,
          lineHeight: 1, padding: 0, marginTop: '1px',
        }}
      >×</button>
    </div>
  );
}
