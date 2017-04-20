import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	PixelRatio,
	Text,
	Dimensions,
	Modal,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import RNGooglePlaces from 'react-native-google-places';

const window = Dimensions.get('window');
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
		right: 10,
		bottom: 10,
		height: 25,
		width: 25,
		backgroundColor: '#F6F8FA',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		borderWidth: 1/PixelRatio.get(),
		shadowColor: 'black',
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.75,
		shadowRadius: 1,
	},
	btnClose: {
		position: 'absolute',
		right: 10,
		top: 30,
		height: 25,
		width: 25,
		backgroundColor: '#F6F8FA',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		borderWidth: 1/PixelRatio.get(),
		shadowColor: 'black',
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.15,
		shadowRadius: 1,
	},
	icLocate: {
		fontSize: 18,
		color: 'gray',
	},
	picker: {
		position: 'absolute',
		top: 50,
		left: 50,
		right: 50,
		height: 40,
		borderRadius: 2,
		backgroundColor: '#FAFAFA',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 1,
		shadowOpacity: 0.15,
	},
	pickerIcon: {
		top: 2,
		fontSize: 20,
		opacity: 0.7,
		marginLeft: 10, 
	},
	pickerPlaceHolder: {
		opacity: 0.7,
		fontSize: 18,
		marginLeft: 12,
	},
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPosition: 'unknown',
			modalVisible: false,
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
				const lastPosition = JSON.stringify(position);
				this.setState({lastPosition});
			}
		);
	}
	openSearchModal() {
		// const self = this;
		// RNGooglePlaces.openAutocompleteModal({
		// 	type: 'geocode',
		// 	country: 'VN'
		// })
		// .then((place) => {
		// 	console.log(place);
		// 	const {latitude, longitude} = place;
		// 	self.map.animateToRegion({
		// 		latitude,
		// 		longitude,
		// 		latitudeDelta: 0.01,
		// 		longitudeDelta: 0.002,
		// 	}, 1000);
		// 	// place represents user's selection from the
		// 	// suggestions and it is a simplified Google Place object.
		// })
		// .catch(error => console.log(error.message));  // error is a Javascript Error object
		console.log("set modal");
		this.setModalVisible(!this.state.modalVisible)

		// RNGooglePlaces.getAutocompletePredictions('facebook')
		// .then((results) => {console.log("results:", results);})
		// .catch((error) => console.log(error.message));
	}
	componentDidMount() {
		this.locateMe();
		this.watchMe();
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	setModalVisible(visible) {
		this.setState({modalVisible: visible})
	}
	render() {
		console.log(this.state.modalVisible);
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

				<TouchableOpacity
					style={styles.picker}
					onPress={() => this.openSearchModal()}
				>
					<Icon style={styles.pickerIcon} name="ios-search"/>
					<Text style={styles.pickerPlaceHolder}>Bạn muốn đến đâu?</Text>
				</TouchableOpacity>

				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modalVisible}
					style={{flex:1, top:100}}
				>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA'}}>
						<Text style={{fontSize: 30, fontWeight: 'bold'}}>Hello Modal</Text>
						<TouchableOpacity 
							style={styles.btnClose}
							onPress={
								() => {
									this.setModalVisible(!this.state.modalVisible)
								}
							}
						>
							<Icon name="ios-close" style={styles.icLocate}/>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		);
	}
}

export default Home;