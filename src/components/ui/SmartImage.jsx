import { useState } from 'react';
import { ImageOff } from 'lucide-react';

// Shows a branded placeholder tile if the image file is missing.
export default function SmartImage({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <ImageOff size={28} aria-hidden="true" />
        <span>{alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} {...rest} />;
}
