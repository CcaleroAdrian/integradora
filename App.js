import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
        <PaperProvider>
          <AppNavigator/>
        </PaperProvider>
    </Provider>
  );
}