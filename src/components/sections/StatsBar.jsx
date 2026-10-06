import Counter from '../ui/Counter';
import Reveal from '../ui/Reveal';
import { stats } from '../../data/company';

export default function StatsBar() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05} className="stat">
            <strong><Counter value={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
