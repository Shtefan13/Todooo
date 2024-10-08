import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Head() {

  return (
    <View>
      <Text style={styles.head}>TODOOO{"\n"}APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingTop: "16%",
    textAlign: 'center',
    color: '#ffb703',
    fontWeight: 'bold',
    fontSize: 30,
    height: 150,
    width: "100vw",
    backgroundColor: "#023047",
  },
});
