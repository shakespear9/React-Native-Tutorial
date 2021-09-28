import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import LeenButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Camera({navigation, route}) {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const captureHandle = async () => {
    try {
      const data = await takePicture();
      const filePath = data.uri;
      updateTask(route.params.id, filePath);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = (id, path) => {
    console.log(id);
    console.log(tasks);
    const index = tasks.findIndex(task => task.ID === id);
    if (index > -1) {
      let newTasks = [...tasks];
      newTasks[index].Image = path;
      AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          Alert.alert('Success!', 'Task image is saved');
          navigation.goBack();
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <LeenButton
          title="Capture"
          color="#1eb900"
          onPressFunction={captureHandle}
        />
      </RNCamera>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center', //Horizontal
    justifyContent: 'flex-end', //Vertical
  },
});
