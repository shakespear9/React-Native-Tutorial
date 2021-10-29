/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.viewMiddle}></View>
      <View style={styles.viewBottom}>
        <View style={styles.item}>
          <View style={styles.itemInner} />
        </View>
        <View style={styles.item}>
          <View style={styles.itemInner} />
        </View>
        <View style={styles.item}>
          <View style={styles.itemInner} />
        </View>
        <View style={styles.item}>
          <View style={styles.itemInner} />
        </View>
        <View style={styles.item}>
          <View style={styles.itemInner} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1',
  },
  circle: {
    width: 140,
    height: 140,
    borderColor: '#fff',
    backgroundColor: '#eee',
    borderWidth: 4,
    borderRadius: 100,
  },
  viewMiddle: {
    height: '10%',
    backgroundColor: '#7fbcac',
  },
  viewBottom: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 5,
  },
  item: {
    padding: 5,
    width: '50%',
    height: '50%',
  },
  itemInner: {
    flex: 1,
    backgroundColor: '#292929',
  },
});

export default App;
