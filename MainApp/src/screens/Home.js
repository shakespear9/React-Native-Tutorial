import React, {useState, useEffect} from 'react';

import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GlobalStyle, {globalStyleConst} from '../utils/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';
import LeenButton from '../utils/CustomButton';

import SQLite from 'react-native-sqlite-storage';
import {setAge, setName, increaseAge, getCities} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import PushNotification from 'react-native-push-notification';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: `Library`,
  },
  () => {},
  err => {
    console.log(err);
  },
);

const mockData = [
  {
    country: 'United State',
    city: 'New York',
  },
  {
    country: 'Australia',
    city: 'Sydney',
  },
  {
    country: 'Germany',
    city: 'Berlin',
  },
  {
    country: 'Thailand',
    city: 'Bangkok',
  },
];

export default function Home({navigation}) {
  const onPressHandler = () => {
    navigation.replace('Login');
    // navigation.replace('Screen_B');
    // navigation.toggleDrawer();
  };

  const {name, age, cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const [prevName, setPrevName] = useState('');

  useEffect(async () => {
    getData();
    dispatch(getCities());
    console.log(cities);
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
            // setName(userName);
            // setAge(userAge);
            dispatch(setName(userName));
            dispatch(setAge(userAge));
            setPrevName(userName);
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
        dispatch(setName(name));
        dispatch(setAge(age));
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

  const handleNotification = (item, index) => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You clicked on ' + item.country,
      message: item.city,
      bigText: item.city + 'This is Longer Text',
      color: 'red',
      id: index,
    });

    PushNotification.localNotificationSchedule({
      channelId: 'test-channel',
      title: 'Alarm',
      message: 'you clicked on' + item.country + '20 seconds ago',
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  };

  return (
    <View style={styles.body}>
      <Text style={[styles.text, GlobalStyle.CustomFont]}>
        Welcome {prevName}
      </Text>
      <FlatList
        data={cities}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              handleNotification(item, index);
              navigation.navigate('Map', {
                city: item.city,
                lat: item.lat,
                lng: item.lng,
              });
            }}>
            <View style={styles.item}>
              <Text style={styles.country}>{item.country}</Text>
              <Text style={styles.city}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}></FlatList>
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
  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  country: {
    fontSize: 30,
    margin: 10,
  },
  city: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  },
});
