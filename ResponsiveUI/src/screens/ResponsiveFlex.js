import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function ResponsiveFlex() {
  return (
    <View style={styles.container}>
      {/* <View>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
        <Text>ABCDEF</Text>
      </View> */}

      {/* <View style={styles.viewTop}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.viewMiddle}></View>
      <ScrollView
        style={[styles.viewBottom]}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}> */}
      {/* <View style={styles.viewBottom}> */}
      {/* <View style={styles.item}>
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
        </View> */}
      {/* </View> */}
      {/* </ScrollView> */}
      <KeyboardAvoidingView style={{flex: 1}}>
        {/* <ScrollView> */}
        <View style={{backgroundColor: 'black', height: 100}}>
          <Text>sadsdasdasdasdasd</Text>
        </View>
        <TextInput style={{backgroundColor: 'yellow'}}></TextInput>
        <TextInput style={{backgroundColor: 'yellow'}}></TextInput>
        <TextInput style={{backgroundColor: 'yellow'}}></TextInput>
        <TextInput style={{backgroundColor: 'yellow'}}></TextInput>
        <Text>abcdef</Text>
        <TextInput style={{backgroundColor: 'yellow'}}></TextInput>
        <Text>abcdef</Text>

        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={{backgroundColor: 'pink', height: 100}}>
            <Text>sadsdasdasdasdasd</Text>
          </View>

          <View style={{backgroundColor: 'red', height: 100}}>
            <Text>sadsdasdasdasdasd</Text>
          </View>
        </ScrollView>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </View>
  );
}

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
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
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
