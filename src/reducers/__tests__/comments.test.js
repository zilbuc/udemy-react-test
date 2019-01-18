import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment test'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New comment test']);

});

it('handles action with unknown type', () => {
  const action = {
    type: 'UNKNOWN_TYPE',
    payload: 'New comment test'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([]);

  // Or just

  expect(commentsReducer([], {})).toEqual([]);

});
