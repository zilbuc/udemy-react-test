import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions'; // imports all actions

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState( { comment: event.target.value })
  };

  handleSubmit = event => {
    event.preventDefault(); //prevents page from attempting to reload

    this.props.saveComment(this.state.comment);

    this.setState( { comment: '' });
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);


//exporting functional component
// export default () => {
//   return <div>Comment Box</div>;
// }
