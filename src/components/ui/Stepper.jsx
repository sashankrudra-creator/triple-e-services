import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export default function Stepper({ steps, autoPlay = true }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!autoPlay || paused || reduce) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 3200);
    return () => clearInterval(id);
  }, [autoPlay, paused, reduce, steps.length]);

  return (
    <div className="stepper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ol className="stepper__rail">
        {steps.map((s, i) => (
          <li key={s.title} className={i <= active ? 'is-done' : ''}>
            <button className={`stepper__node ${i === active ? 'is-active' : ''}`} onClick={() => { setActive(i); setPaused(true); }} aria-current={i === active ? 'step' : undefined}>
              <span className="stepper__dot">{i + 1}</span>
              <span className="stepper__label">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="stepper__bar" aria-hidden="true">
        <motion.span animate={{ width: `${((active + 1) / steps.length) * 100}%` }} transition={{ duration: 0.5 }} />
      </div>
      <div className="stepper__panel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
            <h3>{steps[active].title}</h3>
            <p>{steps[active].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
