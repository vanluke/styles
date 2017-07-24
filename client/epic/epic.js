import {combineEpics} from 'redux-observable';
import {login} from 'auth/state/epics';

export default combineEpics(login);
