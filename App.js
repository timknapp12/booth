import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/styles/themes';
import { Header } from './src/components';
import AppContextProvider from './src/contexts/AppContext';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContextProvider>
        <View style={styles.container}>
          <Header title='booth' subTitle='A catalyst for connection' />
          <StatusBar style='auto' />
        </View>
      </AppContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
