import React, { useState } from 'react';
import { StyleSheet, View, TextInput,  Image, TouchableOpacity } from 'react-native';


export default function TextInputt({ addHandler }) {

  const [text, setValue] = useState('')

  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.containerr}>
        <View style={styles.containerrr}>
            <View style={styles.EnterBox}>
                <TextInput style={styles.text} onChangeText={onChange} placeholder='Введите текст' />
            </View>
            <TouchableOpacity onPress={() => addHandler(text)}>
                <Image style={styles.img} source={require('../assets/arrow.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerr: {
      display: "flex",
      position: "absolute",
      bottom: 40,
      height: 30,
      width: "80%",
      marginLeft: "10%",
    },
    
    containerrr: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",  
    },

    EnterBox: {
      display: "flex",
      backgroundColor: "#ffb703",
      borderColor: "#fb8500",
      borderWidth: 2, 
      borderRadius: 8,
      width: "85%",
      marginRight: "5px",
    },

    text:{
      height: 30,
      paddingLeft: "5%",
      
      color: "#023047",
      fontWeight: 'bold',
    },

    img: {
      height: 35, 
      width: 35, 
      backgroundColor: "#ffb703", 
      borderRadius: 8, 
      borderWidth: 2, 
      borderColor: "#fb8500",
    },
});
