/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node, useState} from 'react';
import {StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Nuttakorn"
        onChangeText={val => setName(val)}
        keyboardType="default"
        maxLength={10}
        editable={true}
        secureTextEntry
        showSoftInputOnFocus={true}
        numberOfLines={1}
        multiline></TextInput>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff54f',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    textAlign: 'center',
    width: 200,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
  },
});

export default App;
