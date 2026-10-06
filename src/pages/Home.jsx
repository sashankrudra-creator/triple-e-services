import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import ServicesGrid from '../components/sections/ServicesGrid';
import BusinessSplit from '../components/sections/BusinessSplit';
import FounderSpotlight from '../components/sections/FounderSpotlight';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ClientsMarquee from '../components/sections/ClientsMarquee';
import CTABanner from '../components/sections/CTABanner';
import MaintenanceStepper from '../components/sections/MaintenanceStepper';
import PerformanceBand from '../components/sections/PerformanceBand';
import Marquee from '../components/ui/Marquee';
import useDocumentTitle from '../hooks/useDocumentTitle';

const chips = ['Special Class IBR', "'A' Grade Electrical", 'BOE Certified', 'In-house NDT', '6G Welders', 'CEA & CIEG Liaison', 'Up to 400 kV'];

export default function Home() {
  useDocumentTitle('');
  return (
    <>
      <Hero />
      <StatsBar />
      <div className="strip">
        <Marquee speed={35}>
          {chips.map((c) => (<span key={c} className="strip__chip">{c}</span>))}
        </Marquee>
      </div>
      <ServicesGrid />
      <BusinessSplit />
      <FounderSpotlight />
      <MaintenanceStepper />
      <PerformanceBand showStrength={false} />
      <FeaturedProjects />
      <ClientsMarquee />
      <CTABanner />
    </>
  );
}
