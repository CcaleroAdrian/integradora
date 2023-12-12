import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <PaperProvider>
            <AppNavigator/>
          </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}