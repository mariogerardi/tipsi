import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';

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
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "35%",
        backgroundColor: '#94b4d4',
        alignItems: 'flex-end',
    },
    header: {
        color: "#000",
        fontSize: 30,
        textAlign: 'center',
        position: 'relative',
        top: 12,
        right: 45,
        zIndex: 1,
    },
    list: {
        color: "black",
        backgroundColor: "white",
        fontSize: 30,
        marginTop: 5,
        marginRight: 20,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    drinkbox: {
        alignItems: "flex-start",
        minWidth: "96%",
        marginTop: 15,
        marginLeft: 15
    },
    img: {
        height: '135%',
        width: '50%',
        borderRadius: 20
    },
    name: {
        fontSize: 20,
        marginTop: 5
    },
    ingredients: {
        fontSize: 20,
        marginTop: 5
    }
});

module.exports = COTD;