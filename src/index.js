import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Routes from './navigation/routes';

const App = () => (
  <>
    <StatusBar />
    <Routes />
  </>
)

export default App;
