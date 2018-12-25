import React from 'react';
import { shallow } from 'enzyme'; //importing an function
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); // .find() returns an array of found CommentBox-es
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
})

// toContain, to Equal - matchers;

// How testing could be done without enzyme (but with ReactDOM):
// it('shows a comment box', () => {
//   const div = document.createElement('div');
//
//   ReactDOM.render(<App />, div);
//
//   //console.log(div.innerHTML);
//   expect(div.innerHTML).toContain('Comment Box'); //expectation
//
//   ReactDOM.unmountComponentAtNode(div); //cleanup
// })

//it(), expect() - global functions
