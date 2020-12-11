const {
	USER_REGISTER_REQEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_SIGNIN_REQEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_SIGNOUT,
} = require("../constants/userConstants");

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQEST:
			return { loading: true };

		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };

		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const userSigninReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQEST:
			return { loading: true };

		case USER_SIGNIN_SUCCESS:
			return { loading: false, userInfo: action.payload };

		case USER_SIGNIN_FAIL:
			return { loading: false, error: action.payload };

		case USER_SIGNIN_SIGNOUT:
			return {};

		default:
			return state;
	}
};
