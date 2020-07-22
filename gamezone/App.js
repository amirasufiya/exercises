import React, {useState} from 'react';
import 'react-native-gesture-handler';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import Navigator from './routes/drawer';

export default function App() {
  return (
    <Navigator />  

  );
}