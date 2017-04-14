import React, {PropTypes} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
const styles = StyleSheet.create({
	header: {

	},
	status: {
		height: 24,
		backgroundColor: '#5C961D',
	},
	account: {
		height: 148,
		backgroundColor: '#7EC334',
	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
		flex: 1,
	},
	name: {

	},
});

const SideMenuHeader = ({avatar, username, point}) => (
	<View style={styles.header}>
		<View style={styles.status}></View>
		<View style={styles.account}>
			
		</View>
	</View>
)