import React, {useState, useEffect} from 'react';

import {View, Pressable, Text, StyleSheet, Alert} from 'react-native';
import GlobalStyle, {globalStyleConst} from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';
import LeenButton from '../utils/CustomButton';

export default function Home({navigation}) {
  const onPressHandler = () => {
    navigation.replace('Login');
    // navigation.replace('Screen_B');
    // navigation.toggleDrawer();
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [prevName, setPrevName] = useState('');

  useEffect(async () => {
    getData();
  }, []);

  const getData = () => {
    try {
      // setName(AsyncStorage.getItem('userName'));
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.name);
          setPrevName(user.name);

          setAge(user.age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'Please write your data');
    } else {
      try {
        let user = {
          name: name,
        };
        await AsyncStorage.mergeItem('userData', JSON.stringify(user));
        setPrevName(name);
        Alert.alert('Success!', 'Your data has been updated');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('userName');
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>
        Welcome {prevName}
      </Text>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>
        Your age is {age}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={val => setName(val)}
      />

      <LeenButton title="Update" color="#ff7f00" onPressFunction={updateData} />
      <LeenButton
        title="Log Out"
        color="#ff1234"
        onPressFunction={removeData}
        style={{marginTop: 10}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 130,
    marginBottom: 30,
  },
});
