


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentals from './reducers/rentals';
import rental from './reducers/rental';
import auth from './reducers/auth';


// const addPromiseToDispatch = (store) => {
//   const { dispatch } = store;


// const addThunkToDispatch = (store) => {
//   const { dispatch } = store;


  // return action => {
  //   if (action.then && typeof action.then === 'function') {
  //     return action.then(dispatch);
  //   }


//   return action => {
//     if (typeof action === 'function') {
//       return action(dispatch);
//     }

//     dispatch(action);
//   }
// }

export function initStore() {
  // PURE Functions, TODO: Explain (:
  const reducers = combineReducers({
    rentals,
    rental,
    auth
  });

  // const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  // const store = createStore(reducers, reduxExtension);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  // store.dispatch = addPromiseToDispatch(store);

  
  // store.dispatch = addThunkToDispatch(store);
  return store;
} 
