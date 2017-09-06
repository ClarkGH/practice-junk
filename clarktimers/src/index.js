import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}

setInterval(renderApp, 1000);