import PageHero from '../components/ui/PageHero';
import ProjectsExplorer from '../components/sections/ProjectsExplorer';
import CTABanner from '../components/sections/CTABanner';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Projects() {
  useDocumentTitle('Projects');
  return (
    <>
      <PageHero image="/images/service-5.jpg" eyebrow="Projects" title="Recent contracts and project experience" text="Power (cogen and solar), boilers and utility plants, plus electrical projects across India." />
      <ProjectsExplorer />
      <CTABanner />
    </>
  );
}
