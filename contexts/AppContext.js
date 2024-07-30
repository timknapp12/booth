import { useContext, createContext, useState, useEffect } from 'react';
import { lightTheme } from '@/constants/themes';
import { ThemeProvider } from 'styled-components/native';
import supabase from '@/utils/supabase';
import useGetRoles from '../hooks/useGetRoles';

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [user, setUser] = useState(null);
  // console.log('user', user);

  const [name, setName] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [lookingForItems, setLookingForItems] = useState([]);
  const [lookingForIndustries, setLookingForIndustries] = useState([]);

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

    const userListener = supabase
      .channel('public:users')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'users',
          filter: `id=eq.${user?.id}`,
        },
        (payload) => {
          if (payload.new.id === user?.id) {
            setUser(payload.new);
          }
        }
      )
      .subscribe();

    return () => {
      if (authListener?.unsubscribe) authListener.unsubscribe();
      if (userListener) supabase.removeChannel(userListener);
    };
  }, [user?.id]);

  // get roles and industries from supbase
  const { roles, industries, loadingRoles } = useGetRoles();
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
        roles,
        industries,
        loadingRoles,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
