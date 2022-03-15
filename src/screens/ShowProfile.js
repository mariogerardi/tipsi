import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, SafeAreaView, Text, Image, View, Pressable } from 'react-native';
import Nav from '../components/Nav';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Profile({route}) {

    let currentUser = route.params

    console.log(currentUser)
    
    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const navigation = useNavigation();

    function createTwoButtonAlert() {
        Alert.alert(
        "Delete Account",
        "Are you sure you want to delete your account? This cannot be undone!",
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            { 
                text: "Delete", 
                onPress: () => accountDeletion(),
            }
            ]
        );
    }

    const accountDeletion = async (e) => {
        try {
            console.log(e)
            const response = await axios.delete
                (
                    `https://tipsi-backend.herokuapp.com/profile/${currentUser._id}`,
                    e,
                );
            console.log(response)
            if (response.status === 201) {
                alert(`You have created: ${JSON.stringify(response.data)}`);
            }
            navigation.popToTop()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            <View style={styles.list}>
                <View style={styles.profilebox}>
                    <Text style={styles.header}>account details:</Text>
                    <Image style={styles.img} source={{ uri: route.params.image }}/>
                    <Image style={styles.imggradient} source={require("../../assets/image-overlay.png")}/>
                    <Text style={styles.ingredients}>username: {route.params.username}</Text>
                    <Text style={styles.ingredients}>email: {route.params.email}</Text>
                    <Text style={styles.ingredients}>age: {route.params.age}</Text>
                    <Text style={styles.header2}>settings:</Text>
                    <Text style={styles.ingredients2}>edit your account</Text>
                    <Text style={styles.ingredients2}>delete your account</Text>
                    <Text style={styles.ingredients2}>log out</Text>
                    <Pressable onPress={() => navigation.push("Edit", {user: currentUser})}>
                        <Image 
                            style={styles.iconback}
                            source={require("../../assets/profile.png")}
                        />
                    </Pressable>
                    <Pressable onPress={() => createTwoButtonAlert()}>
                        <Image 
                            style={styles.iconback}
                            source={require("../../assets/delete.png")}
                        />
                    </Pressable>
                    <Pressable onPress={() => navigation.popToTop()}>
                        <Image 
                            style={styles.iconback}
                            source={require("../../assets/logout.png")}
                        />
                    </Pressable>
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
        fontSize: 34,
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'PrataRegular',
        position: 'absolute',
        top: 360,
        maxWidth: 350,
    },
    header2: {
        color: "#eee",
        fontSize: 34,
        textAlign: 'center',
        zIndex: 2,
        fontFamily: 'PrataRegular',
        position: 'absolute',
        top: 515,
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
        color: '#ccc',
        fontSize: 20,
        position: 'relative',
        marginVertical: 2,
        top: 55,
    },
    ingredients2: {
        color: '#ccc',
        fontSize: 20,
        position: 'relative',
        marginVertical: 9,
        marginHorizontal: 50,
        top: 125,
    },
    iconback: {
        backgroundColor: 'transparent',
        marginVertical: 3,
        width: 35,
        height: 35,
        left: 5,
        zIndex: 1,
    },
});

export default Profile;