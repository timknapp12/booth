import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Header, ScreenContainer } from '../components';
import { useAppContext } from '../contexts/AppContext';

export default function AppContent() {
  const { theme } = useAppContext();
  return (
    <ThemeProvider theme={theme}>
      <ScreenContainer>
        <Header title='booth' subTitle='A catalyst for connection' />
        <StatusBar style='auto' />
      </ScreenContainer>
    </ThemeProvider>
  );
}
