import React, { Component } from 'react';
import { addDays, addMonths, addWeeks, format } from 'date-fns';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    
    handlerDay = ()=>{
        const {date} = this.state;
        const newDate = addDays(date,1)
        this.setState({date:newDate})
    }

    handlerWeek = ()=>{
        const {date} = this.state;
        const newDate = addWeeks(date,1)
        this.setState({date:newDate})
    }
    handlerMonth = ()=>{
        const {date} = this.state;
        const newDate = addMonths(date,1)
        this.setState({date:newDate})
    }
    render() {
        const {date} = this.state;
        return (
            <div>
               <p>{format(date, "dd MMMM yyyy'YEAR' , cccc")}</p> 
               <button onClick={this.handlerDay}>+1 day</button>
               <button onClick={this.handlerWeek}>+1 week</button>
               <button onClick={this.handlerMonth}>+1 month</button>
            </div>
        );
    }
}

export default Index;
