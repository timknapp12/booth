import { useState } from 'react';
import supabase from '@/utils/supabase';

const useAuth = (
  email = '',
  password = '',
  phoneNumber = '',
  setUser = () => {}
) => {
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error signing in:', error.message);
    }
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );

    if (signUpError) {
      console.error('Error signing up:', signUpError.message);
    } else {
      const userId = signUpData?.user?.id;

      if (userId) {
        // Insert user data into the users table
        const { error: insertError } = await supabase
          .from('users')
          .insert([{ id: userId, email: email, phone_number: phoneNumber }]);

        if (insertError) {
          console.error('Error inserting user data:', insertError);
        } else {
          console.log('User data inserted successfully');

          // Fetch and set the user data
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();

          if (userError) {
            console.error('Error fetching user data:', userError.message);
          } else {
            setUser(userData);
            console.log('User data:', userData);
          }
        }
      }
    }
    setLoading(false);
  };

  return { signInWithEmail, signUpWithEmail, loading };
};

export default useAuth;
