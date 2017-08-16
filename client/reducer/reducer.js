import {reducer as formReducer} from 'redux-form';
import {homeReducer} from 'home/state';
import {tripsListReducer} from 'trips/trips-list';
import {authReducer} from 'auth/state/reducer';
import {navReducer} from 'nav-bar';
import {combineReducers} from 'redux';

export default combineReducers({
	authReducer,
	navReducer,
	form: formReducer,
	homeReducer,
	tripsList: tripsListReducer,
});
