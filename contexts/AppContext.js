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

  const [name, setName] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [lookingForItems, setLookingForItems] = useState([]);
  // console.log('lookingForItems', lookingForItems);
  const [lookingForIndustries, setLookingForIndustries] = useState([]);
  // console.log('lookingForIndustries', lookingForIndustries);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();
        if (sessionError)
          throw new Error(`Session error: ${sessionError.message}`);

        if (session) {
          const { user } = session;
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', user.id)
            .single();

          if (userError)
            throw new Error(`User fetch error: ${userError.message}`);

          setUser(userData);
          // console.log('User data:', userData);
        } else {
          console.log('No user is logged in');
          setUser(null);
        }
      } catch (error) {
        console.error(error.message);
        setUser(null);
      }
    };

    fetchUserData();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          fetchUserData();
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
        lookingForItems,
        setLookingForItems,
        name,
        setName,
        linkedInUrl,
        setLinkedInUrl,
        lookingForIndustries,
        setLookingForIndustries,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
