import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

const Search = () => {

	const [search, setSearch] = useState('');
	const [filteredDataSource, setFilteredDataSource] = useState([]);
	const [masterDataSource, setMasterDataSource] = useState([]);
  
	useEffect(() => {
	  fetch('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic')
		.then((response) => response.json())
		.then((responseJson) => {
		  	setFilteredDataSource(null);
		  	setMasterDataSource(responseJson.drinks);
		})
		.catch((error) => {
		  	console.error(error);
		});
	}, []);
  
	const searchFilterFunction = (text) => {
	  // Check if searched text is not blank
	  if (text) {
		// Inserted text is not blank
		// Filter the masterDataSource
		// Update FilteredDataSource
		const newData = masterDataSource.filter(function (item) {
		  const itemData = item.strDrink
			? item.strDrink.toLowerCase()
			: ''.toLowerCase();
		  const textData = text.toLowerCase();
		  return itemData.indexOf(textData) > -1;
		});
		setFilteredDataSource(newData);
		setSearch(text);
	  } else {
		// Inserted text is blank
		// Update FilteredDataSource with masterDataSource
		setFilteredDataSource(null);
		setSearch(text);
	  }
	};

	function container () {
		if (filteredDataSource === null) return {
			position: 'relative',
			backgroundColor: '#101316',
			borderTopWidth: .5,
			borderColor: 'white',
			height: 65,
		} 
		if (filteredDataSource !== null) return {
			backgroundColor: '#101316',
			borderTopWidth: .5,
			borderColor: 'white',
			height: 218,
		}
	}
  
	const ItemView = ({ item }) => {
	  return (
		<Text style={styles.itemStyle} onPress={() => navigation.push("Show", {idDrink: item.idDrink, name: item.strDrink})}>
		  {item.strDrink.toLowerCase()}
		</Text>
	  );
	};
  
	const ItemSeparatorView = () => {
	  return (
		<View
		  style={{
			height: 0.5,
			width: '100%',
			backgroundColor: '#333333',
		  }}
		/>
	  );
	};
  
    const navigation = useNavigation(); 
  
	return (
		<View style={container()}>
		  <SearchBar
			round
		  	containerStyle={{backgroundColor: '#101316'}}
			searchIcon={{ size: 24 }}
			onChangeText={(text) => searchFilterFunction(text)}
			onClear={(text) => searchFilterFunction('')}
			placeholder="search..."
			value={search}
		  />
		  <FlatList
			data={filteredDataSource}
			keyExtractor={(item, index) => index.toString()}
			ItemSeparatorComponent={ItemSeparatorView}
			renderItem={ItemView}
		  />
		</View>
	);
  };
  
const styles = StyleSheet.create({
	itemStyle: {
		color: '#eee',
	  	padding: 10,
	},
});
  
  export default Search;
  