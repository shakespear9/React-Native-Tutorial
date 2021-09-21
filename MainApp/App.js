/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node, useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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
  const [name, setName] = useState('Leen');
  const [session, setSession] = useState({number: 6, title: 'Nuttakorn'});
  const [current, setCurrent] = useState(true);

  const [countClick, setCountClick] = useState(0);
  const [countNumber, setCountNumber] = useState(0);

  const onClickHandle = () => {
    setName('Programming with Leen');
    setSession({number: 7, title: 'ShAkESpEAr'});
    setCurrent(false);
  };

  const onAddHandle = () => {
    setCountNumber(prevCount => {
      return (prevCount += 5);
    });
    setCountClick(prevState => prevState + 1);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={container}>
      {/* <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current sesssion' : 'next session'}
      </Text>
      <Button title="Update State" onPress={onClickHandle}></Button> */}

      <Text style={styles.text}>{countNumber}</Text>

      <View style={styles.button}>
        <Button title="ADD" onPress={onAddHandle}></Button>
      </View>
      <Text style={styles.text}>You clicked {countClick} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    alignItems: 'center', // Center Horizontally
    justifyContent: 'center', // Center Vertically
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'capitalize',
  },
  button: {
    width: 150,
    height: 60,
  },
});

const styles2 = StyleSheet.create({
  body2: {
    backgroundColor: '#000000',
  },
});

const container = StyleSheet.compose(styles.body, styles2.body2);

export default App;
