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
        <ScrollView style={styles.container}>
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
		backgroundColor: '#101316',
	}
});

export default Home;