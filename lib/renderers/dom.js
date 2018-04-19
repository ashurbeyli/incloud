import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';

// main app
import routes from '../routes';
import RouteDataLoader from '../route-data-loader';

// Importing styles
import '../styles/custom.scss';

// store configuration
import reducer from '../reducers';

const store = createStore(reducer, window.__PRELOADED_STATE__);

// Rendering DOM
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <RouteDataLoader routes={routes} dispatch={store.dispatch}>
        { renderRoutes(routes) }
      </RouteDataLoader>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);