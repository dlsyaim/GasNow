const user = (state = {isAuth: false}, action) => {
	switch(action.type) {
		case 'AUTH_SUCCESS':
			return {...action.response, isAuth: true};
		case 'LOGOUT_SUCCESS':
			return {isAuth: false};
		default:
			return state;
	}
}

export default user;
export const getIsAuthenticated = (user) => user.isAuthenticated;
export const getUserName = (user) => user.username;
export const getUserEmail = (user) => user.email;
export const getUserPoint = (user) => user.point;
export const getUserPhoneNo = (user) => user.phoneNo;
export const getUserID = (user) => user._id;
