import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Profile from '../components/landingtabs/Profile';
import Rec from '../components/landingtabs/misc/Rec'
import COTD from '../components/landingtabs/misc/COTD';
import Shot from '../components/landingtabs/misc/Shot';
import Martini from '../components/landingtabs/days/MartiniMonday';
import Tequila from '../components/landingtabs/days/TequilaTuesday';
import Lemon from '../components/landingtabs/ingredients/Lemon';
import Coffee from '../components/landingtabs/ingredients/Coffee';
import AbsolutCitron from '../components/landingtabs/ingredients/AbsolutCitron';
import SouthernComfort from '../components/landingtabs/ingredients/SouthernComfort';
import { useFonts } from 'expo-font';

function Home() {

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
            <COTD />
            <Martini />
            <AbsolutCitron />
            <Rec />
            <Lemon />
            <SouthernComfort />
            <Shot />
            <Coffee />
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