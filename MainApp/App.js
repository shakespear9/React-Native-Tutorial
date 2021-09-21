/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node, useState, useEffect} from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
  ]);

  const [itemsFlat, setItemsFlat] = useState([
    {key: '1', name: 'Item 1'},
    {key: '2', name: 'Item 2'},
    {key: '3', name: 'Item 3'},
    {key: '4', name: 'Item 4'},
    {key: '5', name: 'Item 5'},
    {key: '6', name: 'Item 6'},
    {key: '7', name: 'Item 7'},
    {key: '8', name: 'Item 8'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
  ];

  const [DATA2, setData2] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);

  const [counting, setCounting] = useState(1);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems([...items, {key: 213, item: 'Leen'}]);
      setRefreshing(false);
    }, 2000);
  };

  //////////// renderItem for FlatList ////////////
  // const Item = ({name}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.text}>{name}</Text>
  //   </View>
  // );

  // const renderItem = ({item}) => <Item name={item.name} />;

  ////// renderItem for SectionList (nested array) /////
  const Item = ({item}) => <Text style={styles.text}>{item}</Text>;

  const renderItem = ({item}) => <Item item={item} />;

  const ItemHeader = ({section}) => (
    <View style={styles.item}>
      <Text style={styles.StyleSheet}>{section.title}</Text>
    </View>
  );

  const renderSectionHeaderItem = ({section}) => (
    <ItemHeader section={section} />
  );

  const onRefreshSection = () => {
    setRefreshing(true);
    setCounting(prevState => (prevState += 1));
    // addDATA();

    setRefreshing(false);
  };

  const addDATA = () => {
    setData2(prevState => {
      return [
        ...prevState,
        {
          title: 'Title' + counting,
          data: [`Item ${counting}-1`, `Item ${counting}-2`],
        },
      ];
    });
  };

  useEffect(() => {
    if (counting > 1) addDATA();
  }, [counting]);

  return (
    // <View style={styles.body}>
    //   <ScrollView
    //     horizontal={false}
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refreshing}
    //         onRefresh={onRefresh}
    //         colors={['#ff00ff']}
    //       />
    //     }>
    //     {items.map(object => {
    //       return (
    //         <View style={styles.item} key={object.key}>
    //           <Text style={styles.text}>{object.item}</Text>
    //         </View>
    //       );
    //     })}
    //   </ScrollView>
    // </View>

    // <FlatList
    //   data={itemsFlat}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}></FlatList>

    // <FlatList
    //   // horizontal
    //   // inverted
    //   keyExtractor={(item, index) => index}
    //   data={itemsFlat}
    //   renderItem={renderItem}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />

    // <SectionList
    //   sections={DATA}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={renderItem}
    //   // renderSectionHeader={({section}) => <ItemHeader section={section} />}
    //   renderSectionHeader={renderSectionHeaderItem}
    // />

    <SectionList
      sections={DATA2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item_header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshSection} />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff54f',
    flexDirection: 'column',
  },
  item_header: {
    borderWidth: 5,
    backgroundColor: '#34e1eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#f21fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
