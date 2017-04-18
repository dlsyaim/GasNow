import React from 'react';
import {
	View,
	StyleSheet,
	Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});

const About = () => (
	<View style={styles.container}>
	<MapView
		style={styles.map}
		provider={PROVIDER_GOOGLE}
		initialRegion={{
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0922 * (width / height),
		}}
	/>
	</View>
);

export default About;