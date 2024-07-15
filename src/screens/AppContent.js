import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useAppContext } from '../contexts/AppContext';
import LoginScreen from './LoginScreen';

export default function AppContent() {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
