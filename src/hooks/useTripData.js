import { useState, useEffect, useCallback } from 'react';
import { activities as BASE_ACTIVITIES, days, announcements as BASE_ANNOUNCEMENTS } from '../data/tripData';
import { supabase } from '../lib/supabase';

const OVERRIDES_CACHE  = 'byu_sb_overrides';
const ANNOUNCE_CACHE   = 'byu_sb_announcements';
const OFFLINE_QUEUE    = 'byu_sb_queue';

function readCache(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); }
  catch { return null; }
}

function applyOverrides(overrides) {
  const map = {};
  overrides.forEach(o => { map[o.activity_id] = o; });

  const baseIds = new Set(BASE_ACTIVITIES.map(a => a.id));

  const merged = BASE_ACTIVITIES.map(act => {
    const o = map[act.id];
    if (!o || o.deleted) return o?.deleted ? null : act;
    return {
      ...act,
      ...(o.title        != null && { title:       o.title }),
      ...(o.time         != null && { time:         o.time }),
      ...(o.location     != null && { location:     o.location }),
      ...(o.notes        != null && { notes:        o.notes }),
      ...(o.category     != null && { category:     o.category }),
      ...(o.show_students != null && { showStudents: o.show_students }),
    };
  }).filter(Boolean);

  // Additions: rows whose activity_id doesn't exist in base
  overrides.forEach(o => {
    if (!baseIds.has(o.activity_id) && !o.deleted) {
      merged.push({
        id:          o.activity_id,
        dayId:       Number(o.day_id),
        title:       o.title        || 'New Activity',
        time:        o.time         || '09:00',
        location:    o.location     || '',
        notes:       o.notes        || '',
        category:    o.category     || 'Cultural',
        showStudents: o.show_students ?? true,
      });
    }
  });

  return merged;
}

export default function useTripData() {
  const [overrides, setOverrides]         = useState(() => readCache(OVERRIDES_CACHE) ?? []);
  const [announcements, setAnnouncements] = useState(() => readCache(ANNOUNCE_CACHE) ?? BASE_ANNOUNCEMENTS);
  const [loading, setLoading]             = useState(true);
  const [lastSynced, setLastSynced]       = useState(null);
  const [isOnline, setIsOnline]           = useState(navigator.onLine);

  const activities = applyOverrides(overrides);

  const fetchOverrides = useCallback(async () => {
    try {
      const { data, error } = await supabase.from('activity_overrides').select('*');
      if (error) throw error;
      const rows = data ?? [];
      setOverrides(rows);
      localStorage.setItem(OVERRIDES_CACHE, JSON.stringify(rows));
      setLastSynced(new Date());
    } catch { /* keep cached data */ }
  }, []);

  const fetchAnnouncements = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      const rows = data ?? [];
      setAnnouncements(rows);
      localStorage.setItem(ANNOUNCE_CACHE, JSON.stringify(rows));
    } catch { /* keep cached data */ }
  }, []);

  const flushQueue = useCallback(async () => {
    const queue = readCache(OFFLINE_QUEUE) ?? [];
    if (!queue.length) return;
    let i = 0;
    for (const item of queue) {
      try {
        const { error } = await supabase
          .from('activity_overrides')
          .upsert(item, { onConflict: 'activity_id' });
        if (error) throw error;
        i++;
      } catch { break; }
    }
    const remaining = queue.slice(i);
    if (remaining.length === 0) localStorage.removeItem(OFFLINE_QUEUE);
    else localStorage.setItem(OFFLINE_QUEUE, JSON.stringify(remaining));
    if (i > 0) await fetchOverrides();
  }, [fetchOverrides]);

  useEffect(() => {
    const handleOnline  = () => { setIsOnline(true); flushQueue(); };
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [flushQueue]);

  useEffect(() => {
    Promise.all([fetchOverrides(), fetchAnnouncements()]).finally(() => setLoading(false));
    const t1 = setInterval(fetchOverrides,      120_000);
    const t2 = setInterval(fetchAnnouncements,   60_000);
    return () => { clearInterval(t1); clearInterval(t2); };
  }, [fetchOverrides, fetchAnnouncements]);

  // Professor: upsert one activity override (or addition/deletion)
  const upsertActivityOverride = useCallback(async (activityId, dayId, fields) => {
    const payload = {
      activity_id:  String(activityId),
      day_id:       String(dayId),
      updated_at:   new Date().toISOString(),
      ...fields,
    };

    // Optimistic local update
    setOverrides(prev => {
      const next = prev.filter(o => o.activity_id !== payload.activity_id);
      return [...next, payload];
    });

    if (!navigator.onLine) {
      const queue = readCache(OFFLINE_QUEUE) ?? [];
      const idx = queue.findIndex(q => q.activity_id === payload.activity_id);
      if (idx >= 0) queue[idx] = { ...queue[idx], ...payload };
      else queue.push(payload);
      localStorage.setItem(OFFLINE_QUEUE, JSON.stringify(queue));
      return { ok: false, offline: true };
    }

    const { error } = await supabase
      .from('activity_overrides')
      .upsert(payload, { onConflict: 'activity_id' });
    if (error) throw error;
    setLastSynced(new Date());
    return { ok: true };
  }, []);

  // Professor: save or update an announcement
  const upsertAnnouncement = useCallback(async (announcement) => {
    const now = new Date().toISOString();
    const payload = {
      id:         announcement.id || `ann-${Date.now()}`,
      message:    announcement.message,
      emoji:      announcement.emoji || '📢',
      active:     announcement.active ?? false,
      created_at: announcement.created_at || now,
      updated_at: now,
    };
    const { error } = await supabase
      .from('announcements')
      .upsert(payload, { onConflict: 'id' });
    if (error) throw error;
    await fetchAnnouncements();
    return { ok: true };
  }, [fetchAnnouncements]);

  return {
    days,
    activities,
    announcements,
    loading,
    lastSynced,
    isOnline,
    upsertActivityOverride,
    upsertAnnouncement,
  };
}
