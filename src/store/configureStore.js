import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import  thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {

  const enhancers = [];

  const middleware = [
    thunk, reduxImmutableStateInvariant()
  ];

  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  return createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );
}
