import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import Nav from '../components/Nav';
import { useFonts } from 'expo-font';

function Cocktail({route}) {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCocktail = async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.idDrink}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getCocktail();
    }, []);

    function emptyIngredient(props) {
        if (props) {
            return (props + "\n");
        }
    }

    function emptyMeasurement(props) {
        if (props) {
            return (props + " ");
        }
    }

    const [loaded] = useFonts({
        PrataRegular: require('../../assets/fonts/Prata-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Nav />
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data.drinks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <View style={styles.drinkbox}>
                            <Text style={styles.header}>{route.params.name}</Text>
                            <Image style={styles.img} source={{ uri: item.strDrinkThumb }}/>
                            <Text style={styles.ingredients}>
                                {emptyMeasurement(item.strMeasure1)}{emptyIngredient(item.strIngredient1)}
                                {emptyMeasurement(item.strMeasure2)}{emptyIngredient(item.strIngredient2)}
                                {emptyMeasurement(item.strMeasure3)}{emptyIngredient(item.strIngredient3)}
                                {emptyMeasurement(item.strMeasure4)}{emptyIngredient(item.strIngredient4)}
                                {emptyMeasurement(item.strMeasure5)}{emptyIngredient(item.strIngredient5)}
                                {emptyMeasurement(item.strMeasure6)}{emptyIngredient(item.strIngredient6)}
                                {emptyMeasurement(item.strMeasure7)}{emptyIngredient(item.strIngredient7)}
                                {emptyMeasurement(item.strMeasure8)}{emptyIngredient(item.strIngredient8)}
                                {emptyMeasurement(item.strMeasure9)}{emptyIngredient(item.strIngredient9)}
                                {emptyMeasurement(item.strMeasure10)}{emptyIngredient(item.strIngredient10)}
                                {emptyMeasurement(item.strMeasure11)}{emptyIngredient(item.strIngredient11)}
                                {emptyMeasurement(item.strMeasure12)}{emptyIngredient(item.strIngredient12)}
                                {emptyMeasurement(item.strMeasure13)}{emptyIngredient(item.strIngredient13)}
                                {emptyMeasurement(item.strMeasure14)}{emptyIngredient(item.strIngredient14)}
                                {emptyMeasurement(item.strMeasure15)}{emptyIngredient(item.strIngredient15)}
                            </Text>
                            <Text style={styles.instructions}>
                                {item.strInstructions}{"\n"}
                            </Text>
                            <Text style={styles.instructions}>
                                Serve in a {item.strGlass}.
                            </Text>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#101316',
        alignItems: 'center',
    },
    header: {
        color: "#000",
        fontSize: 28,
        alignSelf: 'center',
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'PrataRegular',
    },
    list: {
        color: "black",
        backgroundColor: "white",
        fontSize: 30,
        marginVertical: 10,
        borderRadius: 20
    },
    drinkbox: {
        alignItems: "flex-start",
        width: 350,
        marginTop: 10,
    },
    img: {
        height: 350,
        width: '100%',
        borderRadius: 0
    },
    name: {
        fontSize: 20,
        marginTop: 5
    },
    ingredients: {
        fontSize: 15,
        marginTop: 5,
        marginHorizontal: 8,
        fontStyle: 'italic',
    },
    instructions: {
        fontSize: 15,
        fontStyle: 'italic',
        marginHorizontal: 8,
        marginRight: 15,
    }
});

export default Cocktail;