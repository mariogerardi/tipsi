import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function Profile() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch('https://tipsi-backend.herokuapp.com/profile');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    const navigation = useNavigation(); 

    const [loaded] = useFonts({
        PrataRegular: require('../../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <View style={styles.content}>
                            <View>
                                <Image style={styles.profilepic} source={require("../../../assets/fluffums.png")}></Image>
                            </View>
                            <View>
                                <Text style={styles.header}>good to see you,</Text>
                                <Text style={styles.header}>{item.username}</Text>
                            </View> 
                            <Pressable 
                                style={styles.viewButton}
                                onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}
                            >
                                <Text style={styles.buttonText}>Saved Cocktails</Text>
                            </Pressable>
                            <Pressable 
                                style={styles.addButton}
                                onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}
                            >
                                <Text style={styles.buttonText}>Your Ingredients</Text>
                            </Pressable>
                        </View>
                    )} 
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 155,
        backgroundColor: '#101316',
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
        backgroundColor: "#445",
        marginRight: 40,
        paddingLeft: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: .5,
        borderColor: 'white',
        flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
    },
    viewButton: {
        width: 150,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#0275d8',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 10,
    },
    addButton: {
        width: 150,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#28a745',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 175,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    }
});

export default Profile;