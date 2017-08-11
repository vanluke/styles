import {combineEpics} from 'redux-observable';
import {login, signup} from 'auth/state/epics';

export default combineEpics(login, signup);
