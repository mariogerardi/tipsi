import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';

function Margaritas() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMargs = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMargs();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>types of margaritas:</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    horizontal
                    style={styles.list}
                    data={data.drinks}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item, index }) => (
                        <View>
                            <Text>{index + 1}. { item.strDrink }</Text>
                            <Image style={styles.img} source={{uri: item.strDrinkThumb}} key={index}/>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#94b4d4',
        alignItems: 'flex-start',
    },
    header: {
        marginTop: 5,
        marginLeft: 20,
        color: "#000",
        fontSize: 30,
    },
    list: {
        marginTop: 5,
        marginLeft: 20,
        color: "#000",
        fontSize: 30,
    },
    img: {
        height: 125,
        width: 125
    }
});

module.exports = Margaritas;