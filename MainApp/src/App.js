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

import screenA from './ScreenA';
import {screenB} from './ScreenB';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

//https://github.com/oblador/react-native-vector-icons#android
//cd android
//./gradlew clean // for sync gradle

function App() {
  return (
    <NavigationContainer>
      {/* this tab for TabNavigator
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
            } else {
              iconName = 'btc';
            }
            size = focused ? 25 : 20;
            color = focused ? '#f0f' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarActiveBackgroundColor: '#124',
          tabBarInactiveBackgroundColor: '#999',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 10},
        })}> */}

      {/*this tab for Material TabNavigator*/}
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
            } else {
              iconName = 'btc';
            }
            size = focused ? 20 : 15;
            // color = focused ? '#f0f' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Screen_A"
          component={screenA}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Screen_B" component={screenB} />
      </Tab.Navigator> */}

      {/*this tab for Material TopTabNavigator*/}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'autoprefixer';
            } else {
              iconName = 'btc';
            }
            size = focused ? 20 : 15;
            // color = focused ? '#f0f' : '#555';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarShowIcon: true,
          tabBarShowLabel: true,
        })}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen name="Screen_A" component={screenA} />
        <Tab.Screen name="Screen_B" component={screenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
