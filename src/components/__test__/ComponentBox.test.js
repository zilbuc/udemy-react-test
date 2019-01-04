import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);

});

describe('textarea tests', () => {

  beforeEach(() => {

    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });

    wrapped.update();

  });

  it('has a text area that users can type in', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

  });

  it('empties textarea when input form is submitted', () => {

    //We should also test whether 'new comment' was passed to textarea, but in this case previous test does that

    //const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    //wrapped.find('form').simulate('submit', fakeEvent);
    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');

  });
});
