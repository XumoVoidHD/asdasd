import React, { Component } from 'react'

class ClassCalculate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            num2: 0,
            operator: "+",
            result: null
        }
    }

    calculate = () => {
        const n1 = parseFloat(this.state.num1)
        const n2 = parseFloat(this.state.num2)

        let res
        switch (this.state.operator) {
            case "+":
                res = n1 + n2;
                break;
            case "-":
                res = n1 - n2;
                break;
            case "*":
                res = n1 * n2;
                break;
            case "/":
                res = n2 !== 0 ? n1 / n2 : "Error (div by 0)";
                break;
        }

        this.setState({result:res})
    }

    showResult = () => {
        if(this.state.result !== null) {
            return <p>Result: {this.state.result}</p>
        }
        else {
            return <p>No Result</p>
        }
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.num1} onChange={(e) => this.setState({ num1: e.target.value })} placeholder="Number 1" />
                <select value={this.state.operator} onChange={(e) => this.setState({ operator: e.target.value })}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="number" value={this.state.num2} onChange={(e) => this.setState({ num2: e.target.value })} placeholder="Number 2" />
                <button onClick={this.calculate} >=</button>
                {this.showResult()}
            </div>
        )
    }
}

export default ClassCalculate