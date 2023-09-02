import { useEffect, useState } from 'react';

const useLocalStorage = (initialState) => {
  const [watched, setWatched] = useState(() => {
    const initialStorage = localStorage.getItem('key');

    return initialStorage ? JSON.parse(initialStorage) : initialState;
  });

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(watched));
  }, [watched]);

  return [watched, setWatched];
};

export default useLocalStorage;
