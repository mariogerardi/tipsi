import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import COTD from '../components/landingtabs/COTD';
import Martini from '../components/landingtabs/MartiniMonday';
import Tequila from '../components/landingtabs/TequilaTuesday';
import { useFonts } from 'expo-font';

function Home({navigation}) {

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

	return (
        <ScrollView>
			<Text style={styles.logo}>tipsi</Text>
            <Martini />
            <COTD />
            <Tequila />
        </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EFA00B',
		alignItems: 'flex-start',
	},
	logo: {
        paddingTop: 5,
        paddingLeft: 45,
        backgroundColor: '#EFA00B',
        color: "#000",
        fontSize: 40,
        fontFamily: 'PrataRegular'
    }
});

export default Home;