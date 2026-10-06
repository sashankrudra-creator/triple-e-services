import PageHero from '../components/ui/PageHero';
import Licences from '../components/sections/Licences';
import Timeline from '../components/sections/Timeline';
import FounderSpotlight from '../components/sections/FounderSpotlight';
import ExpertsGrid from '../components/sections/ExpertsGrid';
import CTABanner from '../components/sections/CTABanner';
import Reveal from '../components/ui/Reveal';
import { commitment } from '../data/capabilities';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About');
  return (
    <>
      <PageHero image="/images/service-7.jpg" eyebrow="About us" title="Engineers who run power plants" text="Triple E Services is primarily engaged in providing services relating to power plants and industry, led by engineers with decades of field experience." />
      <Licences />
      <Timeline />
      <FounderSpotlight full />
      <ExpertsGrid />
      <section className="section section--dark section--grid">
        <div className="container container--narrow">
          <Reveal className="commitment commitment--dark">
            <span className="eyebrow eyebrow--glow">Our commitment</span>
            <blockquote>&ldquo;{commitment}&rdquo;</blockquote>
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
