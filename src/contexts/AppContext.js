import { useContext, createContext, useState } from 'react';
import { lightTheme } from '../styles/themes';

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <AppContext.Provider
      value={{
        theme,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        phoneNumber,
        setPhoneNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
