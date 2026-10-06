import { useMemo, useState } from 'react';
import Tabs from '../ui/Tabs';
import SearchInput from '../ui/SearchInput';
import SectionHeading from '../ui/SectionHeading';
import { teamGroups } from '../../data/resources';

export default function TeamRoles() {
  const [active, setActive] = useState(teamGroups[0].id);
  const [q, setQ] = useState('');
  const group = teamGroups.find((g) => g.id === active);
  const roles = useMemo(() => group.roles.filter((r) => r.toLowerCase().includes(q.trim().toLowerCase())), [group, q]);
  const tabs = teamGroups.map((g) => ({ id: g.id, label: g.title, count: g.roles.length }));
  const totalMatches = useMemo(
    () => (q.trim() ? teamGroups.reduce((n, g) => n + g.roles.filter((r) => r.toLowerCase().includes(q.trim().toLowerCase())).length, 0) : null),
    [q]
  );
  return (
    <section className="section">
      <div className="container">
        <SectionHeading number="03" eyebrow="Specialised dedicated team" title="Every trade you need on one site" text="From engineers and quality inspectors to divers and hot-line experts, we mobilise the right crew for planning, execution and monitoring." />
        <div className="toolbar">
          <SearchInput value={q} onChange={setQ} placeholder="Search roles, e.g. welder" label="Search roles" />
          {totalMatches !== null && <span className="muted">{totalMatches} match{totalMatches === 1 ? '' : 'es'} across all groups</span>}
        </div>
        <Tabs tabs={tabs} active={active} onChange={setActive} label="Team groups" />
        <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="panel">
          {roles.length ? (
            <ul className="chips chips--lg">
              {roles.map((r) => (<li key={r} className="chip">{r}</li>))}
            </ul>
          ) : (
            <p className="empty">No roles match &ldquo;{q}&rdquo; in this group. Try another tab.</p>
          )}
        </div>
      </div>
    </section>
  );
}
