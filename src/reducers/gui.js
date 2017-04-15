import {combineReducers} from 'redux';

const page = (state="home", action) => {
	switch(action.type) {
		case "CHANGE_PAGE":
			return action.page;
		default:
			return state;
	}
}
const sidemenu = (state={isOpen: false}, action) => {
	switch(action.type) {
		case "PRESS_MENUBAR":
			return {...state, isOpen: !state.isOpen};
		default:
			return state;
	}
}
const gui = combineReducers({
	page,
});

export default gui;

export const getPage = (gui) => gui.page;