import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Margaritas from './components/landingtabs/Margarita';
import Martini from './components/landingtabs/Martinis';

function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>tipsi</Text>
            <Martini />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#94b4d4',
		alignItems: 'flex-start',
	},
	logo: {
        marginTop: 5,
        marginLeft: 20,
        color: "#000",
        fontSize: 40,
    }
});

export default App;