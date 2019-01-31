import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Component got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Component was updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    // if app has react-router, this.props.history object is created with all history routes
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent);
};
