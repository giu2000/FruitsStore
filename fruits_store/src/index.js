import React from 'react';
import ReactDOM from 'react-dom';
import store from './state/store/index';
import { App } from './components/App';

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);