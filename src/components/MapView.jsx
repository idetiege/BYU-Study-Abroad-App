import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet';
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

// Ordered journey for the full-trip route line
const ROUTE_COORDS = [
  'Provo', 'Salt Lake City', 'Venice', 'Ljubljana', 'Zagreb',
  'Sarajevo', 'Mostar', 'Kotor', 'Tirana', 'Athens',
].map(c => CITY_COORDS[c]);

function getActivityCoords(activity) {
  if (activity.lat != null && activity.lng != null) {
    return [activity.lat, activity.lng];
  }
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
    .map((a, i) => {
      const baseCoords = getActivityCoords(a);
      if (!baseCoords) return null;
      const coords = (a.lat != null) ? baseCoords : addJitter(baseCoords, i);
      return { ...a, coords };
    })
    .filter(Boolean);

  const todayPath = (mode === 'today' && todayDay && mappable.length > 1)
    ? mappable.map(a => a.coords)
    : null;

  const centerDay = todayDay
    ? days.find(d => d.id === todayDay)
    : days.find(d => d.city === 'Venice');
  const center = centerDay ? (CITY_COORDS[centerDay.city] || [45.4408, 12.3155]) : [45.4408, 12.3155];
  const zoom = mode === 'today' ? 13 : 5;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%',
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'calc(60px + env(safe-area-inset-bottom))',
      overflow: 'hidden',
      background: '#FFFFFF',
    }}>
      {/* Toggle */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '8px',
        padding: '12px 16px',
        background: '#FFFFFF', borderBottom: '1px solid rgba(7,60,119,0.1)',
        flexShrink: 0,
      }}>
        {['today', 'full'].map(m => (
          <button key={m} onClick={() => setMode(m)} style={{
            padding: '8px 20px', borderRadius: '999px', border: 'none', cursor: 'pointer',
            background: mode === m ? '#E9B753' : 'rgba(7,60,119,0.08)',
            color: mode === m ? '#073C77' : '#A3876F',
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase',
          }}>
            {m === 'today' ? 'Today' : 'Full Trip'}
          </button>
        ))}
      </div>

      {(!todayDay && mode === 'today') && (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A3876F' }}>
          <div style={{ textAlign: 'center', padding: '0 32px' }}>
            <p style={{ fontSize: '40px', marginBottom: '8px' }}>🗺️</p>
            <p>Trip hasn't started yet. Switch to Full Trip to see all locations.</p>
          </div>
        </div>
      )}

      {(mode !== 'today' || todayDay) && (
        <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
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

            {/* Full trip: gold route polyline */}
            {mode === 'full' && (
              <Polyline
                positions={ROUTE_COORDS}
                pathOptions={{ color: '#E9B753', weight: 3, opacity: 0.75 }}
              />
            )}

            {/* Today: dashed gold path connecting activities in time order */}
            {mode === 'today' && todayPath && (
              <Polyline
                positions={todayPath}
                pathOptions={{ color: '#E9B753', weight: 2, opacity: 0.7, dashArray: '6 8' }}
              />
            )}

            {mappable.map(activity => (
              <CircleMarker
                key={activity.id}
                center={activity.coords}
                radius={8}
                pathOptions={{
                  fillColor: CATEGORY_COLORS[activity.category] || '#3A3A4A',
                  color: '#E9B753',
                  weight: 1.5,
                  fillOpacity: 0.9,
                }}
              >
                <Popup>
                  <div style={{ background: '#FFFFFF', color: '#073C77', borderRadius: '8px', padding: '8px 12px', minWidth: '160px', fontSize: '13px', boxShadow: '0 2px 8px rgba(7,60,119,0.12)' }}>
                    <p style={{ fontWeight: 700, margin: '0 0 4px', color: '#E9B753' }}>{activity.time}</p>
                    <p style={{ fontWeight: 600, margin: '0 0 2px' }}>{activity.title}</p>
                    {activity.location && <p style={{ color: '#A3876F', margin: 0, fontSize: '11px' }}>{activity.location}</p>}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          {/* Legend */}
          <div style={{
            position: 'absolute', bottom: '16px', left: '16px', zIndex: 1000,
            background: 'rgba(7,60,119,0.92)', backdropFilter: 'blur(8px)',
            borderRadius: '12px', padding: '10px 12px',
            display: 'flex', flexDirection: 'column', gap: '5px',
          }}>
            {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
