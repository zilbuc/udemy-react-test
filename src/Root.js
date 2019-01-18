import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default props => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
};

// {props.children} is a reference to <App /> in index.js - or other components, wrapped in <Root></Root> in tests
// this allows passing provider tag (and the store) to other components
