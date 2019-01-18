import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList tekstas={50}/>
    </div>
  );
};
