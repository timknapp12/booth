import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/styles/themes';
import { Header } from './src/components';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <View style={styles.container}>
        <Header>
          <Text>Open up App.js to start working on your app!</Text>
        </Header>
        <StatusBar style='auto' />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
