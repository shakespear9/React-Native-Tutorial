import React, {useState, useEffect} from 'react';

import {View, Pressable, Text, StyleSheet, Alert} from 'react-native';
import GlobalStyle, {globalStyleConst} from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';
import LeenButton from '../utils/CustomButton';

import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  err => {
    console.log(err);
  },
);

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
      // AsyncStorage.getItem('userData').then(value => {
      //   if (value != null) {
      //     let user = JSON.parse(value);
      //     setName(user.name);
      //     setPrevName(user.name);
      //     setAge(user.age);
      //   }
      // });
      db.transaction(tx => {
        tx.executeSql('SELECT Name,Age FROM USERS ', [], (tx, result) => {
          console.log('getting data');
          var len = result?.rows.length;
          if (len > 0) {
            let userName = result.rows.item(0).Name;
            let userAge = result.rows.item(0).Age;
            setName(userName);
            setPrevName(userName);
            setAge(userAge);
          }
        });
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
        // let user = {
        //   name: name,
        // };
        // await AsyncStorage.mergeItem('userData', JSON.stringify(user));
        setPrevName(name);
        db.transaction(tx => {
          tx.executeSql(
            `UPDATE USERS 
            SET NAME = ?
            WHERE ID = 1;
            `,
            [name],
            () => {
              Alert.alert('Success!', 'Your data has been updated');
            },
            error => {
              console.log(error);
            },
          );
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('userName');
      // await AsyncStorage.clear();
      console.log('logging out');
      db.transaction(tx => {
        tx.executeSql(
          `DELETE FROM USERS`,
          [],
          () => {
            navigation.replace('Login');
          },
          error => console.log(error),
        );
      });
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
