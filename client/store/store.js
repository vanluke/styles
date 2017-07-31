import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from 'reducer';
import rootEpic from 'epic';
import authService from 'auth/service';
import en from './dev-tools-extenstion';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic, {
	 dependencies: {authService},
});
const createStoreWithMiddleware = applyMiddleware(epicMiddleware, loggerMiddleware)
(createStore);


export default function configureStore() {
  return createStoreWithMiddleware(rootReducer);
}
