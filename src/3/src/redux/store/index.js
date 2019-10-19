
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';
import rootReducer from '../reducers';

let store;
const promiseTypeSuffixes = ['LOADING', 'SUCCESS', 'ERROR'];

if (process.env.NODE_ENV === 'development') {
  const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = tool(applyMiddleware(thunk, logger, createPromise({ promiseTypeSuffixes })));
  store = createStore(rootReducer, middleware);
} else {
  const middleware = applyMiddleware(thunk, createPromise({ promiseTypeSuffixes }));
  store = createStore(rootReducer, middleware);
}

export default store;
