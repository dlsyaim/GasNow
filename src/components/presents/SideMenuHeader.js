import React, {PropTypes} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PixelRatio,
} from 'react-native';
const styles = StyleSheet.create({
	header: {

	},
	account: {
		height: 172,
		backgroundColor: '#7EC334',
		justifyContent: 'center',
		alignItems: 'center',

	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
		borderWidth: 1/PixelRatio.get(),
		borderColor: '#5C961D',
	},
	name: {
		fontSize: 14,
		color: '#FFFFFF',
		lineHeight: 20,
	},
});

const SideMenuHeader = ({avatar, username, point}) => (
	<View style={styles.header}>
		<View style={styles.account}>
			<Image style={styles.avatar} source={avatar}/>
			<Text style={styles.name}>{username} | {point} điểm</Text>
		</View>
	</View>
)

export default SideMenuHeader;