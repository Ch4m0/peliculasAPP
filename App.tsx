import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {MenuLateral} from './src/navigation/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
