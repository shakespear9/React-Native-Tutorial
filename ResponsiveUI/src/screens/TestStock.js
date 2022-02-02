'use strict';
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {Appbar, DataTable, TextInput} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// const windowHeight = Dimensions.get('window').height;

const TestScreen = ({route, navigation}) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  // console.log(windowHeight);

  const [bottomAvailableHeight, setBottomAvailableHeight] = useState(0);
  //   const [input, setInput] = useState('');
  // useEffect(() => {
  //   KeyEvent.onKeyDownListener(KeyEvent => {
  //     if (KeyEvent.keyCode === 131) {
  //       console.log(input);
  //     }
  //   });

  //   return () => {
  //     KeyEvent.removeKeyDownListener();
  //   };
  // }, [input]);

  const updateHeight = e => {
    // console.log(JSON.stringify(e));
    // console.log(e.nativeEvent);
    if (!bottomAvailableHeight) {
      console.log(bottomAvailableHeight);
      setBottomAvailableHeight(e.nativeEvent.layout.height);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header statusBarHeight={0} style={{elevation: 24}}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => {
            // navigation.goBack();
          }}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            {alignItems: 'center', justifyContent: 'center'},
          ]}
          pointerEvents="box-none">
          <Appbar.Content
            title="Responsive Layout"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </Appbar.Header>

      {/* <ScrollView
        style={styles.inner_container}
        contentContainerStyle={{flexGrow: 1, flexDirection: 'column'}}> */}
      {/* <View style={styles.inner_container}> */}
      {/* <ScrollView
        style={styles.footer}
        contentContainerStyle={{
          flexGrow: 1,
          height: '100%',
          flexDirection: 'column',
        }}> */}
      {/* <KeyboardAvoidingView style={styles.inner_container}> */}
      {/* <View style={styles.inner_container}> */}
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        {/* <KeyboardAvoidingView
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}> */}
        <View style={styles.header}>
          <View style={styles.input_group}>
            <Text style={styles.label_header}>Shipping Inst No.</Text>
            <TextInput style={styles.input_full} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_header}>Date</Text>
            <TextInput style={styles.input_full} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_header}>Customer PO No.</Text>
            <TextInput style={styles.input_full} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.input_group}>
            <Text style={styles.label_body}>Lot No.</Text>
            <TextInput style={styles.input_full} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_body}>Name</Text>
            <TextInput style={styles.input_full} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_body}>Size</Text>
            <TextInput style={styles.input_full} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_body}>Pack No.</Text>
            <TextInput style={styles.input_split} />
            <Text style={styles.label_body}>Qty</Text>
            <TextInput style={styles.input_split} />
          </View>
          <View style={styles.input_group}>
            <Text style={styles.label_body}>Weight</Text>
            <TextInput style={styles.input_split} />
            <Text style={styles.label_body}>G/Weight</Text>
            <TextInput style={styles.input_split} />
          </View>
        </View>

        <View style={styles.footer}>
          <DataTable style={{marginTop: 0, flex: 1, width: windowWidth}}>
            <ScrollView
              nestedScrollEnabled
              horizontal
              contentContainerStyle={{flexDirection: 'column'}}>
              <DataTable.Header style={{height: 30, marginTop: 0}}>
                <DataTable.Title
                  style={{paddingVertical: 5, flex: 0, width: 100}}>
                  Dessert
                </DataTable.Title>
                <DataTable.Title
                  style={{paddingVertical: 5, flex: 0, width: 100}}
                  numeric>
                  Calories
                </DataTable.Title>
                <DataTable.Title
                  style={{paddingVertical: 5, flex: 0, width: 100}}
                  numeric>
                  Fat
                </DataTable.Title>
                <DataTable.Title
                  style={{paddingVertical: 5, flex: 0, width: 100}}
                  numeric>
                  Fat
                </DataTable.Title>
              </DataTable.Header>
              <View style={{flex: 1}} onLayout={updateHeight}>
                <ScrollView
                  nestedScrollEnabled={true}
                  style={{
                    width: '95%',
                    // marginHorizontal: 10,
                    height: bottomAvailableHeight,
                    backgroundColor: 'skyblue',
                    // height: windowHeight * 0.1,
                    // flex: 1,
                  }}
                  contentContainerStyle={{flexGrow: 1}}>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                    <DataTable.Cell numeric>159</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                    <DataTable.Cell numeric>6.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row style={{minHeight: 25}}>
                    <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                    <DataTable.Cell numeric>237</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                    <DataTable.Cell numeric>8.0</DataTable.Cell>
                  </DataTable.Row>
                </ScrollView>
              </View>
            </ScrollView>
          </DataTable>
          {/* <ScrollView
            style={{
              height: bottomAvailableHeight,
              // flex: 1,
              backgroundColor: 'pink',
            }}
            // onLayout={updateHeight}
            nestedScrollEnabled={true}
            contentContainerStyle={{marginHorizontal: 10}}>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
            <Text>abcdef</Text>
          </ScrollView> */}
        </View>
        {/* <View style={styles.dummy}>
            <TextInput style={styles.input_split}></TextInput>
          </View> */}
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
      {/* </View> */}
      {/* </KeyboardAvoidingView> */}
      {/* </View> */}
      {/* </ScrollView> */}
      {/* <ScrollView contentContainerStyle={{flex: 1}}>
        <View> */}

      {/* </View>
      </ScrollView> */}
      {/* <ScrollView style={{flexGrow: 1}}>
          <View>
            <Text>Shipping Note No</Text>

            <Text>Shipping Note No</Text>

            <Text>Shipping Note No</Text>
          </View>
        </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  inner_container: {flex: 1, backgroundColor: 'hsl(21, 100%, 85%)'},
  header: {
    // width: '100%',
    // height: '22%',
    marginHorizontal: 10,
    flexDirection: 'column',
    paddingTop: 10,
  },
  input_group: {
    // flex: 1,
    // width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label_header: {
    // marginRight: 10,
    width: '40%',
    fontFamily: 'sans-serif-medium',
  },

  input_full: {
    flex: 1,
    // marginBottom: 10,
    height: 20,
    paddingVertical: 0,
  },
  input_split: {
    width: '25%',
    // marginBottom: 10,
    height: 20,
    paddingVertical: 0,
    marginRight: 5,
  },
  body: {
    // height: '36%',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
    paddingTop: 5,
    paddingHorizontal: 5,
    // flex: 1,
  },
  label_body: {
    marginRight: 0,
    width: '22%',
    fontFamily: 'sans-serif-medium',
  },
  footer: {
    flex: 1,
    // height: '20%',
    // overflow: 'scroll',
    // height: 160,
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: 5,
    // height: '30%',
    paddingHorizontal: 5,
  },
  dummy: {
    height: '10%',
    backgroundColor: 'yellow',
  },
  // centered: {alignItems: 'center'},
  // formHeader: {width: '100%', height: '100%'},
  // row: {
  //   width: '100%',
  //   height: '30%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   marginTop: 10,
//   // },
//   buttonContainer: {
//     width: '100%',
//     flexDirection: 'row',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'stretch',
//     flexDirection: 'column',
//   },
//   input: {
//     height: 25,
//     fontSize: 14,
//   },
//   header: {height: 90, width: '100%'},
//   row: {
//     justifyContent: 'flex-start', //Vertical
//     alignItems: 'center', //Horizontal
//     flexDirection: 'row',
//     // width: '95%',
//     // flex: 1,
//     marginHorizontal: 10,
//     // height: 100,
//   },
//   label_header: {
//     // flex: 1,
//     width: 120,
//     marginRight: 5,
//     paddingLeft: 10,
//     textAlign: 'left',
//   },
//   input_header: {
//     // flex: 2,
//     // borderRadius: 10,
//     // borderWidth: 1,
//     width: 160,
//     // height: 25,
//     // fontSize: 14,
//   },
//   body: {
//     flex: 1,
//     height: 160,
//     borderWidth: 1,
//     // marginHorizontal: 10,
//     // marginTop: 10,
//   },
//   label_body: {
//     // flex: 1,
//     width: 70,
//     marginRight: 5,
//     paddingLeft: 10,
//     textAlign: 'left',
//   },
//   input_body: {
//     // flex: 2,
//     // borderRadius: 10,
//     // borderWidth: 1,
//     width: 160,
//     // height: 25,
//     // fontSize: 14,
//   },
//   input_body_split: {
//     width: 65,
//     // height: 25,
//   },
//   viewTop: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   viewMid: {
//     flex: 1.7,
//   },
//   viewBottom: {
//     flex: 3,
//   },
// });

export default TestScreen;
