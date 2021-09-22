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
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
  Modal,
  Image,
  ImageBackground,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    // navigation.replace('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#ff13'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};

function screenB({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#a21' : '#af1',
        })}>
        <Text style={styles.text}>Back to A</Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen
          name="Screen_A"
          component={screenA}
          options={{header: () => null}}
        />
        <Stack.Screen name="Screen_B" component={screenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
