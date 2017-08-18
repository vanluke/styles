import {Provider} from 'react-redux';
import React from 'react';
import store from 'store';
import App from 'container/container';
import {Router} from 'routes';
import ReduxToastr from 'react-redux-toastr';

export default () => (<Provider store={store}>
	<div>
		<Router />
		<ReduxToastr
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			position="top-left"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
		/>
	</div>
</Provider>)
