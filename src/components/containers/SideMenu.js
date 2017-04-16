import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import SideMenuItem from './SideMenuItem';
import SideMenuHeader from '../presents/SideMenuHeader';

const styles = StyleSheet.create({
	sidemenu: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	}
})
let SideMenu = ({avatar, username, point, notification}) => (
	<View style={styles.sidemenu}>
		<SideMenuHeader avatar={avatar} username={username} point={point} />
		<SideMenuItem icon="search" text="Tìm Cây Xăng" page="home"/>
		<SideMenuItem icon="list" text="Sẽ Đi Qua" page="list"/>
		<SideMenuItem icon="comment-o" text="Đánh giá" page="comments" notification={notification}/>
		<SideMenuItem icon="info-circle" text="Giới Thiệu" page="about"/>
	</View>
)

export default SideMenu;