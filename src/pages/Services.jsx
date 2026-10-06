import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../data/services';
import { useApp } from '../context/AppContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Services() {
  useDocumentTitle('Services');
  const { openQuote } = useApp();
  const [active, setActive] = useState(services[0].slug);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    services.forEach((s) => { const el = document.getElementById(s.slug); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (slug) => document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <PageHero image="/images/service-1.jpg" eyebrow="Services" title="Everything your plant needs, from one team" text="Eight integrated services covering operations, electrical, mechanical and statutory needs." />
      <section className="section">
        <div className="container services-layout">
          <nav className="subnav" aria-label="Services">
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <button className={active === s.slug ? 'is-active' : ''} aria-current={active === s.slug ? 'true' : undefined} onClick={() => go(s.slug)}>
                    <Icon name={s.icon} size={16} /> {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal key={s.slug} className="svc" id={s.slug}>
                <div className="svc__content">
                  <div className="svc__head">
                    <span className="card__icon"><Icon name={s.icon} size={28} /></span>
                    <div>
                      <span className="svc__num">0{i + 1}</span>
                      <h2>{s.title}</h2>
                    </div>
                  </div>
                  <p className="lead">{s.short}</p>
                  <h3 className="mini-title">What we cover</h3>
                  <ul className="checklist checklist--cols">
                    {s.covers.map((c) => (<li key={c}><Check size={18} aria-hidden="true" /> {c}</li>))}
                  </ul>
                  <Button onClick={() => openQuote(s.title)}>Request this service</Button>
                </div>
                <div className="svc__image">
                  <img src={s.image} alt={s.title} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
