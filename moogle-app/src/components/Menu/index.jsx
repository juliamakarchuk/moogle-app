//Core
import React, { Component } from 'react';

//Styles
import Styles from './styles.module.css';

export default class Menu extends Component {
    
    state = {

    }
    render () {

       return (
           <div className = { Styles.menu }>
               <span className = {Styles.span}></span>
           </div>
       )
    }
}