import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

function COTD() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCOTD = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCOTD();
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

    const [loaded] = useFonts({
        PrataRegular: require('../../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>cocktail of the day</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data.drinks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <View style={styles.drinkbox}>
                            <Image style={styles.img} source={{ uri: item.strDrinkThumb }}/>
                            <Text style={styles.name}>{item.strDrink}</Text>
                            <Text style={styles.ingredients}>
                                {item.strIngredient1}
                                {emptyIngredient(item.strIngredient2)}
                                {emptyIngredient(item.strIngredient3)}
                                {moreThanThreeIngredients(item.strIngredient4)}
                            </Text>
                            <Pressable 
                                style={styles.viewButton}
                                onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}
                            >
                                <Text style={styles.buttonText}>View</Text>
                            </Pressable>
                            <Pressable 
                                style={styles.addButton}
                                onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}
                            >
                                <Text style={styles.buttonText}>Add</Text>
                            </Pressable>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 475,
        backgroundColor: '#EFA00B',
        alignItems: 'flex-end',
    },
    header: {
        color: "#000",
        fontSize: 35,
        textAlign: 'center',
        position: 'relative',
        top: 17,
        right: 35,
        zIndex: 1,
        fontFamily: 'PrataRegular',
    },
    list: {
        color: "black",
        backgroundColor: "white",
        fontSize: 30,
        marginTop: 5,
        marginRight: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    drinkbox: {
        alignItems: "flex-start",
        minWidth: "96%",
        marginTop: 15,
        marginLeft: 15
    },
    img: {
        height: 200,
        width: '95%',
        borderRadius: 10,
    },
    name: {
        fontSize: 25,
        marginTop: 5
    },
    ingredients: {
        fontSize: 14,
        marginTop: 5
    },
    viewButton: {
        width: 325,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#0275d8',
        borderRadius: 5,
        position: 'absolute',
        bottom: -145,
    },
    addButton: {
        width: 325,
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor: '#28a745',
        borderRadius: 5,
        position: 'absolute',
        bottom: -100,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    }
});

module.exports = COTD;