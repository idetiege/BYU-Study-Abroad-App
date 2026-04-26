import { useState, useEffect } from 'react';

export default function OfflineBanner() {
  const [online, setOnline]     = useState(() => navigator.onLine);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    let timer;
    const goOnline = () => {
      setOnline(true);
      setShowBack(true);
      timer = setTimeout(() => setShowBack(false), 2500);
    };
    const goOffline = () => {
      setOnline(false);
      setShowBack(false);
      clearTimeout(timer);
    };
    window.addEventListener('online',  goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online',  goOnline);
      window.removeEventListener('offline', goOffline);
      clearTimeout(timer);
    };
  }, []);

  if (online && !showBack) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: online ? '#166534' : '#92400E',
      color: '#FFFFFF', fontSize: '13px', fontWeight: 600,
      textAlign: 'center',
      padding: 'calc(env(safe-area-inset-top) + 8px) 16px 8px',
      letterSpacing: '0.2px',
      transition: 'background 0.3s',
    }}>
      {online
        ? '✓ Back online'
        : '⚡ You’re offline — content still available'}
    </div>
  );
}
