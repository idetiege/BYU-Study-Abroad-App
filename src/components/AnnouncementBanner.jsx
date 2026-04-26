import { useState, useEffect } from 'react';
import { announcements } from '../data/tripData';

const DISMISSED_KEY = 'byu_dismissed_announcements';

function getDismissed() {
  try { return JSON.parse(localStorage.getItem(DISMISSED_KEY) || '[]'); }
  catch { return []; }
}

function findActive() {
  const dismissed = getDismissed();
  return announcements.find(a => a.active && !dismissed.includes(a.id)) || null;
}

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(findActive);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') setVisible(findActive());
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    const dismissed = [...getDismissed(), visible.id];
    localStorage.setItem(DISMISSED_KEY, JSON.stringify(dismissed));
    setVisible(null);
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
