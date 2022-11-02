import {createContext, useContext, useEffect, useState} from 'react';

const DbContext = createContext(null);

export const useDbContext = () => {
  return useContext(DbContext);
};

export const DbContextProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [db, setDb] = useState(null);

  useEffect(() => {}, []);

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
};
