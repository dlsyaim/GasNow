import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getPage} from '../../reducers';
import {mapPageName} from '../../global';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		height: 60,
		backgroundColor: '#5C961D',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	iconbars: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	btnbars: {
		left: 10,
		bottom: -7,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#ffffff',
		lineHeight: 28,
		bottom: -7,
	}
});

let Header = ({onBars, name}) => (
	<View style={styles.header}>
		<TouchableOpacity 
			style={styles.btnbars}
			onPress={onBars}
		>
			<Icon name="bars" style={styles.iconbars}/>
		</TouchableOpacity>
		
		<Text style={styles.title}>{name}</Text>
		<View style={{width: 10}}></View>
	</View>
);

const mapStateToProps = (state) => {
	return {
		name: mapPageName[getPage(state)]
	}
}
Header = connect(mapStateToProps, null)(Header);
export default Header;