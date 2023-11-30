/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/screens/auth/Splash';

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');

  return (
    <SafeAreaView>
        <Splash />
    </SafeAreaView>
  );
}

export default App;
