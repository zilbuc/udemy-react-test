import React from 'react';
import { shallow } from 'enzyme'; //importing an function
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1); // .find() returns an array of found CommentBox-es
});


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
