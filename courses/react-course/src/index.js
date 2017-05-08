import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';

import configureStore from './configureStore';
import Layout from './Containers/Layout/Layout';
import Auth from './Containers/Auth/Auth';

import '../node_modules/reset.css/reset.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory}>
        	<Route path="/" component={Layout}/>
        	<Route path="/auth" component={Auth}/>
        </Router>
      </Provider>,
  document.getElementById('root')
);
