import React, { Component } from "react";

class NeverZeroClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            message: ""
        }
    }

    increment = (ayo) => {
        this.setState((prevState) => ({ count: prevState.count + 1, message: prevState.message }))
        this.setState((prevState) => ({ count: prevState.count, message: ayo }))
    }

    decrement = () => {
        if (this.state.count > 0)
            this.setState((prevState) => ({ count: prevState.count - 1, message: prevState.message }))
    }

    legal = () => {
        if (this.props.age > 18) {
            return <p>Legal Age</p>
        }
        else {
            return <p>Not of Legal Age</p>
        }
    }

    render () {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.increment("lol")}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <p>You name is {this.props.name} and your age is {this.props.age}</p>
            {this.legal()}
            {this.state.message && <p>{this.state.message}</p>}
            </div>
        )
    }
}

export default NeverZeroClass