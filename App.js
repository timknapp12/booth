import AppContextProvider from './src/contexts/AppContext';
import AppContent from './src/screens/AppContent';

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}
