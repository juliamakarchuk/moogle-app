//Core
import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
//Styles
import Styles from './styles.module.css';
import SearchIcon from './search-2.png';

export default class SearchForm extends Component {

    _handleSubmit = (evt) => {
        evt.preventDefault();
        let value = evt.target.children[1].value;
        this.props._handleForm(value);
        console.log(value);
        evt.target.reset();
        console.log('a')
    }
    render () {
       return (
       <div className = { Styles.container } onClick = {this._handleClick}>
               <form className = { Styles.form } onSubmit = {this._handleSubmit}>
               <Link to = {'/search'} className = {Styles.link}><img src = { SearchIcon } /></Link>
               <input type="text" placeholder = { 'Search' }/>
               <input type="submit"></input>
               </form>
           </div>
       )
    }
}