import React from 'react';
import {render} from 'react-dom';
import config from 'config/config';
import AppContainer from 'provider';

export const rootContainer = document.getElementById(config.containerId);

render(<AppContainer />, rootContainer);
