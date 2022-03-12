import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Profile from '../components/landingtabs/Profile';
import Rec from '../components/landingtabs/misc/Rec'
import COTD from '../components/landingtabs/misc/COTD';
import Shot from '../components/landingtabs/misc/Shot';
import Popular from '../components/landingtabs/misc/Popular';
import Martini from '../components/landingtabs/days/MartiniMonday';
import Tequila from '../components/landingtabs/days/TequilaTuesday';
import Whiskey from '../components/landingtabs/days/WhiskeyWednesday';
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

    function DOTW() {
        const d = new Date();
        let day = d.getDay();
        if (day === 0) {
            return ;
        }
        if (day === 1) {
            return <Martini />;
        }
        if (day === 2) {
            return <Tequila />;
        }
        if (day === 3) {
            return ;
        }
        if (day === 4) {
            return ;
        }
        if (day === 5) {
            return <Whiskey />;
        }
        if (day === 6) {
            return ;
        }
    }

	return (
        <ScrollView style={styles.container}>
            <Header />
            <Profile />
            <COTD />
            <Popular />
            <Rec />
            {DOTW()}
            <AbsolutCitron />
            <Lemon />
            <SouthernComfort />
            <Shot />
            <Coffee />
        </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#101316',
	}
});

export default Home;