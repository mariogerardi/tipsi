import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

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
                            <Image style={styles.img} source={{ uri: item.strDrinkThumb }} key={index} />
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
        height: "30%",
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
    }
});

module.exports = Martinis;