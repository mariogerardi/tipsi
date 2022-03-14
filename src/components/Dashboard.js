import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function Dashboard() {

    const navigation = useNavigation(); 

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101316',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        marginTop: 5,
        borderColor: 'white',
        borderBottomWidth: .5,
    }
});

module.exports = Dashboard;