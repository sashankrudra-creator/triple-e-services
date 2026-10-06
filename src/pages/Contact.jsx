import PageHero from '../components/ui/PageHero';
import ContactSection from '../components/sections/ContactSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact');
  return (
    <>
      <PageHero image="/images/service-8.jpg" eyebrow="Contact" title="Let's talk about your plant" text="Visit either of our offices, call us, or send an enquiry below." />
      <ContactSection />
    </>
  );
}
