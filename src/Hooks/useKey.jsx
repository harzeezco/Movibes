import { useEffect, useRef } from 'react';

const useKey = (codeEvent) => {
  const domRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === codeEvent) {
        domRef.current.focus();
      }
    });
  }, [codeEvent]);

  return domRef;
};

export default useKey;
