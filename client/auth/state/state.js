import Immutable from 'seamless-immutable';

export const initState = Immutable({
	isLoading: false,
	user: undefined,
	error: undefined,
	isLoginVisible: true,
	isSignupVisible: false,
});
