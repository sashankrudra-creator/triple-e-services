import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import QuoteModal from '../components/sections/QuoteModal';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [quote, setQuote] = useState({ open: false, service: '' });
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const openQuote = useCallback((service = '') => setQuote({ open: true, service }), []);
  const closeQuote = useCallback(() => setQuote((q) => ({ ...q, open: false })), []);
  const toast = useCallback((message) => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  const value = useMemo(() => ({ openQuote, toast }), [openQuote, toast]);

  return (
    <AppContext.Provider value={value}>
      {children}
      <QuoteModal open={quote.open} service={quote.service} onClose={closeQuote} />
      <div className="toasts" aria-live="polite">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              className="toast"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <Check size={16} aria-hidden="true" /> {t.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
