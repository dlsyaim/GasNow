import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import styles from '../styles';
import SideMenuItem from './SideMenuItem';
import SideMenuHeader from '../presents/SideMenuHeader';
let SideMenu = ({avatar, username, point, notification}) => (
	<View style={styles.sidemenu}>
		<SideMenuHeader avatar={avatar} username={username} point={point} />
		<SideMenuItem text="Tìm Cây Xăng" page="home"/>
		<SideMenuItem text="Sẽ Đi Qua" page="list"/>
		<SideMenuItem text="Đánh giá" page="comments" notification={notification}/>
		<SideMenuItem text="Giới Thiệu" page="about"/>
	</View>
)

export default SideMenu;