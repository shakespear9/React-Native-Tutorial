import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTaskID, setTasks} from '../redux/actions';
import {globalStyleConst} from '../utils/GlobalStyle';
import CheckBox from '@react-native-community/checkbox';

export default function ToDo({navigation}) {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    AsyncStorage.getItem('Tasks')
      .then(tasks => {
        const parsedTask = JSON.parse(tasks);
        if (parsedTask && typeof parsedTask === 'object') {
          dispatch(setTasks(parsedTask));
        }
      })
      .catch(err => console.log(err));
  };
  const getTask = taskID => {
    dispatch(setTaskID(taskID));
    navigation.navigate('Task');
  };

  const deleteTask = id => {
    const filteredTasks = tasks.filter(task => task.ID !== id);
    AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
        Alert.alert('Success!', 'Task removed successfully');
      })
      .catch(error => console.log(error));
  };

  const checkTask = (id, newValue) => {
    const index = tasks.findIndex(task => task.ID === id);
    if (index > -1) {
      let newTasks = [...tasks];
      newTasks[index].Done = newValue;
      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          Alert.alert('Success!', 'Task state is changed.');
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <View style={styles.body}>
      <StatusBar hidden={true} />
      <FlatList
        data={tasks.filter(task => task.Done === false)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              getTask(item.ID);
            }}>
            <View style={styles.item_row}>
              <View
                style={[
                  styles.item_color,
                  {
                    backgroundColor:
                      item.Color === 'red'
                        ? '#e53238'
                        : item.Color === 'blue'
                        ? '#3b5998'
                        : item.Color === 'green'
                        ? '#a4c639'
                        : '#ffffff',
                  },
                ]}
              />
              <CheckBox
                value={item.Done}
                onValueChange={newValue => checkTask(item.ID, newValue)}
              />
              <View style={styles.item_body}>
                <Text
                  style={[styles.title, globalStyleConst.CustomFontHW]}
                  numberOfLines={1}>
                  {item.Title}
                </Text>
                <Text
                  style={(styles.desc, globalStyleConst.CustomFontHW)}
                  numberOfLines={1}>
                  {item.Desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => deleteTask(item.ID)}>
                <FontAwesome5 name={'trash'} size={25} color={'#ff3636'} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setTaskID(tasks.length + 1));
          navigation.navigate('Task');
        }}>
        <FontAwesome5 name={'plus'} size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center', //vertical
    alignItems: 'center', //Horizontal
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {},
  item_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_body: {
    flex: 1,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // vertical
    borderRadius: 10,
    elevation: 5,
  },
  delete: {
    width: 50,
    height: 50,
    justifyContent: 'center', //Horizontal
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 30,
    margin: 5,
  },
  desc: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
  item_color: {
    width: 20,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
