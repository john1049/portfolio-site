import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './app';


ReactDOM.render(<App/> , document.getElementById('root'));
registerServiceWorker();
