export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its 'payload' property; If it does, then wait for it to resolve, if it doesn't, then send the action to the next applyMiddleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // Wait for the promise to resolve (get its data!!) and then create new action with that data and dispatch it
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });

}
