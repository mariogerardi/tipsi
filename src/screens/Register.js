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
                        placeholderTextColor='#999'
                        placeholderFontSize='113'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="email"
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="password"
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="age"
                        keyboardType='numeric'
                        maxLength={2}
                    />
                    <Text style={styles.note}>You must be at least 21 years of age to use tipsi.</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttontext}>log in</Text>
                    </Pressable>
                </View>
                <Text style={styles.account}>already have an account?</Text>
                <Button 
                    title="log in" 
                    onPress={() => navigation.push('Login')}>
                </Button>
                <Button 
                    title="home (testing purposes)" 
                    onPress={() => navigation.push('Home')}>
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		backgroundColor: '#EFA00B',
		alignItems: 'center',
	},
	logo: {
        fontSize: 50,
        color: "black",
        marginTop: 45,
        textAlign: 'center',
        position: 'relative',
        top: 18,
        right: 80,
        zIndex: 1,
        fontFamily: 'PrataRegular',
    },
    list: {
        width: 300,
        height: 380,
        backgroundColor: "#ddd",
        borderRadius: 15,
        alignItems: 'center',
    },
    input: {
        width: 260,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 20
    },
    button: {
        width: 260,
        height: 50,
        backgroundColor: "#0275d8",
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        color: "white",
        borderRadius: 10,
        fontSize: 25,
    },
	account: {
        fontSize: 20,
        color: "#000",
        marginTop: 10,
        textAlign: 'center',
    },
    note: {
        textAlign: 'left',
        fontSize: 11,
        marginTop: 3,
    }
});

export default Register;