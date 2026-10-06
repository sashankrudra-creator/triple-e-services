import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import SectionHeading from '../components/ui/SectionHeading';
import CapabilitiesTabs from '../components/sections/CapabilitiesTabs';
import MaintenanceStepper from '../components/sections/MaintenanceStepper';
import SafetyGrid from '../components/sections/SafetyGrid';
import PerformanceBand from '../components/sections/PerformanceBand';
import CTABanner from '../components/sections/CTABanner';
import { pillars } from '../data/capabilities';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function OandM() {
  useDocumentTitle('Operations & Maintenance');
  return (
    <>
      <PageHero image="/images/service-3.jpg" eyebrow="Power Plant Operations & Maintenance" title="Reliable Operations. Efficient Performance. Safe Execution." text="Comprehensive O&M solutions for power generation and industrial utility plants, delivered by qualified engineers, supervisors, operators and skilled technicians." />
      <section className="section">
        <div className="container">
          <SectionHeading number="01" eyebrow="Our O&M philosophy" title="Safety, Reliability, Efficiency and Continuous Improvement" text="Triple E Services delivers safe, reliable and efficient plant operations with a strong focus on equipment availability, performance optimization and cost-effective maintenance. Industry-standard O&M practices emphasise preventive and predictive maintenance, performance monitoring, reliability improvement and systematic shutdown management." />
          <div className="grid grid--4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="card card--pillar">
                  <span className="card__icon"><Icon name={p.icon} size={26} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CapabilitiesTabs />
      <MaintenanceStepper />
      <SafetyGrid />
      <PerformanceBand />
      <CTABanner />
    </>
  );
}
