import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import LoginForm from '../components/forms/Signin';
import { useNavigation} from '@react-navigation/native';

function Login() {

    const navigation = useNavigation();

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
                <LoginForm />
                <Text style={styles.account}>don't have an account yet?</Text>
                <Button 
                    title="sign up"
                    onPress={() => navigation.push('Register')}>
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
        marginVertical: 75,
        textAlign: 'center',
        position: 'relative',
        top: 18,
        zIndex: 1,
        fontFamily: "PrataRegular",
    },
    list: {
        width: 290,
        height: 230,
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
        marginTop: 20,
    },
    button: {
        width: 260,
        height: 50,
        backgroundColor: "#0275d8",
        borderRadius: 5,
        marginTop: 20,
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
});

export default Login;