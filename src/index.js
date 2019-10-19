import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './3/src/redux/store';
import App from './App';
import './styles.scss';

if (process.env.NODE_ENV !== 'development') {
  console.log = () => {}
}

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(Root(), document.getElementById('root'));

