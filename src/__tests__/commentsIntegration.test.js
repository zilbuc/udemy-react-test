import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// 'done' is a callback, that needs to be invoked in order for jest to complete the test
it('can fetch the list of comments and display them', (done) => {
  // Attempt to render the ENTIRE app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // introduce a pause and expect to find a list of comments
  // setTimeout(() => {
  //   wrapped.update();
  //
  //   expect(wrapped.find('li').length).toEqual(2);
  //
  //   done();
  //   wrapped.unmount();
  // }, 100);

  // alternative method
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });

});
