import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ListItem({ el, del }) {
    return (
        <View>
            <View style={styles.box}>
                <Text style={styles.item}>{el.text}</Text>
                <TouchableOpacity onPress={() => del(el.key)}>
                    <Image style={styles.del} source={require('../assets/cross.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        height: "40px",
 
        paddingTop: "3%",
        paddingLeft: "6%",
        color: "#023047", 
        fontWeight: 'bold'
    },
    
    box: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
        height: "40px",
        width: "90%",
        flexDirection: "row",
        backgroundColor: "#ffb703",
        borderColor: "#fb8500",
        borderWidth: 2, 
        borderRadius: 8,
    },

    del: {
        height: 40,
        width: 40,
    },
});
