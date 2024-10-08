import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Head from "./components/Head"
import ListItem from "./components/ListItem"
import TextIn from "./components/TextInput"

export default function App() {
  const [listI, setlistI] = useState([
    {text: "Вывести Хамстер комбат", key: '1'},
  ])

  const addHandler = (text) =>  {
    setlistI((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    });
  };

  const del = (key) =>{
    setlistI((list) => {
      return list.filter(listI => listI.key != key)
    });
  }

  return (
    <View style={styles.container}>
      <Head/>
      <View style={styles.lists}>
        <FlatList style={styles.items} data= {listI} renderItem={({ item }) => (
          <ListItem el={item} del={del} />
        )} />
      </View>
      <TextIn addHandler={addHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#219ebc',
    position: "relative",
  },

  items: {
    height: "72%",
  },
  
  lists: {
    display: "flex",
    marginLeft: "10%",
  },
});
