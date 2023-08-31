import { useEffect, useState } from 'react';

const useLocalStorage = (innitialState) => {
  const [storage, setStorage] = useState(() => {
    const innitialStorage = localStorage.getItem('key');

    return innitialStorage ? JSON.parse(innitialStorage) : null;
  });

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(innitialState));
  }, [innitialState]);

  return [storage, setStorage];
};

export default useLocalStorage;
