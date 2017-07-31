import {reducer as formReducer} from 'redux-form';
import {authReducer} from 'auth/state/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
	authReducer,
	form: formReducer,
});
