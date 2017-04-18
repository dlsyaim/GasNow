import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { getPage } from '../../reducers';
import Home from '../pages/Home';
import About from '../pages/About';
let Content = ({page}) => {
	switch(page) {
		case 'home':
			return <Home/>
		case 'about':
			return <About/>
		default:
			return null;
	}
}

Content.propTypes = {
	page: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
	return {
		page: getPage(state)
	}
}

Content=connect(mapStateToProps, null)(Content);
export default Content;