import React, { Component } from 'react';
import CounterSection from '../CounterSection';

class CounterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={step:1};
    }
    
    handierInput = ({target:{name, value}})=>{
        this.setState({[name]:Number(value)})
    }
    render() {
        const {counter} = this.state;
        const {step} = this.props;
        return (
            <form>
                <input
                type='number' placeholder='step'
                name='step'
                value ={step} 
                onClick={this.handierInput} 
                min='1' max='1000000' step='1'
                />
                <CounterSection counter={counter}/>
            </form>
        );
    }
}

export default CounterForm;
