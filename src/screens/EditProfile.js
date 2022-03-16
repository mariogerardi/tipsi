import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
import Nav from '../components/Nav';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Formik } from 'formik';
import axios from 'axios';

function Edit({ route }) {

    console.log(route.params.user._id)

    const navigation = useNavigation()

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const handleSubmit = async (e) => {
        try {
            console.log(e)
            const response = await axios.put
                (
                    `https://tipsi-backend.herokuapp.com/profile/${route.params.user._id}`,
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
            <View>
                <Text style={styles.logo}>edit account</Text>
                <Formik 
                    initialValues={{ 
                    username: route.params.user.username,
                    image: route.params.user.image,
                    email: route.params.user.email
                }}
                    onSubmit={values => handleSubmit(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.list}>
                            <Text style={styles.titlenote}>username:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="username"
                                placeholderTextColor='#888'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <Text style={styles.note}>Username must be unique.</Text>
                            <Text style={styles.titlenote}>email address:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="email"
                                placeholderTextColor='#888'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <Text style={styles.note}>Email must be unique.</Text>
                            <Text style={styles.titlenote}>profile image:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="image (insert a link for now)"
                                placeholderTextColor='#888'
                                onChangeText={handleChange('image')}
                                onBlur={handleBlur('image')}
                                value={values.image}
                            />
                            <Pressable
                                onPress={() => { handleSubmit() }}
                                style={({ pressed }) => [
                                    {
                                        width: 330,
                                        height: 50,
                                        borderRadius: 5,
                                        marginTop: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: pressed
                                            ? '#0031a2'
                                            : '#0035f4',
                                    },
                                    styles.wrapperCustom
                                ]}>
                                <Text style={styles.buttontext}>confirm changes</Text>
                            </Pressable>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101316',
        alignItems: 'center',
    },
    logo: {
        width: 205,
        fontSize: 34,
        color: "#eee",
        textAlign: 'center',
        fontFamily: 'PrataRegular',
        bottom: 49,
        right: -70,
    },
    list: {
        width: 350,
        height: 400,
        backgroundColor: "#ddd",
        borderRadius: 10,
        bottom: 37,
        alignItems: 'center',
        paddingTop: 5,
    },
    input: {
        width: 330,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        marginTop: 2.5
    },
    button: {
        width: 260,
        height: 50,
        backgroundColor: "#0275d8",
        borderRadius: 10,
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        color: "white",
        borderRadius: 10,
        fontSize: 25,
    },
    account: {
        fontSize: 15,
        color: "#ddd",
        marginTop: 10,
        textAlign: 'center',
    },
    note: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        left: 15,
        fontSize: 11,
        marginTop: 4,
        marginBottom: 15,
    },
    titlenote: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        left: 15,
        fontSize: 22,
        marginTop: 5,
    }
});

export default Edit;