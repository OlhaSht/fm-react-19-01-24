import React, { Component } from 'react';


class CounterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        };
    }
    handlerAdding =()=>{

    }
    
    

    render() {
        const {counter} = this.state;
        return (
            <div>
                <h2>{counter}</h2>
                <button onClick={this.handlerAdding}>Add</button> 
            </div>
        );
    }
}

export default CounterSection;
