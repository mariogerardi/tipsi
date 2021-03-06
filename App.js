import React from 'react';
import Home from './src/screens/HomeScreen.js';
import Login from './src/screens/Login.js';
import Register from './src/screens/Register.js';
import Cocktail from './src/screens/ShowCocktail.js';
import Profile from './src/screens/ShowProfile.js';
import Edit from './src/screens/EditProfile.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
        			name="Login"
        			component={Login}
					options={{headerShown: false}}
        			/>
				<Stack.Screen
        			name="Register"
        			component={Register}
					options={{headerShown: false}}
        			/>
				<Stack.Screen
        			name="Home"
        			component={Home}
					options={{headerShown: false}}
        			/>
				<Stack.Screen
        			name="Show"
        			component={Cocktail}
					options={{headerShown: false}}
        			/>
				<Stack.Screen
        			name="Profile"
        			component={Profile}
					options={{headerShown: false}}
        			/>
				<Stack.Screen
        			name="Edit"
        			component={Edit}
					options={{headerShown: false}}
        			/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;