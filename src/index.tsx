import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import App from './App';

import './index.css';

configure({
  computedRequiresReaction: true
});

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
