import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {

  const comment = 'One more test comment';

  it('has the correct type', () => {

    expect(saveComment(comment).type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    expect(saveComment(comment).payload).toEqual('One more test comment');
  });

});
