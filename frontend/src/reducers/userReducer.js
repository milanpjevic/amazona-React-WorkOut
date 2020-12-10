const {
	USER_SIGNIN_REQEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_SIGNOUT,
} = require("../constants/userConstants");

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
