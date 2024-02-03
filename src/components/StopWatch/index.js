import React, { Component } from 'react';
import styles from "./StopWatch.module.css";

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {time:new Date(0,0,0,0,0,0)};
        this.idInterval = null;
    }
    tick=()=>{
        this.setState((state)=>{
            const {time} = state;
            const newTime = new Date(time.getTime()+1000);
            return{time:newTime};
        })
    }
    start = ()=>{
        this.stop();
        // this.idInterval = setInterval(this.tick, 1000)
        this.idInterval = setTimeout(this.tick, 1000)
    };

    reset = ()=>{
        this.stop();
        this.setState({time:new Date(0,0,0,0,0,0,)})
    };

    stop = ()=>{
        // clearInterval(this.idInterval);
        clearTimeout(this.idInterval);
        this.idInterval = null;
    };

    componentDidMount (){
        this.start();
    }
    componentDidUpdate (){
        this.start();

    }
    componentWillUnmount(){
        this.stop();
    }

    render() {
        const {time} = this.state;
        return (
            <artricle className={styles.container}>
                <h2>{time.toLocaleTimeString('it-IT')}</h2>
                <button onClick={this.start} className={styles.button}>start</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.stop}>stop</button>
            </artricle>
        );
    }
}

export default StopWatch;
