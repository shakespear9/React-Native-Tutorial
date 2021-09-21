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
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('');
  const [submiited, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submiited);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Nuttakorn"
        onChangeText={val => setName(val)}
        // keyboardType="default"
        maxLength={10}
        editable={true}
        secureTextEntry={false}
        showSoftInputOnFocus={false}
        numberOfLines={1}
        multiline={false}></TextInput>
      {/* 
      <Button
        title={submiited ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        disabled={false}
        color="#00f"
      /> */}

      {/* <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}>
        <Text style={styles.text}>{submiited ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}
        underlayColor="#dddddd">
        <Text style={styles.text}>{submiited ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback onPress={onPressHandler} style={styles.button}>
        <View style={styles.button}>
          <Text style={styles.text}>{submiited ? 'Clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback> */}

      <Pressable
        onPress={onPressHandler}
        // onLongPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        // delayLongPress={10000}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => (
          [styles.button], {backgroundColor: pressed ? '#00ff00' : '#123fff'}
        )}>
        <Text style={styles.text}>{submiited ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submiited ? (
        <Text style={styles.text}> You register as {name}</Text>
      ) : null}
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default App;
