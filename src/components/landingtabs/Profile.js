import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, ActivityIndicator } from 'react-native';

function Profile() {
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch('herokulinkwillgohere');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
            <Text style={styles.header}>good to see you, name</Text>
            )}
        </View>
    )
}