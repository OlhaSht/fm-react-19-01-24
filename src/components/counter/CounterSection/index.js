import React, { Component } from 'react';


class CounterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        };
    }
    handlerAdding =()=>{
        this.setState((state, props)=>({
            counter:state.counter+props.state,  
        } ) )
       }

    render() {
        const {counter} = this.state;
        const {step} = this.props;
        return (
            <div>
                <h2>{counter}</h2>
                <h2>{step}</h2>
                <button onClick={this.handlerAdding}>Add</button> 
            </div>
        );
    }
}

export default CounterSection;
