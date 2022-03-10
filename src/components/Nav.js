import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Text, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { invert } from 'react-native-color-matrix-image-filters';

function Nav() {

    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.pop()}>
            <Image 
                style={styles.iconback}
                source={require("../../assets/back.png")}
            />
            </Pressable>
            <Image 
                style={styles.icondrink}
                source={require("../../assets/cocktail.png")} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#101316',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
	},
	iconback: {
        backgroundColor: '#101316',
        width: 40,
        height: 40,
        zIndex: 2,
    },
    icondrink: {
        backgroundColor: '#101316',
        position: 'relative',
        top: 10,
        marginLeft: 240,
        width: 50,
        height: 50,
        zIndex: 2,
    }
});


export default Nav;