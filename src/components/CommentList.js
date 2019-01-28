import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={comment}>{ comment }</li>
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
        {/* <div>Darom testa</div>
        <p>{this.props.tekstas}</p> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);


// export default () => {
//   return <div>Commmmmmmment List</div>;
// }
