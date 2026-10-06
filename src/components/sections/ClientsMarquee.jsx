import Marquee from '../ui/Marquee';
import { clients } from '../../data/clients';
import SectionHeading from '../ui/SectionHeading';

export function ClientTile({ c }) {
  return (
    <div className="client-chip">
      {c.logo ? <img src={c.logo} alt={c.name} /> : <span>{c.name}</span>}
    </div>
  );
}

export default function ClientsMarquee({ heading = true }) {
  return (
    <section className="section section--tight">
      {heading && (
        <div className="container">
          <SectionHeading align="center" eyebrow="Trusted by" title="Industry leaders keep their plants running with us" />
        </div>
      )}
      <Marquee speed={60}>
        {clients.map((c) => (<ClientTile key={c.name} c={c} />))}
      </Marquee>
    </section>
  );
}
