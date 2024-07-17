import { useContext, createContext, useState } from 'react';
import { lightTheme } from '@/constants/themes';
import { ThemeProvider } from 'styled-components/native';

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);
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
        user,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
