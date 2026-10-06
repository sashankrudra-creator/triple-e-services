import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, text, eyebrow, image, children }) {
  return (
    <section className="phero">
      {image && <div className="phero__img" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />}
      <div className="hero__grid" aria-hidden="true" />
      <div className="container phero__in">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><ChevronRight size={14} aria-hidden="true" /><span aria-current="page">{title}</span>
          </nav>
          {eyebrow && <span className="eyebrow eyebrow--glow">{eyebrow}</span>}
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
