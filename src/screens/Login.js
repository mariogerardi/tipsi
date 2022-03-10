import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { abs } from 'react-native-reanimated';

function Login({navigation}) {

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
                        placeholder="email:"
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="password:"
                    />
                    <Pressable style={styles.button}>
                        <Text style={styles.buttontext}>log in</Text>
                    </Pressable>
                </View>
                <Text style={styles.account}>don't have an account yet?</Text>
                <Button 
                    title="sign up" 
                    onPress={() => navigation.push('Register')}>
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
        color: "#000",
        marginTop: 75,
        textAlign: 'center',
        position: 'relative',
        top: 18,
        zIndex: 1,
        fontFamily: "PrataRegular",
    },
    list: {
        width: 300,
        height: 225,
        backgroundColor: "#eeeeee",
        borderRadius: 15,
        alignItems: 'center',
    },
    input: {
        width: 260,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 20,
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
});

export default Login;