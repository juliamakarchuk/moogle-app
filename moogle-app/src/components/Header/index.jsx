//Core
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
//Components
import Menu from '../Menu';
import Logo from '../Logo';
import SearchForm from '../SearchForm';

//Styles
import Styles from './styles.module.css';

export default class Header extends Component {
    
    state = {

    }
    
    render () {
        // console.log(this.props)
       return (
           <div className = { Styles.header }>
              <Menu />
              <Logo />
                <SearchForm _handleForm = {this.props._handleForm} />
           </div>
       )
    }
}