/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
//import Splash from './src/screens/auth/Splash';
//import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";

function App(): JSX.Element {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      });
  },[])

  return (
    <SafeAreaView>
        <SignIn />
    </SafeAreaView>
  );
}

export default App;
