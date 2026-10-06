import PageHero from '../components/ui/PageHero';
import ClientsWall from '../components/sections/ClientsWall';
import ClientsMarquee from '../components/sections/ClientsMarquee';
import CTABanner from '../components/sections/CTABanner';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Clients() {
  useDocumentTitle('Clients');
  return (
    <>
      <PageHero image="/images/service-6.jpg" eyebrow="Our clients" title="Trusted by plants across industries" text="Power, pharma, metals and alloys, cement, bio-fuels, ports and more." />
      <ClientsMarquee heading={false} />
      <ClientsWall />
      <CTABanner />
    </>
  );
}
