import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';

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

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{route.params.name}</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data.drinks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <View style={styles.drinkbox}>
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
        backgroundColor: '#94b4d4',
        alignItems: 'center',
    },
    header: {
        color: "#000",
        fontSize: 35,
        textAlign: 'center',
        position: 'relative',
        top: 18,
        zIndex: 1,
    },
    list: {
        color: "black",
        backgroundColor: "white",
        fontSize: 30,
        margin: 10,
        borderRadius: 20,
    },
    drinkbox: {
        alignItems: "flex-start",
        width: 340,
        marginTop: 15,
        marginLeft: 15
    },
    img: {
        height: 200,
        width: '95%',
        borderRadius: 20
    },
    name: {
        fontSize: 20,
        marginTop: 5
    },
    ingredients: {
        fontSize: 20,
        marginTop: 5,
        fontStyle: 'italic',
    },
    instructions: {
        fontSize: 18,
        fontStyle: 'italic',
        marginRight: 15,
    }
});

export default Cocktail;