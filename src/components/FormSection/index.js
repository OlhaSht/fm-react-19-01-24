import React, { Component } from 'react';
import styles from './StopSection.module.css'

const initialState = {
    email:'',
    pwd:''
};    //в эту переменную мы ложим все елементы, хранящие значения
class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state={...initialState};//спредом разбираем все значения
    }
    
                //это фукции js, которые управляют компонентами формы! Особенность реакта. Мутабельное состояние содержится в свойстве state  и обновляется только через вызов setState().
    handlerForm=(e)=>{
        e.preventDefault()
        console.log(e.target.email.value)
        e.target.reset();   //очищает строчки пользователя после сенд
        this.setState({...initialState});//эта строчка очищает не только у пользователя, но и в консоли
    }
        // handlerEmail=({target:{value}})=>{         так мы могли бы забрать только каждый отдельный элемент
        //     this.setState({email:value})
        // }
        // handlerPwd=({target:{value}})=>{
        //     this.setState({pwd:value})
        // }
    handlerInput=({target:{name,value}})=>this.setState({[name]:value});//запись [] позволяет забрать значение (доступ к свойству с возможностью вычисления), принадлежащее переменной
           
    render() {
        const {email}= this.state;
        return (
            <form className={styles.form} onSubmit={this.handlerForm}>
              <input onChange={this.handlerInput} value={email} className={styles.input} type='text' name='email' placeholder='email' />
              <input onChange={this.handlerInput} className={styles.input} type='password' name='pwd' placeholder='password' />  
              <input className={styles.input} type='submit' value='send' />    
            </form>
        );
    }
}

export default FormSection;
