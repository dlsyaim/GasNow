import {combineReducers} from 'redux';
import user, * as fromUser from './user';
import gui, * as fromGui from './gui';
const gasNow = combineReducers({
	user,
	gui,
});
export default gasNow;

/*selectors*/
//user
export const getIsAuthenticated = (state) => fromUser.getIsAuthenticated(state.user);
export const getUserName = (state) => fromUser.getUserName(state.user);
export const getUserEmail = (state) => fromUser.getUserEmail(state.user);
export const getUserPoint = (state) => fromUser.getUserPoint(state.user);
export const getUserPhoneNo = (state) => fromUser.getUserPhoneNo(state.user);
export const getUserID = (state) => fromUser.getUserID(state.user);

//gui
export const getPage = (state) => fromGui.getPage(state.gui);