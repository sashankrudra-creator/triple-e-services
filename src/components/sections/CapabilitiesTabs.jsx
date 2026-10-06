import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Tabs from '../ui/Tabs';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';
import { capabilities } from '../../data/capabilities';

export default function CapabilitiesTabs() {
  const [active, setActive] = useState(capabilities[0].id);
  const cur = capabilities.find((c) => c.id === active);
  const tabs = capabilities.map((c) => ({ id: c.id, label: c.title, icon: c.icon }));
  return (
    <section className="section section--mist" id="capabilities">
      <div className="container">
        <SectionHeading number="02" eyebrow="O&M capabilities" title="Integrated support across every major plant system" text="Triple E Services provides integrated O&M support covering major power plant systems." />
        <Tabs tabs={tabs} active={active} onChange={setActive} label="O&M capability groups" />
        <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="panel">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div className="panel__head">
                <span className="card__icon"><Icon name={cur.icon} size={28} /></span>
                <h3>{cur.title}</h3>
              </div>
              <ul className="checklist checklist--cols">
                {cur.items.map((it) => (<li key={it}><Check size={18} aria-hidden="true" /> {it}</li>))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
