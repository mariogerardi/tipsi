import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { useFonts } from 'expo-font';

import Rec from '../components/landingtabs/misc/Rec'
import COTD from '../components/landingtabs/misc/COTD';
import Shot from '../components/landingtabs/misc/Shot';
import Popular from '../components/landingtabs/misc/Popular';

import Aperol from '../components/landingtabs/cocktails/AperolSpritz';
import RustyNail from '../components/landingtabs/cocktails/RustyNail';

import Scotch from '../components/landingtabs/days/ScotchSunday';
import Martini from '../components/landingtabs/days/MartiniMonday';
import Tequila from '../components/landingtabs/days/TequilaTuesday';
import Whiskey from '../components/landingtabs/days/WhiskeyWednesday';
import Tropical from '../components/landingtabs/days/TropicalThursday';
import Frozen from '../components/landingtabs/days/FrozenFriday';
import Sober from '../components/landingtabs/days/SoberSaturday';

import Lemon from '../components/landingtabs/ingredients/Lemon';
import Coffee from '../components/landingtabs/ingredients/Coffee';
import AbsolutCitron from '../components/landingtabs/ingredients/AbsolutCitron';
import SouthernComfort from '../components/landingtabs/ingredients/SouthernComfort';
import GinAndTonic from '../components/landingtabs/ingredients/GinAndTonic';


function Home({route}) {

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const windowHeight = Dimensions.get('window').height;

    function DOTW() {
        const d = new Date();
        let day = d.getDay();
        if (day === 0) {
            return  <View>
                        <Scotch />
                        <Aperol />
                        <Coffee />
                    </View>;
        }
        if (day === 1) {
            return  <View>
                        <Martini />
                        <Aperol />
                        <AbsolutCitron />
                    </View>;
        }
        if (day === 2) {
            return  <View>
                        <Tequila />
                        <RustyNail />
                        <SouthernComfort />
                    </View>;
        }
        if (day === 3) {
            return  <View>
                        <Whiskey />
                        <Aperol />
                        <GinAndTonic />
                    </View>;
        }
        if (day === 4) {
            return  <View>
                        <Tropical />
                        <Aperol />
                        <Lemon />
                    </View>;
        }
        if (day === 5) {
            return  <View>
                        <Frozen />
                        <Aperol />
                        <Shot />
                    </View>;
        }
        if (day === 6) {
            return  <View>
                        <Sober />
                        <Aperol />
                        <Shot />
                    </View>;
        }
    }

	return (
        <View style={styles.container2}>
            <ImageBackground style={styles.background} source={require("../../assets/ray.png")} />
            <ScrollView style={styles.container}>
                <Header />
                <View>
                    <View style={styles.list}>
                        <View style={styles.content}>
                            <View>
                                <Image style={styles.profilepic} source={require("../../assets/orange.jpeg")}></Image>
                            </View>
                            <View>
                                <Text style={styles.header}>good to see you,</Text>
                                <Text style={styles.header}>{route.params.username}</Text>
                            </View> 
                        </View>
                    </View>
                </View>
                <COTD />
                <Popular />
                <Rec />
                {DOTW()}
                <View style={styles.endbox}>
                    <Text style={styles.end}>...that's all for now. check back tomorrow!</Text>
                </View>
            </ScrollView>
        </View>
	);
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '110%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    container: {
        height: '100%',
        backgroundColor: 'transparent'
    },
    container2: {
        height: '100%',
        backgroundColor: '#101316'
    },
    header: {
        color: "#eee",
        fontSize: 25,
        textAlign: 'left',
        fontFamily: 'PrataRegular',
        marginLeft: 0,
    },
    profilepic: {
        height: 70,
        width: 70,
        borderWidth: .5,
        borderRadius: 35,
        borderColor: 'white',
        marginHorizontal: 15,
    },
    list: {
        height: 125,
        width: "100%",
        marginRight: 40,
        paddingLeft: 5,
        borderTopWidth: .5,
        borderColor: 'white',
        flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 25,
    },
    viewButton: {
        width: 140,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#468',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 12.5,
    },
    addButton: {
        width: 175,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#647',
        borderRadius: 5,
        position: 'absolute',
        bottom: -60,
        left: 167.5,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    },
    endbox: {
        alignItems: 'center',
    },
    end: {
        color: "#eee",
        width: 260,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'PrataRegular',
        paddingVertical: 50
    },
});

export default Home;