import React from 'react';
import Drawer from 'react-native-drawer';
import Content from './containers/Content';
import SideMenu from './containers/SideMenu';

const drawerStyles = {
	drawer: {
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 3,
	}
};
const App = () => (
	<Drawer>
		<Content/>
	</Drawer>
)

App.propTypes = {
	page: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
	return {
		page: getPage(state)
	}
}

App=connect(mapStateToProps, null)(App);
export default App;