import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchInput from '../ui/SearchInput';
import FilterChips from '../ui/FilterChips';
import Reveal from '../ui/Reveal';
import { clients, industries, clientWall } from '../../data/clients';
import { contracts } from '../../data/contracts';
import { electricalProjects } from '../../data/electricalProjects';

const countFor = (c) => {
  const k = c.match.toLowerCase();
  const hit = (d) => `${d.client} ${d.work}`.toLowerCase().includes(k);
  return contracts.filter(hit).length + electricalProjects.filter(hit).length;
};

export default function ClientsWall() {
  const [q, setQ] = useState('');
  const [ind, setInd] = useState('All');
  const list = useMemo(() => clients.filter((c) => (ind === 'All' || c.industry === ind) && c.name.toLowerCase().includes(q.trim().toLowerCase())), [q, ind]);
  return (
    <section className="section">
      <div className="container">
        <div className="filters filters--one">
          <SearchInput value={q} onChange={setQ} placeholder="Search clients" label="Search clients" />
        </div>
        <FilterChips options={industries} value={ind} onChange={setInd} label="Industry" />
        <p className="count" aria-live="polite">{list.length} client{list.length === 1 ? '' : 's'}</p>
        <div className="clients">
          <AnimatePresence>
            {list.map((c) => {
              const n = countFor(c);
              return (
                <motion.div layout key={c.name} className="client" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}>
                  <div className="client__logo">{c.logo ? <img src={c.logo} alt="" /> : <span aria-hidden="true">{c.name.split(' ').slice(0, 2).map((w) => w[0]).join('')}</span>}</div>
                  <h3>{c.name}</h3>
                  <span className="muted">{c.industry}</span>
                  {n > 0 && <span className="badge badge--green">{n} project{n === 1 ? '' : 's'}</span>}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {list.length === 0 && <p className="empty">No clients match your search.</p>}
        <Reveal className="wall">
          <h3 className="mini-title">Our clients</h3>
          <img src={clientWall} alt="Logos of Triple E Services clients" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}
