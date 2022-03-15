import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import Nav from '../components/Nav';
import { useFonts } from 'expo-font';

function Profile({route}) {

    console.log(route.params.cocktails)
    
    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            <View style={styles.list}>
                <View style={styles.profilebox}>
                    <Text style={styles.header}>{route.params.username}</Text>
                    <Image style={styles.img} source={{ uri: route.params.image }}/>
                    <Image style={styles.imggradient} source={require("../../assets/image-overlay.png")}/>
                    <Text style={styles.ingredients}>Email: {route.params.email}.</Text>
                    <Text style={styles.ingredients}>Age: {route.params.age}</Text>
                    <Text style={styles.ingredients}>Cocktails: {route.params.cocktails}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#101316',
        alignItems: 'center',
    },
    header: {
        color: "#eee",
        fontSize: 50,
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'PrataRegular',
        position: 'absolute',
        top: 360,
        maxWidth: 350,
    },
    list: {
        color: "black",
        marginVertical: 10,
        borderRadius: 20
    },
    profilebox: {
        alignItems: "flex-start",
        width: 350,
        marginTop: 0,
    },
    img: {
        height: 350,
        width: '100%',
        borderRadius: 20
    },
    imggradient: {
        height: 350,
        width: '100%',
        position: 'absolute',
        borderRadius: 20
    },
    ingredients: {
        color: '#eee',
        fontSize: 22,
        position: 'relative',
        marginVertical: 2,
        top: 70,
    },
    instructions: {
        fontSize: 15,
        fontStyle: 'italic',
        marginHorizontal: 8,
        marginRight: 15,
    }
});

export default Profile;