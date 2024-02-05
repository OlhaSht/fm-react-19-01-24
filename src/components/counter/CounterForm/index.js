import React, { Component } from 'react';

class CounterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={};
    }
    
    render() {
        return (
            <form>
                <input type='number' />
            </form>
        );
    }
}

export default CounterForm;
