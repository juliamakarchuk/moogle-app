//Core
import React, { Component } from 'react';

//Styles
import Styles from './styles.module.css';
import logoImage from './logo.svg'

export default class Logo extends Component {
    
    render () {
       return (
           <div className = { Styles.logo }>
               <svg className = { Styles.logoIcon }>
                   <use href = {`${logoImage}#root`} />
               </svg>
               <h2 className = { Styles.logoText }> {'Moooooooogle'} </h2>
           </div>
       )
    }
}