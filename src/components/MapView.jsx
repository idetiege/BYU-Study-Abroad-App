import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { activities, days, CATEGORY_COLORS, getTodayDayNumber } from '../data/tripData';

const CITY_COORDS = {
  'Provo':          [40.2338, -111.6585],
  'Salt Lake City': [40.7608, -111.8910],
  'Venice':         [45.4408,  12.3155],
  'Ljubljana':      [46.0511,  14.5051],
  'Zagreb':         [45.8150,  15.9819],
  'Sarajevo':       [43.8563,  18.4131],
  'Mostar':         [43.3438,  17.8078],
  'Kotor':          [42.4247,  18.7712],
  'Tirana':         [41.3275,  19.8187],
  'Athens':         [37.9838,  23.7275],
};

function getActivityCoords(activity) {
  const day = days.find(d => d.id === activity.dayId);
  return day ? (CITY_COORDS[day.city] || null) : null;
}

function addJitter(coord, i) {
  const j = 0.003;
  return [coord[0] + Math.sin(i * 7.3) * j, coord[1] + Math.cos(i * 5.1) * j];
}

export default function MapView() {
  const [mode, setMode] = useState('today');
  const todayDay = getTodayDayNumber();

  const rawActivities = mode === 'today' && todayDay
    ? activities.filter(a => a.dayId === todayDay)
    : activities;

  const mappable = rawActivities
    .map((a, i) => ({ ...a, coords: getActivityCoords(a) }))
    .filter(a => a.coords)
    .map((a, i) => ({ ...a, coords: addJitter(a.coords, i) }));

  const centerDay = todayDay
    ? days.find(d => d.id === todayDay)
    : days.find(d => d.city === 'Venice');
  const center = centerDay ? (CITY_COORDS[centerDay.city] || [45.4408, 12.3155]) : [45.4408, 12.3155];
  const zoom = mode === 'today' ? 13 : 5;

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Toggle */}
      <div className="flex justify-center gap-2 p-3"
           style={{ background: '#0A1931', borderBottom: '1px solid rgba(201,168,76,0.2)', paddingTop: 'calc(env(safe-area-inset-top) + 12px)' }}>
        {['today', 'full'].map(m => (
          <button key={m} onClick={() => setMode(m)}
                  className="px-5 py-2 rounded-full transition-all"
                  style={{ background: mode === m ? '#C9A84C' : 'rgba(255,255,255,0.08)', color: mode === m ? '#0A1931' : '#8A8A9A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            {m === 'today' ? 'Today' : 'Full Trip'}
          </button>
        ))}
      </div>

      {(!todayDay && mode === 'today') && (
        <div className="flex-1 flex items-center justify-center" style={{ color: '#8A8A9A' }}>
          <div className="text-center px-8">
            <p style={{ fontSize: '40px', marginBottom: '8px' }}>🗺️</p>
            <p>Trip hasn't started yet. Switch to Full Trip to see all locations.</p>
          </div>
        </div>
      )}

      {(mode !== 'today' || todayDay) && (
        <div className="flex-1 relative">
          <MapContainer
            key={`${mode}-${center.join(',')}`}
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {mappable.map(activity => (
              <CircleMarker
                key={activity.id}
                center={activity.coords}
                radius={8}
                pathOptions={{ fillColor: CATEGORY_COLORS[activity.category] || '#3A3A4A', color: '#C9A84C', weight: 1.5, fillOpacity: 0.9 }}
              >
                <Popup>
                  <div style={{ background: '#1A1A2E', color: '#fff', borderRadius: '8px', padding: '8px 12px', minWidth: '160px', fontSize: '13px' }}>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: '#C9A84C' }}>{activity.time}</p>
                    <p style={{ fontWeight: 600, margin: '0 0 2px' }}>{activity.title}</p>
                    {activity.location && <p style={{ color: '#8A8A9A', margin: 0, fontSize: '11px' }}>{activity.location}</p>}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 z-[1000] rounded-xl p-3 flex flex-col gap-1"
               style={{ background: 'rgba(10,25,49,0.92)', backdropFilter: 'blur(8px)' }}>
            {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-2">
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ color: '#fff', fontSize: '10px', fontWeight: 600 }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
