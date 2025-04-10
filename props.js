import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // Setting default state from props
    this.state = {
      name: props.name || 'Guest',     // fallback to 'Guest' if no prop is passed
      age: props.age || 18             // fallback to 18
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.state.name}!</h1>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default Greeting;
