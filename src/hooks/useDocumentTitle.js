import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Triple E Services` : 'Triple E Services | Energy · Execution · Efficiency';
  }, [title]);
}
