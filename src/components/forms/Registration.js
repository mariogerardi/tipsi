import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import axios from 'axios';

function RegisterForm() {

    const navigation = useNavigation();

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post
                (
                    'https://tipsi-backend.herokuapp.com/auth/signup',
                    e,
                );
            console.log(`response is ${response}`)
            if (response.status === 201) {
                alert(`You have created: ${JSON.stringify(response.data)}`);
            }
            navigation.push("Home", e)
        } catch (err) {
            console.log(err);
        }
    };

    return (
    <Formik 
        initialValues={{ email: '',  }}
        onSubmit={values => handleSubmit(values)}
    >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.list}>
            <TextInput 
                style={styles.input}
                placeholder="username"
                placeholderTextColor='#888'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
            />
            <TextInput 
                style={styles.input}
                placeholder="email"
                placeholderTextColor='#888'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="password"
                placeholderTextColor='#888'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
            <TextInput 
                style={styles.input}
                placeholder="age"
                placeholderTextColor='#888'
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                keyboardType='numeric'
                maxLength={2}
            />
            <Text style={styles.note}>You must be at least 21 years of age to use tipsi.</Text>
            <Pressable 
                onPress={() => {handleSubmit()}}  
                style={({ pressed }) => [
                    {
                        width: 260,
                        height: 50,
                        borderRadius: 5,
                        marginTop: 7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: pressed
                        ? '#0031a2'
                        : '#0035f4',
                    },
                    styles.wrapperCustom
                ]}>
                <Text style={styles.buttontext}>sign up</Text>
            </Pressable>
        </View> 
        )}
    </Formik>
)};

const styles = StyleSheet.create({
	container: {
        flex: 1,
		backgroundColor: '#101316',
		alignItems: 'center',
	},
	logo: {
        fontSize: 60,
        color: "#eee",
        marginVertical: 40,
        textAlign: 'center',
        fontFamily: 'PrataRegular',
    },
    list: {
        width: 290,
        height: 350,
        backgroundColor: "#ddd",
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        width: 260,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        marginTop: 15
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
        fontSize: 11,
        marginTop: 7,
    }
});

export default RegisterForm;