import React from 'react';
import Drawer from 'react-native-drawer';
import Content from './containers/Content';
import SideMenu from './containers/SideMenu';

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
		openDrawerOffset={100}
		closedDrawerOffset={-3}
		styles={drawerStyles}
		panOpenMask={0.1}
		panCloseMask={0.9}
		captureGestures={'closed'}
		tweenHandler={(ratio) => (
									{
										drawer: {shadowRadius: ratio < 0.2 ? ratio*5*5 : 5},
										main: { opacity:(2-ratio)/2 }
									})}
		content={<SideMenu avatar={require('../../assets/avatar04.png')} username="Nguyễn Mạnh Hiệp" point={36} notification={14}/>}
	>
		<Content/>
	</Drawer>
)

export default App;