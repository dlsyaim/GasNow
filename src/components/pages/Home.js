import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	PixelRatio,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	container: {
		flex:1,
		
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	btnLocate: {
		position: 'absolute',
		left: 10,
		bottom: 10,
		height: 25,
		width: 25,
		backgroundColor: '#F6F8FA',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		borderWidth: 1/PixelRatio.get(),
		shadowColor: 'black',
		shadowOffset: {width: 3, height: 3},
		shadowOpacity: 0.75,
		shadowRadius: 1,
	},
	icLocate: {
		fontSize: 18,
		color: 'gray',
	},
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPosition: 'unknown',
			// region: null,
		}
		this.watchID = null;
	}

	locateMe() {
		const self = this;
		navigator.geolocation.getCurrentPosition(
			({coords}) => {
				const {latitude, longitude} = coords;
				self.map.animateToRegion({
					latitude,
					longitude,
					latitudeDelta: 0.01,
					longitudeDelta: 0.002,
				}, 1000);
			},
			(error) => alert(JSON.stringify(error)),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	}

	watchMe() {
		this.watchID = navigator.geolocation.watchPosition(
			(position) => {
				var lastPosition = JSON.stringify(position);
				this.setState({lastPosition});
			}
		);
	}

	componentDidMount() {
		this.locateMe();
		this.watchMe();
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	render() {
		return (
			<View style={styles.container}>
				<MapView
					ref={map => this.map = map}
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.005,
						longitudeDelta: 0.001,
					}}
					followsUserLocation={true}
					showsMyLocationButton={true}
					showsUserLocation={true}
					showCompass={true}
				/>
				<TouchableOpacity
					style={styles.btnLocate}
					onPress={() => {
						this.locateMe();
					}}
				>
					<Icon name="md-locate" style={styles.icLocate}/>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Home;