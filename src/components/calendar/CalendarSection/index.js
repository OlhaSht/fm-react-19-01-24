import React, { Component } from 'react';
import { format, add } from 'date-fns';

class CalendarSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
     handlerBtn = (option)=>{                      
         const {date} = this.state;
         const newDate = add(date, option)
         this.setState({date:newDate})
    } //функция add универсальна, но нужно на onClick написать анонимную функцию и указать что конкретно прибавлять по клику
    
    // handlerDay = ()=>{                       это методы date-fns для каждого отдельного случая
    //     const {date} = this.state;
    //     const newDate = addDays(date,1)
    //     this.setState({date:newDate})
    // }

    // handlerWeek = ()=>{
    //     const {date} = this.state;
    //     const newDate = addWeeks(date,1)
    //     this.setState({date:newDate})
    // }
    // handlerMonth = ()=>{
    //     const {date} = this.state;
    //     const newDate = addMonths(date,1)
    //     this.setState({date:newDate})
    // }
    render() {
        const {date} = this.state;
        return (
            <div>
               <p>{format(date, "dd MMMM yyyy'YEAR' , cccc")}</p> 
               <button onClick={()=>this.handlerBtn({days:1})}>+1 day</button> 
               <button onClick={()=>this.handlerBtn({weeks:1})}>+1 week</button>
               <button onClick={()=>this.handlerBtn({months:1})}>+1 month</button>
               <p>{format(date,"dd MMMM yyyy'YEAR' , cccc" )}</p>
            </div>
        );
    }
}

export default CalendarSection;
