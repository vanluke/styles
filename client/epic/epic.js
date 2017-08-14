import {combineEpics} from 'redux-observable';
import {login, signup, logout} from 'auth/state/epics';

export default combineEpics(login, signup, logout);
