import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function Martinis() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMartinis = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMartinis();
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
        PrataRegular: require('../../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>martini monday</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    horizontal
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
        height: 400,
        backgroundColor: '#101316',
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
        backgroundColor: "#454",
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
        maxWidth: 125,
        marginTop: 15,
        marginLeft: 15,
    },
    img: {
        height: 125,
        width: 125,
        borderWidth: .5,
        borderRadius: 10,
        borderColor: '#eee',
    },
    name: {
        fontSize: 16,
        marginTop: 10,
        color: '#eee',
    },
    ingredients: {
        fontSize: 14,
        marginTop: 5,
        color: '#ddd',
    },
    viewButton: {
        width: 125,
        marginVertical: 5,
        paddingVertical: 5,
        backgroundColor: '#0275d8',
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
    },
    addButton: {
        width: 125,
        marginVertical: 5,
        paddingVertical: 5,
        backgroundColor: '#28a745',
        borderRadius: 5,
        position: 'absolute',
        bottom: 45,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    }
});

module.exports = Martinis;