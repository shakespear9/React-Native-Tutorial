import React, {forwardRef} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const LeenButton = forwardRef((props, ref) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      // onLongPress={onPressHandler}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      // delayLongPress={2000}
      android_ripple={{color: '#00f'}}
      style={({pressed}) => [
        styles.button,
        {backgroundColor: pressed ? '#dddd' : props.color},
        {...props.style},
      ]}
      ref={ref ?? null}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'normal',
    margin: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00ff00',
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default LeenButton;
