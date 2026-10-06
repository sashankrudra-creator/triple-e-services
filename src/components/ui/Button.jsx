import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({ variant = 'primary', size = 'md', to, href, icon, iconRight, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconRight}
    </>
  );
  const tap = { whileTap: { scale: 0.97 } };
  if (to) return (
    <motion.span {...tap} style={{ display: 'inline-flex' }}>
      <Link to={to} className={cls} {...rest}>{content}</Link>
    </motion.span>
  );
  if (href) return (
    <motion.span {...tap} style={{ display: 'inline-flex' }}>
      <a href={href} className={cls} {...rest}>{content}</a>
    </motion.span>
  );
  return (
    <motion.button type="button" className={cls} {...tap} {...rest}>
      {content}
    </motion.button>
  );
}
