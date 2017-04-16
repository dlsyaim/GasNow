import React from 'react';
import {connect} from 'react-redux';
import {getPage} from '../../reducers';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	PixelRatio,
} from 'react-native';
const styles = StyleSheet.create({
	item: {
		height: 48,
		flexDirection: 'row',
		borderRadius: 0,
		borderWidth: 0,
		borderBottomWidth: 1/PixelRatio.get(),
		borderColor: '#d6d7da',
		padding: 10,
		alignItems: 'center',
	},
	icon: {
		left: 10,
		fontSize: 15,
	},
	text: {
		left: 40,
		fontSize: 15,
	},
	active: {
		color: '#4285F4',
	},
})
let SideMenuItem = ({dispatch, icon, text, page, active}) => (
	<TouchableOpacity
		style={styles.item}
		onPress={
			() => {
				dispatch({
					type: 'CHANGE_PAGE',
					page,
				})
			}
		}
	>
		<Icon name={icon} style={[styles.icon, active ? styles.active : {}]}/>
		<Text style={[styles.text, active ? styles.active : {}]}>{text}</Text>
	</TouchableOpacity>
);
const mapStateToProps = (state, {page}) => {
	return {
		active: getPage(state) === page
	}
}
SideMenuItem = connect(mapStateToProps, null)(SideMenuItem);
export default SideMenuItem;