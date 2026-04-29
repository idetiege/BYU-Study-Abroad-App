import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { activities, days, CITY_COORDS, CATEGORY_COLORS, getTodayDayNumber } from '../data/tripData';

const ROUTE_POSITIONS = CITY_COORDS.map(c => [c.lat, c.lng]);

function mapsUrl(lat, lng) {
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
  return isIOS
    ? `https://maps.apple.com/?q=${lat},${lng}`
    : `https://maps.google.com/?q=${lat},${lng}`;
}

function sortByTime(acts) {
  return [...acts].sort((a, b) => {
    const [ah, am] = a.time.split(':').map(Number);
    const [bh, bm] = b.time.split(':').map(Number);
    return (ah * 60 + am) - (bh * 60 + bm);
  });
}

export default function MapView() {
  const [mode, setMode] = useState('today');
  const todayDay = getTodayDayNumber();

  const todayActivities = todayDay
    ? sortByTime(activities.filter(a => a.dayId === todayDay && a.lat != null && a.lng != null))
    : [];

  const todayPath = todayActivities.length > 1
    ? todayActivities.map(a => [a.lat, a.lng])
    : null;

  const todayDayObj = todayDay ? days.find(d => d.id === todayDay) : null;
  const centerCity = todayDayObj
    ? CITY_COORDS.find(c => c.city === todayDayObj.city)
    : CITY_COORDS.find(c => c.city === 'Venice');
  const center = centerCity ? [centerCity.lat, centerCity.lng] : [45.4408, 12.3155];
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
                positions={ROUTE_POSITIONS}
                pathOptions={{ color: '#E9B753', weight: 3, opacity: 0.75 }}
              />
            )}

            {/* Full trip: one city pin per destination */}
            {mode === 'full' && CITY_COORDS.map(c => (
              <CircleMarker
                key={c.city}
                center={[c.lat, c.lng]}
                radius={7}
                pathOptions={{
                  fillColor: '#073C77',
                  color: '#E9B753',
                  weight: 2,
                  fillOpacity: 0.9,
                }}
              >
                <Popup>
                  <div style={{ color: '#073C77', fontWeight: 700, fontSize: '13px', padding: '4px 8px' }}>
                    {c.city}
                  </div>
                </Popup>
              </CircleMarker>
            ))}

            {/* Today: dashed gold path connecting activities in time order */}
            {mode === 'today' && todayPath && (
              <Polyline
                positions={todayPath}
                pathOptions={{ color: '#E9B753', weight: 2, opacity: 0.7, dashArray: '6 8' }}
              />
            )}

            {/* Today: activity markers colored by category */}
            {mode === 'today' && todayActivities.map(activity => (
              <CircleMarker
                key={activity.id}
                center={[activity.lat, activity.lng]}
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
                    <p style={{ fontWeight: 600, margin: '0 0 6px' }}>{activity.title}</p>
                    {activity.location && (
                      <p style={{ color: '#A3876F', margin: '0 0 8px', fontSize: '11px' }}>{activity.location}</p>
                    )}
                    <a
                      href={mapsUrl(activity.lat, activity.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block', textAlign: 'center',
                        background: '#073C77', color: '#FFFFFF',
                        borderRadius: '8px', padding: '5px 10px',
                        fontSize: '11px', fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Open in Maps
                    </a>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

          {/* Category legend — today mode only */}
          {mode === 'today' && (
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
          )}
        </div>
      )}
    </div>
  );
}
