import React, { useEffect, useState }from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button, SafeAreaView } from 'react-native';
import RegisterForm from '../components/forms/RegisterForm';
import { useFonts } from 'expo-font';

function Register({navigation}) {

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.logo}>tipsi</Text>
                <View style={styles.list}>
                    <TextInput 
                        style={styles.input}
                        placeholder="username"
                        placeholderTextColor='#888'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="email"
                        placeholderTextColor='#888'
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor='#888'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="age"
                        placeholderTextColor='#888'
                        keyboardType='numeric'
                        maxLength={2}
                    />
                    <Text style={styles.note}>You must be at least 21 years of age to use tipsi.</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttontext}>sign up</Text>
                    </Pressable>
                </View>
                <Text style={styles.account}>already have an account?</Text>
                <Button 
                    title="log in" 
                    onPress={() => navigation.push('Login')}>
                </Button>
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
        borderRadius: 5,
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

export default Register;