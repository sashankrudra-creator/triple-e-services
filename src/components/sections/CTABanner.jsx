import { Phone } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { company } from '../../data/company';
import { useApp } from '../../context/AppContext';

export default function CTABanner({ title = 'Need a reliable O&M partner?', text = 'Tell us about your plant. Our engineers will respond with a practical plan.' }) {
  const { openQuote } = useApp();
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta__box">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__btns">
            <Button size="lg" onClick={() => openQuote()}>Get a Quote</Button>
            <Button size="lg" variant="ghost" href={`tel:${company.offices[0].phones[0]}`} icon={<Phone size={18} />}>Call Now</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
