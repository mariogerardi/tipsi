import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

function Margaritas() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMargs = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            const json = await response.json();
            console.log(json);
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
        <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
                <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Types of margaritas:</Text>
                {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data.drinks}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                    <Text>{item.idDrink + ' - ' + item.strDrink}</Text>
                    )}
                />
            )}
        </View>
    )
}

module.exports = Margaritas