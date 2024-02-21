import React, { Component } from 'react';
import styles from "./../Counter.module.scss"

class CounterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        };
    }
    handlerPlus =()=>{
        this.setState((state, props) => ({
            counter: state.counter + props.step
          }));
       }
       handlerMinus =()=>{
        this.setState((state, props) => ({
            counter: state.counter - props.step
          }));
       }

    render() {
        const {counter} = this.state;
        return (
            <section className={styles.container}>
                <h2 className={styles.counter}>{counter}</h2>
                <button className={styles.button}
                 onClick={this.handlerPlus}>+</button> 
                 <button className={styles.button}
                 onClick={this.handlerMinus}>-</button> 
            </section>
        );
    }
}

export default CounterSection;
