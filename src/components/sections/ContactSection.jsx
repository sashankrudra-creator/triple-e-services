import { Copy, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';
import SectionHeading from '../ui/SectionHeading';
import EnquiryForm from './EnquiryForm';
import { company, faqs } from '../../data/company';
import { useApp } from '../../context/AppContext';

export default function ContactSection() {
  const { toast } = useApp();
  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); } catch { /* clipboard may be blocked; still confirm */ }
    toast('Copied!');
  };
  return (
    <>
      <section className="section">
        <div className="container contact">
          <div className="contact__offices">
            {company.offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.1}>
                <div className="card office">
                  <h3><MapPin size={20} aria-hidden="true" /> {o.title}</h3>
                  <address>{o.lines.map((l) => (<span key={l}>{l}</span>))}</address>
                  <ul className="office__list">
                    {o.phones.map((p) => (
                      <li key={p}><Phone size={16} aria-hidden="true" /><a href={`tel:${p}`}>{p}</a><button className="icon-btn icon-btn--sm" onClick={() => copy(p)} aria-label={`Copy ${p}`}><Copy size={14} /></button></li>
                    ))}
                    {company.emails.map((m) => (
                      <li key={m}><Mail size={16} aria-hidden="true" /><a href={`mailto:${m}`}>{m}</a><button className="icon-btn icon-btn--sm" onClick={() => copy(m)} aria-label={`Copy ${m}`}><Copy size={14} /></button></li>
                    ))}
                  </ul>
                  <a className="link-btn" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`} target="_blank" rel="noreferrer">Open in Maps <ExternalLink size={14} aria-hidden="true" /></a>
                </div>
              </Reveal>
            ))}
            <Reveal className="mapcard" aria-hidden="true">
              <div className="mapcard__grid" />
              <span className="pin pin--a"><i />Srikakulam</span>
              <span className="pin pin--b"><i />Vizianagaram</span>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="contact__form">
            <h2>Send us an enquiry</h2>
            <p className="muted">We respond to every enquiry. Fields marked * are required.</p>
            <EnquiryForm idPrefix="c" />
          </Reveal>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container container--narrow">
          <SectionHeading align="center" eyebrow="FAQ" title="Quick answers" />
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
