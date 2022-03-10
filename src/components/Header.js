import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { abs } from 'react-native-reanimated';

function Home() {

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

	return (
        <View style={styles.container}>
			<Text style={styles.logo}>tipsi</Text>
            <Image 
                style={styles.icondrink2}
                source={require("../../assets/cocktail2.png")} 
            />
        </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#101316',
		alignItems: 'center',
	},
	logo: {
        paddingTop: 50,
        backgroundColor: '#101316',
        color: "#eee",
        fontSize: 50,
        fontFamily: 'PrataRegular',
        marginTop: 10,
        position: 'relative',
        top: -10,
        zIndex: 1030,
    },
    icondrink2: {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 76,
        right: 25,
    }
});

export default Home;