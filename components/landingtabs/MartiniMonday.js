import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';

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
                                {emptyIngredient(item.strIngredient4)}
                                {emptyIngredient(item.strIngredient5)}
                                {emptyIngredient(item.strIngredient6)}
                                {emptyIngredient(item.strIngredient7)}
                                {emptyIngredient(item.strIngredient8)}
                                {emptyIngredient(item.strIngredient9)}
                                {emptyIngredient(item.strIngredient10)}
                                {emptyIngredient(item.strIngredient11)}
                                {emptyIngredient(item.strIngredient12)}
                                {emptyIngredient(item.strIngredient13)}
                                {emptyIngredient(item.strIngredient14)}
                                {emptyIngredient(item.strIngredient15)}
                            </Text>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "45%",
        backgroundColor: '#94b4d4',
        alignItems: 'flex-start',
    },
    header: {
        color: "#000",
        fontSize: 30,
        position: 'relative',
        top: 12,
        left: 45,
        zIndex: 1,
    },
    list: {
        color: "#000",
        backgroundColor: "white",
        fontSize: 30,
        marginTop: 5,
        marginLeft: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    drinkbox: {
        maxWidth: 125,
        marginTop: 15,
        marginLeft: 15,
    },
    img: {
        height: 125,
        width: 125,
        borderRadius: 20
    },
    name: {
        fontSize: 16,
        marginTop: 5
    },
    ingredients: {
        fontSize: 14,
        marginTop: 5
    }
});

module.exports = Martinis;