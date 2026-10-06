import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { company, navLinks } from '../../data/company';
import { services } from '../../data/services';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Power plant O&amp;M, electrical EPC and expert manpower for power plants and industry across India.</p>
          <div className="footer__badges">
            <span className="badge">Special Class IBR</span>
            <span className="badge">Electrical &lsquo;A&rsquo; Grade</span>
          </div>
        </div>
        <div>
          <h3>Quick links</h3>
          <ul>
            {navLinks.map((l) => (<li key={l.to}><Link to={l.to}>{l.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (<li key={s.slug}><Link to={`/services#${s.slug}`}>{s.title}</Link></li>))}
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contact</h3>
          {company.offices.map((o) => (
            <address key={o.id}>
              <strong>{o.title}</strong>
              <span><MapPin size={14} aria-hidden="true" /> {o.lines.join(' ')}</span>
              <span><Phone size={14} aria-hidden="true" /> {o.phones.map((p, i) => (<span key={p}>{i > 0 && ' / '}<a href={`tel:${p}`}>{p}</a></span>))}</span>
            </address>
          ))}
          <span><Mail size={14} aria-hidden="true" /> {company.emails.map((m, i) => (<span key={m}>{i > 0 && ' · '}<a href={`mailto:${m}`}>{m}</a></span>))}</span>
        </div>
      </div>
      <div className="container footer__bar">
        <span>© 2026 Triple E Services. All rights reserved.</span>
        <button className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
