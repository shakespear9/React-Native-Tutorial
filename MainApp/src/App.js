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

const Stack = createStackNavigator();

//https://github.com/oblador/react-native-vector-icons#android
//cd android
//./gradlew clean // for sync gradle

// after edit react-native.config.js file
//react-native link

function App() {
  return (
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
  );
}

export default App;
