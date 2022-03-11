import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function Lemon() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getLemon = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getLemon();
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
            <Text style={styles.header}>lots of lemon!</Text>
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
                            <View style={styles.drinkbox} >
                                <Image style={styles.img} source={{ uri: item.strDrinkThumb }}/>
                                <Image style={styles.img} source={require("../../../../assets/image-overlay.png")}/>
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
        height: 300,
        alignItems: 'flex-start',
    },
    header: {
        color: "#eee",
        fontSize: 35,
        position: 'relative',
        top: 18,
        left: 35,
        zIndex: 1,
        fontFamily: "PrataRegular",
    },
    list: {
        color: "#000",
        backgroundColor: "#222",
        fontSize: 30,
        marginTop: 5,
        marginLeft: 20,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: 'white',
        borderTopWidth: .5,
        borderLeftWidth: .5,
        borderBottomWidth: .5,
    },
    drinkbox: {
        width: 150,
        marginTop: 2,
        marginLeft: 3,
        alignItems: 'center'
    },
    img: {
        height: 242,
        width: 150,
        borderRadius: 12,
        position: 'absolute',
    },
    name: {
        fontSize: 18,
        margin: 3,
        position: 'absolute',
        bottom: 5,
        textAlign: 'center',
        color: '#eee',
    }
});

module.exports = Lemon;