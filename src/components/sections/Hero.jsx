import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import Button from '../ui/Button';
import { heroWords } from '../../data/company';
import { useApp } from '../../context/AppContext';

// Existing hero photos from /public/images.
const slides = [
  { src: '/images/herosection1.png', pos: 'center' },
  { src: '/images/hero.jpg', pos: 'center 30%' },
  { src: '/images/herosection2.jpg', pos: 'center 35%' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const { openQuote } = useApp();

  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => setI((x) => (x + 1) % heroWords.length), 2500);
    return () => clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    if (reduce || paused) return undefined;
    const id = setTimeout(() => setSlide((x) => (x + 1) % slides.length), 6500);
    return () => clearTimeout(id);
  }, [slide, reduce, paused]);

  const go = (n) => setSlide((n + slides.length) % slides.length);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Triple E Services" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero__slides" aria-hidden="true">
        {slides.map((s, k) => (
          <div key={s.src} className={`hero__slide ${k === slide ? 'is-active' : ''}`} style={{ backgroundImage: `url('${s.src}')`, backgroundPosition: s.pos }} />
        ))}
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__in">
        <motion.div className="hero__copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow eyebrow--glow"><Zap size={14} aria-hidden="true" /> Energy · Execution · Efficiency</span>
          <h1>
            Powering Plants.<br />Delivering Performance.
          </h1>
          <p className="hero__rot" aria-live="off">
            <span className="hero__rot-label">Operations that are</span>
            <span className="hero__word-wrap">
              <AnimatePresence mode="wait">
                <motion.span key={heroWords[i]} className="hero__word" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
                  {heroWords[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
          <p className="hero__sub">
            Comprehensive O&amp;M, electrical EPC and expert manpower for power plants and industry across India.
          </p>
          <div className="hero__btns">
            <Button size="lg" iconRight={<ArrowRight size={18} />} onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}>Explore Services</Button>
            <Button size="lg" variant="ghost" to="/projects">View Projects</Button>
            <Button size="lg" variant="outline" onClick={() => openQuote()}>Get a Quote</Button>
          </div>
        </motion.div>
      </div>
      <div className="container hero__ctrl">
        <div className="hero__dots" role="group" aria-label="Choose slide">
          {slides.map((s, k) => (
            <button key={s.src} className={`hero__dot ${k === slide ? 'is-active' : ''}`} onClick={() => go(k)} aria-label={`Show slide ${k + 1}`} aria-current={k === slide ? 'true' : undefined} />
          ))}
        </div>
        <div className="hero__arrows">
          <button className="hero__arrow" onClick={() => go(slide - 1)} aria-label="Previous slide"><ChevronLeft size={20} aria-hidden="true" /></button>
          <button className="hero__arrow" onClick={() => go(slide + 1)} aria-label="Next slide"><ChevronRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  );
}
