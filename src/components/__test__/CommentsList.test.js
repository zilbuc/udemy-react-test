import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI item per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('show the text for each comment', () => {
  expect(wrapped.find('li:first-child').text()).toEqual('Comment 1');
  expect(wrapped.find('li:last-child').text()).toEqual('Comment 2');
})

// But Enzyme does not reccomend using .text(), so:

it('show the text for each comment', () => {
  expect(wrapped.find('li:first-child').render().text()).toEqual('Comment 1');
  expect(wrapped.find('li:last-child').render().text()).toEqual('Comment 2');

  // OR

  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
})
