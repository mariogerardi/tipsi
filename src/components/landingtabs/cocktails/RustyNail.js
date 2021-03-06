import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function RustyNail() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getRustyNail = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12101');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getRustyNail();
    }, []);

    function emptyIngredient(props) {
        if (props) {
            return ", " + props;
        }
    }

    function moreThanThreeIngredients(props) {
        if (props) {
            return "...";
        }
    }

    const navigation = useNavigation(); 

    const [loaded] = useFonts({
        PrataRegular: require('../../../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>a timeless classic</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    horizontal
                    initialNumToRender={5}
                    maxToRenderPerBatch={10}
                    style={styles.list}
                    data={data.drinks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <TouchableWithoutFeedback onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}>
                            <View style={styles.drinkbox}>
                                <Image style={styles.img} source={{ uri: item.strDrinkThumb }}/>
                                <Image style={styles.imggradient} source={require("../../../../assets/image-overlay.png")}/>
                                <Text style={styles.name}>{item.strDrink}</Text>
                                <Text style={styles.ingredients}>
                                    {item.strIngredient1}
                                    {emptyIngredient(item.strIngredient2)}
                                    {emptyIngredient(item.strIngredient3)}
                                    {moreThanThreeIngredients(item.strIngredient4)}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        alignItems: 'flex-start',
    },
    header: {
        color: "#eee",
        fontSize: 35,
        textAlign: 'center',
        position: 'relative',
        top: 17,
        left: 50,
        zIndex: 1,
        fontFamily: 'PrataRegular',
    },
    list: {
        backgroundColor: "#eee",
        fontSize: 30,
        marginTop: 5,
        marginRight: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'white',
        borderTopWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
    },
    drinkbox: {
        alignItems: "flex-start",
    },
    img: {
        height: 296,
        width: 350,        
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    imggradient: {
        height: 296,
        width: 350,
        position: 'absolute',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'white',
        borderTopWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
    },
    name: {
        fontSize: 26,
        fontFamily: 'PrataRegular',
        color: 'white',
        position: 'absolute',
        top: 230,
        left: 10,
    },
    ingredients: {
        fontSize: 14,
        color: 'white',
        position: 'absolute',
        top: 265,
        left: 10,
    }
});

module.exports = RustyNail;