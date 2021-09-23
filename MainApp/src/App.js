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

import screenA from './screens/ScreenA';
import {screenB} from './screens/ScreenB';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-vector-icons/icon';

const Drawer = createDrawerNavigator();

//https://github.com/oblador/react-native-vector-icons#android
//cd android
//./gradlew clean // for sync gradle

// after edit react-native.config.js file
//react-native link

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={() => ({
          drawerPosition: 'right',
          drawerType: 'front',
          swipeEdgeWidth: 250,
          drawerHideStatusBarOnOpen: true,
          overlayColor: '#00000090',
          drawerStyle: {backgroundColor: '#e6e6e6', width: 250},
          headerShown: true,
          headerTitleAlign: 'center',
          swipeEnabled: true,
          gestureEnabled: false,
          headerStyle: {backgroundColor: '#0080ff'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        })}>
        <Drawer.Screen
          name="Screen_A"
          component={screenA}
          options={{
            title: 'Screen A Title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
            drawerStyle: {fontSize: 20},
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={screenB}
          options={{
            title: 'Screen B Title',
            drawerIcon: ({focused}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
          initialParams={{itemName: 'Item from Drawer', itemId: 99}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
