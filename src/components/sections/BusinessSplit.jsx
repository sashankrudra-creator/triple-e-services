import { Quote } from 'lucide-react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { oneStop } from '../../data/company';

export default function BusinessSplit() {
  return (
    <section className="section section--dark section--grid">
      <div className="container">
        <SectionHeading light number="02" eyebrow="Our business" title="The one-stop shop for power & boiler needs" />
        <Reveal className="quote-banner">
          <Quote size={36} aria-hidden="true" />
          <p>{oneStop.quote}</p>
        </Reveal>
        <div className="grid grid--2">
          {oneStop.verticals.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="card card--dark">
                <span className="card__icon"><Icon name={v.icon} size={28} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
