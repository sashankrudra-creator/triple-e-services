import { ShieldCheck } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { safetyItems, safetyChips } from '../../data/capabilities';

export default function SafetyGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading number="04" eyebrow="Safety & operational excellence" title="Safety is part of every operation" text="Our teams work with established SOPs, PTW systems, LOTO procedures, risk assessments, toolbox talks and site safety practices." />
        <ul className="chips chips--lg">
          {safetyChips.map((c) => (<li key={c} className="chip chip--green">{c}</li>))}
        </ul>
        <div className="grid grid--3">
          {safetyItems.map((s, i) => (
            <Reveal key={s} delay={(i % 3) * 0.06}>
              <div className="card card--check"><ShieldCheck size={22} aria-hidden="true" /><span>{s}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
