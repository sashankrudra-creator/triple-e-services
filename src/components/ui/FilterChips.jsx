export default function FilterChips({ options, value, onChange, allLabel = 'All', label = 'Filter' }) {
  const all = [allLabel, ...options];
  return (
    <div className="chips" role="group" aria-label={label}>
      {all.map((o) => {
        const v = o === allLabel ? 'All' : o;
        return (
          <button key={o} className={`chip chip--btn ${value === v ? 'is-active' : ''}`} aria-pressed={value === v} onClick={() => onChange(v)}>
            {o}
          </button>
        );
      })}
    </div>
  );
}
