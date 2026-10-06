import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index >= 0;
  const startX = useRef(null);
  const closeRef = useRef(null);
  const n = items.length;

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % n);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + n) % n);
      if (e.key === 'Tab') e.preventDefault(); // keep focus inside the lightbox controls
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      prev?.focus?.();
    };
  }, [open, index, n, onClose, onIndex]);

  const item = open ? items[index] : null;
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 60) onIndex(dx < 0 ? (index + 1) % n : (index - 1 + n) % n);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
          <div className="lightbox__bar">
            <span>{index + 1} / {n}</span>
            <button ref={closeRef} className="icon-btn icon-btn--light" onClick={onClose} aria-label="Close viewer"><X size={22} /></button>
          </div>
          <button className="lightbox__nav lightbox__nav--prev icon-btn icon-btn--light" onClick={() => onIndex((index - 1 + n) % n)} aria-label="Previous image"><ChevronLeft size={26} /></button>
          <motion.figure
            key={item.id}
            className="lightbox__fig"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            onPointerDown={(e) => (startX.current = e.clientX)}
            onPointerUp={onPointerUp}
          >
            <img src={item.src} alt={item.caption} draggable="false" />
            <figcaption>{item.caption}<small>{item.category}</small></figcaption>
          </motion.figure>
          <button className="lightbox__nav lightbox__nav--next icon-btn icon-btn--light" onClick={() => onIndex((index + 1) % n)} aria-label="Next image"><ChevronRight size={26} /></button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
