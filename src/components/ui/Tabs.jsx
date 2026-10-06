import { useRef } from 'react';
import Icon from './Icon';

export default function Tabs({ tabs, active, onChange, label = 'Tabs', variant = 'pill' }) {
  const refs = useRef([]);
  const onKey = (e, i) => {
    let n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
    if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = tabs.length - 1;
    if (n !== null) {
      e.preventDefault();
      onChange(tabs[n].id);
      refs.current[n]?.focus();
    }
  };
  return (
    <div className={`tabs tabs--${variant}`} role="tablist" aria-label={label}>
      {tabs.map((t, i) => (
        <button
          key={t.id}
          ref={(el) => (refs.current[i] = el)}
          role="tab"
          id={`tab-${t.id}`}
          aria-selected={active === t.id}
          aria-controls={`panel-${t.id}`}
          tabIndex={active === t.id ? 0 : -1}
          className={`tab ${active === t.id ? 'is-active' : ''}`}
          onClick={() => onChange(t.id)}
          onKeyDown={(e) => onKey(e, i)}
        >
          {t.icon && <Icon name={t.icon} size={18} />}
          {t.label}
          {t.count !== undefined && <span className="tab__count">{t.count}</span>}
        </button>
      ))}
    </div>
  );
}
