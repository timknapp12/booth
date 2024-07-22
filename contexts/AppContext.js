import { useContext, createContext, useState, useEffect } from 'react';
import { lightTheme } from '@/constants/themes';
import { ThemeProvider } from 'styled-components/native';
import supabase from '@/utils/supabase';

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error('Error fetching session:', error);
        setUser(null);
      } else if (session) {
        const { user } = session;

        // TODO - set up users table
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user data:', error);
        } else {
          console.log('User data:', data);
          setUser(data);
        }
      } else {
        console.log('No user is logged in');
        setUser(null);
      }
    };

    fetchUserData();

    // Optional: Set up a listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      if (authListener?.unsubscribe) authListener?.unsubscribe();
    };
  }, []);

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
