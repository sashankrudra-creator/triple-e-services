import PageHero from '../components/ui/PageHero';
import ManpowerChart from '../components/sections/ManpowerChart';
import CTABanner from '../components/sections/CTABanner';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Manpower() {
  useDocumentTitle('Manpower');
  return (
    <>
      <PageHero image="/images/overhaul-crew.jpg" eyebrow="Manpower across the country" title="1,343 people across six states" text="1,003 on permanent rolls and a further call pool tied up within each state to meet customer requirements within the shortest time." />
      <ManpowerChart />
      <CTABanner />
    </>
  );
}
