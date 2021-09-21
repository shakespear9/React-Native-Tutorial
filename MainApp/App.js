/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node, useState} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('Leen');
  const [session, setSession] = useState({number: 6, title: 'Nuttakorn'});
  const [current, setCurrent] = useState(true);

  const [countClick, setCountClick] = useState(0);
  const [countNumber, setCountNumber] = useState(0);

  const onClickHandle = () => {
    setName('Programming with Leen');
    setSession({number: 7, title: 'ShAkESpEAr'});
    setCurrent(false);
  };

  const onAddHandle = () => {
    setCountNumber(prevCount => {
      return (prevCount += 5);
    });
    setCountClick(prevState => prevState + 1);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.body}>
      <View style={styles.viewTop}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.viewMiddle}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.viewMiddle}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.viewBottom}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff54f',
    flexDirection: 'column',
    alignItems: 'stretch', // Center Horizontally
    justifyContent: 'flex-start', // Center Vertically
  },

  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBottom: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#009999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#fffabc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: '#ff1234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: '#ff34ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#fedf12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: '#15456f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

const styles2 = StyleSheet.create({
  body2: {
    backgroundColor: '#000000',
  },
});

const container = StyleSheet.compose(styles.body, styles2.body2);

export default App;
