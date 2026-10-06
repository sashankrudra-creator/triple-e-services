import PageHero from '../components/ui/PageHero';
import ResourcesBlocks from '../components/sections/ResourcesBlocks';
import TeamRoles from '../components/sections/TeamRoles';
import CTABanner from '../components/sections/CTABanner';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Resources() {
  useDocumentTitle('Resources');
  return (
    <>
      <PageHero image="/images/service-4.jpg" eyebrow="Resources" title="The people and equipment behind every job" text="Skilled manpower, tools, workshops and in-house testing, ready to mobilise at short notice." />
      <ResourcesBlocks />
      <TeamRoles />
      <CTABanner />
    </>
  );
}
