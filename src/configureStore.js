import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import users from './reducers/users';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

const configureStore = () => {
  const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;

  const sagaMiddleware = createSagaMiddleware();

  const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    devTools,
  );

  const reducer = combineReducers({
    users,
  });

  const store = createStore(reducer, {}, enhancers);
  sagaMiddleware.run(rootSaga);
  window.store = store;
  return store;
};

export default configureStore;
