import { Search, X } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder = 'Search…', label = 'Search' }) {
  return (
    <label className="search">
      <span className="sr-only">{label}</span>
      <Search size={18} aria-hidden="true" />
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
      {value && (
        <button type="button" onClick={() => onChange('')} aria-label="Clear search"><X size={16} /></button>
      )}
    </label>
  );
}
