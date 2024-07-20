import { useState } from 'react';
import { Alert } from 'react-native';
import supabase from '@/utils/supabase';

const useAuth = (email = '', password = '') => {
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      console.log('error.message', error.message);
    } else {
      Alert.alert('Please check your inbox for email verification!');
    }
    setLoading(false);
  };

  return { signInWithEmail, signUpWithEmail, loading };
};

export default useAuth;
