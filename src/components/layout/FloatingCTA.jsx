import { Phone, Zap } from 'lucide-react';
import { company } from '../../data/company';
import { useApp } from '../../context/AppContext';

export default function FloatingCTA() {
  const { openQuote } = useApp();
  return (
    <div className="floating">
      <a className="floating__call" href={`tel:${company.offices[0].phones[0]}`} aria-label="Call Triple E Services"><Phone size={20} /></a>
      <button className="floating__quote" onClick={() => openQuote()}><Zap size={18} aria-hidden="true" /> Request Quote</button>
    </div>
  );
}
