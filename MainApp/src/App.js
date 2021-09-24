/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Node, useState} from 'react';
import {} from 'react-native';

import Home from './screens/Home';
import Login from './screens/Login';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyleConst} from './utils/GlobalStyle';

import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createStackNavigator();

//https://github.com/oblador/react-native-vector-icons#android
//cd android
//./gradlew clean // for sync gradle

// push notification
// npm install react-native-push-notification

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={() => ({
            headerTitleStyle: [
              {
                fontSize: 25,
                fontWeight: 'bold',
                backgroundColor: '#0080ff',
              },
              globalStyleConst.CustomFont,
            ],
            headerStyle: {backgroundColor: '#0080ff'},
          })}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
