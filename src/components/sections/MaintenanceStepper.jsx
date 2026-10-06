import Stepper from '../ui/Stepper';
import SectionHeading from '../ui/SectionHeading';
import { maintenanceSteps } from '../../data/capabilities';

export default function MaintenanceStepper() {
  return (
    <section className="section section--dark section--grid">
      <div className="container">
        <SectionHeading light number="03" eyebrow="Maintenance approach" title="A structured methodology, end to end" text="Our maintenance planning focuses on identifying potential failures at an early stage, keeping critical equipment healthy and reducing forced outages." />
        <Stepper steps={maintenanceSteps} />
      </div>
    </section>
  );
}
