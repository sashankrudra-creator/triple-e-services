import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { performancePills, commitment } from '../../data/capabilities';

export default function PerformanceBand({ showStrength = true }) {
  return (
    <section className="section section--mist">
      <div className="container">
        <SectionHeading number="04" eyebrow="Performance & reliability" title="We do not just maintain equipment. We maximise plant availability." text="Our teams support clients through the complete O&M cycle: routine operations, preventive maintenance, emergency breakdowns, major shutdowns, troubleshooting and performance improvement." />
        <ul className="pills">
          {performancePills.map((p, i) => (<Reveal as="li" key={p} delay={i * 0.05} className="pill">{p}</Reveal>))}
        </ul>
        {showStrength && (
          <div className="grid grid--2 grid--center">
            <Reveal className="strength">
              <strong>135 MW</strong>
              <span>O&amp;M Strength</span>
              <p>Experience in operating and maintaining industrial power generation facilities, including a 135 MW power plant. An integrated O&amp;M solution rather than a manpower-only service.</p>
            </Reveal>
            <Reveal delay={0.1} className="commitment">
              <span className="eyebrow">Our commitment</span>
              <blockquote>&ldquo;{commitment}&rdquo;</blockquote>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
