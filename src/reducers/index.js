import counter from './counterReducer';
import isLogged from './isLoggedReducer';
import { combineReducers, createStore } from 'redux';

const allReducers = combineReducers({
  counterhey: counter,
  isLogged,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
