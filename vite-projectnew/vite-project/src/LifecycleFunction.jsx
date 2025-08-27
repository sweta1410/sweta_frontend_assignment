import React, { Component } from 'react';

class LifecycleFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated. Previous count:', prevState.count);
  }

  componentWillUnmount() {
    console.log('Component is about to be unmounted.');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleFunction;
