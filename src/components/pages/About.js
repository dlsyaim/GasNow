import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Platform
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

const About = () => (
	<View style={styles.container}>
		<Text style={styles.welcome}>
			This is About Page
		</Text>
		<Text style={styles.instructions}>
			Hello to React-Native
		</Text>
		<Text style={styles.instructions}>
			Press {Platform.OS === 'ios' ? 'Cmd+R' : 'RR'} to reload,{'\n'}
			{Platform.OS === 'ios' ? 'Cmd+D' : 'Menu Button'} or shake for dev menu
		</Text>
	</View>
);


export default About;