import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <>
      <PageHero eyebrow="Error 404" title="This line is not energised" text="The page you are looking for does not exist or has moved." />
      <section className="section center">
        <div className="container"><Button to="/">Back to home</Button></div>
      </section>
    </>
  );
}
