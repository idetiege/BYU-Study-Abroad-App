export default function QuoteCard({ quote }) {
  return (
    <div className="mx-4 mb-4 rounded-2xl p-5" style={{ background: '#0A1931', border: '1px solid rgba(201,168,76,0.2)' }}>
      <div style={{ color: '#C9A84C', fontSize: '48px', lineHeight: 0.8, fontFamily: 'Georgia, serif', marginBottom: '8px', opacity: 0.8 }}>"</div>
      <p style={{ color: '#FFFFFF', fontSize: '16px', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 12px', fontFamily: 'Georgia, serif' }}>
        {quote}
      </p>
      <p style={{ color: '#C9A84C', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>
        — Rick Rubin, The Creative Act
      </p>
    </div>
  );
}
