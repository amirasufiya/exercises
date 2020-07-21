import React from 'react';
import 'react-native-gesture-handler';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/homeStack';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App() {
  return (
    <Navigator />  

  );
}