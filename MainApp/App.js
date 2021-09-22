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
  Alert,
  ToastAndroid,
  Modal,
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
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submiited);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning !</Text>
            </View>
            <View style={styles.warning_body}>
              <Text>The name must be longer than 3 characters.</Text>
            </View>
            <View style={styles.warning_footer}>
              <Pressable
                onPress={() => setShowWarning(false)}
                android_ripple={{color: '#fff', borderless: false}}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
        // delayLongPress={2000}
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
    alignItems: 'center', // Vertical
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'normal',
    margin: 10,
    textAlign: 'center',
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
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1323',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warning_footer: {
    height: 50,
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default App;
