import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Margaritas from './components/landingtabs/Margarita';

function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.logo}>tipsi</Text>
            <Margaritas />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	logo: {
		fontSize: 45,
	}
});

export default App;