import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import Navigator from './src/Navigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Navigator></Navigator>
  );
}

