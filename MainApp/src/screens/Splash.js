import React, {useState, useEffect, useRef, createRef} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PushNotification from 'react-native-push-notification';
import GlobalStyle from '../utils/GlobalStyle';

const Splash = ({navigation}) => {
  useEffect(() => {
    createChannel();
    setTimeout(() => {
      navigation.replace('My Tasks');
    }, 2000);
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'Task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../assets/checklist.png')}
      />
      <Text style={[styles.text, GlobalStyle.CustomFontBig]}>
        Leen To-Do List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center', //Horizontal
    justifyContent: 'center', //Vertical
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
  },
});

export default Splash;
