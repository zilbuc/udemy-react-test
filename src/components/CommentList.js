import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <div>
        <div>Darom testa</div>
        <p>{this.props.tekstas}</p>
      </div>
    )
  }
}

export default CommentList;
// export default () => {
//   return <div>Commmmmmmment List</div>;
// }
