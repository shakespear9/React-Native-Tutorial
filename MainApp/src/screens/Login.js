import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  ToastAndroid,
  Alert,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import LeenButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('userData').then(value => {
        if (value != null) {
          navigation.replace('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length === 0 || age.length === 0) {
      Alert.alert('Warning', 'Please write your data');
    } else {
      try {
        var user = {
          name: name,
          age: age,
        };

        await AsyncStorage.setItem('userData', JSON.stringify(user));
        navigation.replace('Home');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onChangeNameHandler = val => {
    setName(val);
  };

  const onChangeAgeHandler = val => {
    setAge(val);
  };

  return (
    <View style={styles.body}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={onChangeNameHandler}
        maxLength={20}
      />
      <TextInput
        placeholder="Entry your age"
        style={styles.input}
        onChangeText={onChangeAgeHandler}
        maxLength={20}
      />
      <LeenButton title="login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 130,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Login;
