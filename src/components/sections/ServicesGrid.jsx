import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import SmartImage from '../ui/SmartImage';
import CardSlider from '../ui/CardSlider';
import { services } from '../../data/services';

export default function ServicesGrid() {
  return (
    <section className="section" id="services-grid">
      <div className="container">
        <SectionHeading number="01" eyebrow="What we do" title="Eight services. One accountable partner." text="From daily plant operations to turnkey electrical projects, our integrated teams cover the full life of your power and utility assets." />
        <Reveal>
          <CardSlider perView={4} label="Services">
            {services.map((s) => (
              <Link key={s.slug} to={`/services#${s.slug}`} className="card card--service">
                <div className="card__media">
                  <div className="card__img"><SmartImage src={s.image} alt={s.title} /></div>
                  <span className="card__icon"><Icon name={s.icon} size={26} /></span>
                </div>
                <div className="card__body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="card__more">Learn more <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </CardSlider>
        </Reveal>
      </div>
    </section>
  );
}
