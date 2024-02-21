import React, { Component } from 'react';
import CounterSection from '../CounterSection';
import styles from "./../Counter.module.scss"


class CounterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={step:1};
    }
    
    handierInput = ({target:{name, value}})=>{
        this.setState({[name]:Number(value)})
    }
    render() {
        const {step} = this.state;
        return (
            <section className={styles.formContainer}>
                <input
                className={styles.input}
                type='namber'
                name='step'
                value ={step} 
                onChange={this.handierInput} 
                min='1' max='10' step='1'
                />
                <CounterSection step={step}/>
             </section>
            
        );
    }
}

export default CounterForm;
