import React from 'react';
import Drawer from 'react-native-drawer';
import Content from './containers/Content';
import Header from './containers/Header';
import SideMenu from './containers/SideMenu';
import {
	View,
	StatusBar,
} from 'react-native';

const drawerStyles = {
	drawer: {
		shadowColor: '#000000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
	}
};

const App = () => (
	<Drawer
		type='overlay'
		ref={drawer => this.drawer = drawer}
		openDrawerOffset={100}
		closedDrawerOffset={-3}
		styles={drawerStyles}
		panOpenMask={0.1}
		panCloseMask={0.5}
		tweenHandler={(ratio) => (
									{
										drawer: {shadowRadius: ratio < 0.2 ? ratio*5*5 : 5},
										main: { opacity:(2-ratio)/2 }
									})}
		content={<SideMenu avatar={require('../../assets/avatar04.png')} username="Nguyễn Mạnh Hiệp" point={36} notification={14}/>}
	>
		<View style={{flex:1}}>
			<StatusBar
				backgroundColor="blue"
				barStyle="light-content"
			/>
			<Header 
				onBars={
					() => {
						this.drawer.open();
					}
				} 
			/>
			<Content />
		</View>
	</Drawer>
)

export default App;