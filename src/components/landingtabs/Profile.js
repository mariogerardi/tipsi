import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function Profile({route}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch('https://tipsi-backend.herokuapp.com/profile/profile');
            const json = await response.json();
            setData(json);
            console.log(data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    const [loaded] = useFonts({
        PrataRegular: require('../../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <View style={styles.content}>
                    <View>
                        <Image style={styles.profilepic} source={require("../../../assets/fluffums.png")}></Image>
                    </View>
                    <View>
                        <Text style={styles.header}>good to see you,</Text>
                        <Text style={styles.header}></Text>
                    </View> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 155,
        alignItems: 'center',
    },
    header: {
        color: "#eee",
        fontSize: 25,
        textAlign: 'left',
        fontFamily: 'PrataRegular',
        marginLeft: 0,
    },
    profilepic: {
        height: 70,
        width: 70,
        borderWidth: .5,
        borderRadius: 35,
        borderColor: 'white',
        marginHorizontal: 15,
    },
    list: {
        height: 125,
        width: "100%",
        marginRight: 40,
        paddingLeft: 30,
        borderTopWidth: .5,
        borderColor: 'white',
        flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 25,
    },
    viewButton: {
        width: 140,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#468',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 12.5,
    },
    addButton: {
        width: 175,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#647',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 167.5,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    }
});

export default Profile;