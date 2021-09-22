import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export function screenB({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#a21' : '#af1',
        })}>
        <Text style={styles.text}>Back to A</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
