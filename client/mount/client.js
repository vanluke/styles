import React from 'react';
import {render} from 'react-dom';
import config from 'config/config';
import {App} from 'container';

export const rootContainer = document.getElementById(config.containerId);

render(<App />, rootContainer);
