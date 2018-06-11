import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import './styles/normalize.css';
import './styles/app.css';
import rootReducer from './reducers';
import App from './containers/app';
import NotFoundView from './views/layouts/404';

const history = createHistory();
const middleware1 = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, middleware1)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/main" component={App} />
        <Route path="/notFound" component={NotFoundView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
