import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement | undefined>, callback: () => void): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any): void => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
