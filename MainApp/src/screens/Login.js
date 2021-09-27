import React, {useState, useEffect, useRef, createRef} from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from '../redux/actions';
import PushNotification from 'react-native-push-notification';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: `deafult`,
  },
  () => {},
  err => {
    console.log(err);
  },
);

const Login = ({navigation}) => {
  const {name, age} = useSelector(state => state.userReducer); // map reducer
  const dispatch = useDispatch(); // for call action

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  const ref_input2 = useRef();
  const ref_logInButton = createRef();

  useEffect(() => {
    craeteTable();
    getData();
    createChannel();
  }, []);

  const craeteTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS USERS' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT,Name TEXT, Age INTEGER);',
      );
    });
  };

  const getData = () => {
    try {
      //   AsyncStorage.getItem('userData').then(value => {
      //     if (value != null) {
      //       navigation.replace('Home');
      //     }
      //   });
      db.transaction(tx => {
        tx.executeSql(
          'SELECT Name,Age FROM USERS WHERE ID  = 1',
          [],
          (tx, result) => {
            console.log(result);
            var len = result?.rows.length;
            if (len > 0) {
              navigation.replace('Home');
            }
          },
        );
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
        dispatch(setName(name));
        dispatch(setAge(age));
        // var user = {
        //   name: name,
        //   age: age,
        // };

        // await AsyncStorage.setItem('userData', JSON.stringify(user));
        await db.transaction(async tx => {
          //   await tx.executeSql(
          //     `INSERT INTO Users (NAME,Age) VALUES ('${name},${age});'`,
          //   );
          console.log('Inserting Data');
          await tx.executeSql(
            `INSERT INTO Users (NAME,Age) VALUES (?,?);'`,
            [name, age],
            () => {
              console.log('Success');
              navigation.replace('Home');
            },
            error => {
              console.log('Failed');
            },
          );
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const onChangeNameHandler = val => {
    // setName(val);
    dispatch(setName(val));
  };

  const onChangeAgeHandler = val => {
    // setAge(val);
    dispatch(setAge(val));
  };

  return (
    <View style={styles.body}>
      {/* <Image source={require('../../assets/redux.png')} style={styles.logo} /> */}
      <Text style={styles.text}>Redux</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={onChangeNameHandler}
        maxLength={20}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          ref_input2.current.focus();
        }}
      />
      <TextInput
        placeholder="Entry your age"
        style={styles.input}
        onChangeText={onChangeAgeHandler}
        maxLength={20}
        ref={ref_input2}
        onSubmitEditing={() => {
          ref_logInButton.current.focus();
        }}
      />
      <LeenButton
        title="login"
        color="#1eb900"
        onPressFunction={setData}
        ref={ref_logInButton}
      />
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
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 100,
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
