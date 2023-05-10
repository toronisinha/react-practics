import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decerment = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h2>Count: {count}</h2>
                <p>Use class setState</p>
                <Button className="success" onClick={this.increment}>+</Button>
                <Button className="info" onClick={this.decerment} disabled={count === 0 ? true : false}>-</Button>
            </div>
        )
    }
}
