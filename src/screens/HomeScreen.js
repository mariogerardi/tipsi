import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Rec from '../components/landingtabs/misc/Rec'
import COTD from '../components/landingtabs/misc/COTD';
import Shot from '../components/landingtabs/misc/Shot';
import Aperol from '../components/landingtabs/misc/Aperol';
import Popular from '../components/landingtabs/misc/Popular';
import Martini from '../components/landingtabs/days/MartiniMonday';
import Tequila from '../components/landingtabs/days/TequilaTuesday';
import Whiskey from '../components/landingtabs/days/WhiskeyWednesday';
import Lemon from '../components/landingtabs/ingredients/Lemon';
import Coffee from '../components/landingtabs/ingredients/Coffee';
import AbsolutCitron from '../components/landingtabs/ingredients/AbsolutCitron';
import SouthernComfort from '../components/landingtabs/ingredients/SouthernComfort';
import { useFonts } from 'expo-font';

function Home({route}) {

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
            <View style={styles.container}>
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
            <Aperol />
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
        height: 155,
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
        paddingLeft: 30,
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
    }
});

export default Home;