import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import AppContextProvider, { useAppContext } from '@/contexts/AppContext';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'expo-dev-client';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppContextProvider>
      <AppNavigator />
    </AppContextProvider>
  );
}

function AppNavigator() {
  const navigation = useNavigation();
  const { user } = useAppContext();

  useEffect(() => {
    const checkUserAndNavigate = async () => {
      if (user) {
        navigation.navigate('index');
      } else {
        navigation.navigate('login');
      }
      await SplashScreen.hideAsync();
    };

    checkUserAndNavigate();
  }, [user]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name='login'
        options={{
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name='looking-for'
        options={{
          gestureEnabled: false,
          headerLeft: () => null,
        }}
      />
    </Stack>
  );
}
