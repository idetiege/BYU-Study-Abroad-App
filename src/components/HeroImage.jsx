export default function HeroImage({ dayNumber, city, country, date, height = '56vw', showText = true }) {
  const maxHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div className="relative w-full overflow-hidden" style={{ height: maxHeight, maxHeight: '280px', minHeight: '180px' }}>
      <img
        src={`/images/day-${dayNumber || 1}.jpg`}
        alt={city}
        className="w-full h-full object-cover"
        onError={e => { e.target.style.display = 'none'; }}
      />
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #F5F0E8 0%, #E8E0D0 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top right, rgba(0,0,0,0.65) 0%, transparent 50%)' }} />

      {showText && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p style={{ color: '#E9B753', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            {date}
          </p>
          <h1 style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: 800, lineHeight: 1.1, margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{city}</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 400, margin: '2px 0 0', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{country}</p>
        </div>
      )}
    </div>
  );
}
