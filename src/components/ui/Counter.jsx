import { useRef } from 'react';
import { useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

export default function Counter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const n = useCountUp(value, inView);
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
