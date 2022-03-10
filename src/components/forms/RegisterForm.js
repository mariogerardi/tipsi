import React from "react";
import { Formik } from 'formik';
import { StyleSheet, Text } from 'react-native';

function RegisterForm() {

    const Login = () => {
    const formMethods = useForm()

    return (
        <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput 
                    type="submit"
                    style={styles.input}
                    placeholder="username"
                    placeholderTextColor='#999'
                    placeholderFontSize='113'
                    onChangeText={handleChange('username')}
                />
                <TextInput 
                    type="text"
                    style={styles.input}
                    placeholder="email"
                    onChangeText={handleChange('email')}
                />
                <TextInput
                    type="text"
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="password"
                    onChangeText={handleChange('password')}
                />
                <TextInput
                    type="text"
                    style={styles.input}
                    placeholder="age"
                    keyboardType='numeric'
                    maxLength={2}
                    onChangeText={handleChange('age')}
                />
                    <Pressable style={styles.button} onPress={handleSubmit} title="Submit">
                        <Text style={styles.buttontext}>log in</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
}}

const styles = StyleSheet.create({
	container: {
        flex: 1,
		backgroundColor: '#EFA00B',
		alignItems: 'center',
	},
	logo: {
        fontSize: 40,
        color: "black",
        marginTop: 45,
        textAlign: 'center',
        position: 'relative',
        top: 9,
        right: 95,
        zIndex: 1,
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

export default RegisterForm;