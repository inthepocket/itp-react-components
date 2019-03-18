import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { default as createSagaMiddleware } from 'redux-saga';
import { StoreContext } from 'redux-react-hook';
import { default as rootReducer } from '<PROJECT-NAME>-core/reducers';
import { default as rootSaga } from '<PROJECT-NAME>-core/sagas';
import '@inthepocket/itp-css/normalize.css';
import './root.css';
import './index.css';
import App from './app/screens/App/App';
import * as serviceWorker from './serviceWorker';

// Create redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux dev tools
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux store
const store = createStore(
  rootReducer,
  {},
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

// Run redux-saga middleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
