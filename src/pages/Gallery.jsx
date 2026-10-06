import PageHero from '../components/ui/PageHero';
import GalleryGrid from '../components/sections/GalleryGrid';
import CTABanner from '../components/sections/CTABanner';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Gallery() {
  useDocumentTitle('Gallery');
  return (
    <>
      <PageHero image="/images/service-2.jpg" eyebrow="Photos" title="From the field" text="Operation & maintenance, overhaul and revamp, erection and shutdown, fabrication and pipeline works." />
      <GalleryGrid />
      <CTABanner />
    </>
  );
}
