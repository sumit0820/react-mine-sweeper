import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Styling modules
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( < App / > , document.getElementById('root'));

serviceWorker.unregister();