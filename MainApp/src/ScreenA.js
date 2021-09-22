import React from 'react';

import {View, Pressable, Text, StyleSheet} from 'react-native';

export default function screenA({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_B');
    // navigation.replace('Screen_B');
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#ff13'})}>
        <Text style={styles.text}>Toggle Drawer</Text>
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
