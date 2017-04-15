import React from 'react';
import {connect} from 'react-redux';
import {
	TouchableOpacity,
	Text,
} from 'react-native';

let SideMenuItem = ({dispatch, text, page}) => (
	<TouchableOpacity
		onPress={
			() => {
				dispatch({
					type: 'CHANGE_PAGE',
					page,
				})
			}
		}
	>
		<Text>{text}</Text>
	</TouchableOpacity>
);
SideMenuItem = connect()(SideMenuItem);
export default SideMenuItem;