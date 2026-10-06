import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import CardSlider from '../ui/CardSlider';
import SmartImage from '../ui/SmartImage';

const featured = [
  { title: '1x135 MW Power Plant O&M', client: 'VSLP', place: 'Rajasthan', since: 'Since Oct 2018', img: '/images/bed-coil-boiler.jpg' },
  { title: '38.5 MW PF Boiler Plant: Electrical & C&I O&M', client: 'Bokaro Power Supply Co. (Central Govt)', place: 'Jharkhand', since: 'Since Jan 2021', img: '/images/control-room.jpg' },
  { title: '400 kV Transmission Line O&M, 27 km', client: 'JSW-MPCL / KMPCL', place: 'Chhattisgarh', since: 'Since Jun 2018', img: '/images/switchyard-towers.jpg' },
  { title: '220 kV Substation Works', client: 'Sarda Metals & Alloys', place: 'Andhra Pradesh', since: 'Feb 2022', img: '/images/transformer-erection.jpg' },
];

export default function FeaturedProjects() {
  return (
    <section className="section section--mist">
      <div className="container">
        <SectionHeading number="05" eyebrow="Track record" title="Featured projects" text="A few of the plants, lines and substations we keep running every day." />
        <Reveal>
          <CardSlider perView={3} label="Featured projects">
            {featured.map((p) => (
              <Link key={p.title} to="/projects" className="card card--photo">
                <div className="card__media">
                  <div className="card__img"><SmartImage src={p.img} alt={p.title} /></div>
                </div>
                <div className="card--photo__body">
                  <span className="badge badge--green">{p.since}</span>
                  <h3>{p.title}</h3>
                  <p>{p.client}</p>
                  <span className="muted"><MapPin size={14} aria-hidden="true" /> {p.place}</span>
                  <span className="card__more">Learn more <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </CardSlider>
        </Reveal>
        <div className="center"><Button to="/projects" iconRight={<ArrowRight size={16} />}>View all projects</Button></div>
      </div>
    </section>
  );
}
