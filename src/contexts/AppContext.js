import { useContext, createContext, useState } from 'react';
import { lightTheme } from '../styles/themes';
const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <AppContext.Provider value={{ theme }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
