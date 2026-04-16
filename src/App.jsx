import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Itinerary from './components/Itinerary';
import ActivityDetail from './components/ActivityDetail';
import MapView from './components/MapView';
import Emergency from './components/Emergency';
import BottomNav from './components/BottomNav';
import Login from './components/Login';

function AppShell() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/activity/');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: '#0F0F0F', overflow: 'hidden', position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('byu_trip_email');
    const role = localStorage.getItem('byu_trip_role');
    if (email && role) setUser({ email, role });
    setChecked(true);
  }, []);

  if (!checked) return null;

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
