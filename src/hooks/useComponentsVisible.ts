import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(!isComponentVisible);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, !isComponentVisible);

    return () => {
      document.removeEventListener('click', handleClickOutside, !isComponentVisible);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
