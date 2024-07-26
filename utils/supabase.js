import { AppState } from 'react-native';
import getEnvVars from './config';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } = getEnvVars();

const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default supabase;
