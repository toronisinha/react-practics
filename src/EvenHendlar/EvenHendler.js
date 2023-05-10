import React, { Component } from 'react'

export default class EvenHendler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changevalue: ''
        }
    }
    quikResponce = (e) => {
        this.setState({
            changevalue: e.target.value
        })
    }

    render() {
        return (
            <div className=''>
                <h3>EVENT HENDLER</h3>
                <input type='text' onChange={this.quikResponce}></input>
                <p>{this.state.changevalue}</p>
            </div>
        )
    }
}
