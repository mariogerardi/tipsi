import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Profile from '../components/landingtabs/Profile';
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
            <Header />
            <Profile />
            <Martini />
            <COTD />
            <Tequila />
        </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#101316',
		alignItems: 'flex-start',
	},
	logo: {
        paddingTop: 40,
        paddingLeft: 45,
        backgroundColor: '#1f262a',
        color: "#eee",
        fontSize: 50,
        fontFamily: 'PrataRegular',
        position: 'relative',
    }
});

export default Home;