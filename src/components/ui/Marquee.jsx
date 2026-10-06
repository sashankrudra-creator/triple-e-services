export default function Marquee({ children, speed = 40, className = '' }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
