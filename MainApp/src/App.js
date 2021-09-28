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

import ToDo from './screens/ToDo';
import Splash from './screens/Splash';
import Done from './screens/Done';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {globalStyleConst} from './utils/GlobalStyle';

import {Provider} from 'react-redux';
import {Store} from './redux/store';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import Task from './screens/Task';
import Camera from './screens/Camera';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'clipboard-list';
          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
          }
          size = focused ? 25 : 20;
          return <FontAweSome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
        headerShown: false,
      })}>
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Login"
          screenOptions={() => ({
            headerTitleAlign: 'center',
            headerTitleStyle: [
              {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'right',
              },
              globalStyleConst.CustomFont,
            ],
            headerStyle: {backgroundColor: '#0080ff', height: 50},
          })}>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen name="My Tasks" component={HomeTabs} />
          <RootStack.Screen name="Task" component={Task} />
          <RootStack.Screen name="Camera" component={Camera} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
