import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, text, number, align = 'left', light = false }) {
  return (
    <Reveal className={`sh sh--${align} ${light ? 'sh--light' : ''}`}>
      {number && <span className="sh__num" aria-hidden="true">{number}</span>}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="sh__title">{title}</h2>
      {text && <p className="sh__text">{text}</p>}
    </Reveal>
  );
}
