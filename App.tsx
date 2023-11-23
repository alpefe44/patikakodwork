import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import Navigator from './src/Navigator';
import { Provider } from 'react-redux/es/exports';
import 'react-native-gesture-handler';
import { store } from './src/Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}

