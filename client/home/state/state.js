import Immutable from 'seamless-immutable';

export const initState = Immutable({
	user: undefined,
	isAuthenticated: false,
	isModalVisible: false,
});
