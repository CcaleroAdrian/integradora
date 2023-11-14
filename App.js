import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigator from './src/navigation/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigator/>
    </Provider>
  );
}