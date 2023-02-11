import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  state: boolean,
) => {
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, state);

    return () => {
      document.removeEventListener('click', handleClickOutside, state);
    };
  });
};
