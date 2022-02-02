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
import ResponsiveFlex from './screens/ResponsiveFlex';
import TestStock from './screens/TestStock';
import YogaGenerated from './screens/YogaGenerated';

const App: () => Node = () => {
  // return <TestStock />;
  return <ResponsiveFlex />;
  // return <YogaGenerated />;
};

export default App;
