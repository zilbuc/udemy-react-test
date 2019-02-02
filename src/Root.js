import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from './middlewares/stateValidator';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

// export default props => {
//   return (
//     <Provider store={createStore(reducers, {})}>
//       {props.children}
//     </Provider>
//   );
// };

// {props.children} is a reference to <App /> in index.js - or other components, wrapped in <Root></Root> in tests
// this allows passing provider tag (and the store) to other components
// createStore(reducers, {}) - {} is an empty object meaning no initial state - but we can pass an actual initial state for, i.e., testing reasons
