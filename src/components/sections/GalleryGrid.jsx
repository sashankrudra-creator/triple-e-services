import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import FilterChips from '../ui/FilterChips';
import Lightbox from '../ui/Lightbox';
import SmartImage from '../ui/SmartImage';
import { gallery, galleryCategories } from '../../data/gallery';

export default function GalleryGrid() {
  const [cat, setCat] = useState('All');
  const [idx, setIdx] = useState(null);
  const items = useMemo(() => (cat === 'All' ? gallery : gallery.filter((g) => g.category === cat)), [cat]);
  return (
    <section className="section">
      <div className="container">
        <FilterChips options={galleryCategories} value={cat} onChange={setCat} label="Gallery categories" />
        <motion.div layout className="gallery">
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button layout key={g.id} className="shot" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }} onClick={() => setIdx(i)} aria-label={`Open ${g.caption}`}>
                <SmartImage src={g.src} alt={g.caption} />
                <span className="shot__cap"><ZoomIn size={16} aria-hidden="true" /> {g.caption}<small>{g.category}</small></span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Lightbox items={items} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </section>
  );
}
