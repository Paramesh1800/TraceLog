import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Activity,
  FileText,
  Usb,
  Download,
  Clock,
  RefreshCw,
  Search,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE = 'http://localhost:8000/api';

const EventIcon = ({ type }) => {
  switch (type) {
    case 'file': return <FileText size={24} className="text-indigo-400" />;
    case 'usb': return <Usb size={24} className="text-emerald-400" />;
    case 'download': return <Download size={24} className="text-amber-400" />;
    default: return <Activity size={24} />;
  }
};

const App = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/events`);
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1 className="title">TRACE LOG</h1>
          <p style={{ color: 'var(--text-secondary)' }}>System Activity Awareness</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            className="glass-card"
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={fetchEvents}
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>
      </header>

      <main>
        <div className="timeline">
          <AnimatePresence>
            {events.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}
              >
                No activity tracked yet.
              </motion.div>
            )}

            {events.map((event, index) => (
              <motion.div
                key={event.id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card event-card"
              >
                <div className="event-icon">
                  <EventIcon type={event.event_type} />
                </div>

                <div className="event-details">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <span className={`badge badge-${event.event_type}`}>
                      {event.event_type}
                    </span>
                    <h3>{event.description}</h3>
                  </div>
                  {event.path && (
                    <p style={{ fontFamily: 'monospace', opacity: 0.7 }}>
                      {event.path}
                    </p>
                  )}
                </div>

                <div className="event-time">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={12} />
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </div>
                  <div style={{ fontSize: '0.65rem', marginTop: '0.25rem', textAlign: 'right' }}>
                    {new Date(event.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
