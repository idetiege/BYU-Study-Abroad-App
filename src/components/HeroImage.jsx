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
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,25,49,0.1) 0%, rgba(10,25,49,0.7) 70%, rgba(10,25,49,0.95) 100%)' }} />
      {/* Placeholder bg if no image */}
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg, #0A1931 0%, #1A1A2E 100%)' }} />

      {showText && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p style={{ color: '#C9A84C', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '2px' }}>
            {date}
          </p>
          <h1 style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: 800, lineHeight: 1.1, margin: 0 }}>{city}</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: 400, margin: '2px 0 0' }}>{country}</p>
        </div>
      )}
    </div>
  );
}
