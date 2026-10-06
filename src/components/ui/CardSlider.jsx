import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Horizontal card slider: arrows sit outside the cards on desktop, below on mobile.
// `perView` sets the desktop card count (3 or 4); tablet shows 2, mobile 1 (see .slider in components.css).
export default function CardSlider({ children, perView = 4, label = 'Cards' }) {
  const track = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const items = Array.isArray(children) ? children : [children];

  const sync = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = track.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync, items.length]);

  const move = (dir) => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (el.firstElementChild.getBoundingClientRect().width + gap), behavior: 'smooth' });
  };

  return (
    <div className={`slider slider--${perView}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="slider__ctrl">
        <button type="button" className="slider__btn slider__btn--prev" onClick={() => move(-1)} disabled={!canPrev} aria-label={`Previous ${label.toLowerCase()}`}><ChevronLeft size={22} aria-hidden="true" /></button>
        <button type="button" className="slider__btn slider__btn--next" onClick={() => move(1)} disabled={!canNext} aria-label={`Next ${label.toLowerCase()}`}><ChevronRight size={22} aria-hidden="true" /></button>
      </div>
      <div className="slider__viewport">
        <div className="slider__track" ref={track} onScroll={sync}>
          {items.map((c, i) => (<div className="slider__item" key={c.key ?? i}>{c}</div>))}
        </div>
      </div>
    </div>
  );
}
