import React, { Component } from 'react';
import { string, shape, arrayOf} from 'prop-types';

import { Link } from 'react-router-dom';

import Styles from './styles.module.css';


export default class CategoriesBar extends Component {
    
    render () {
       let { menu , currentPath } = this.props;
       const renderList = menu.map((el, idx) => 
       <li className = {Styles.item} key = {idx}>
       <Link to = {`${currentPath}${el.path}`} className = { Styles.menuLink}>{el.text}</Link></li>)
       return(
           <div className = { Styles.container} >
               <ul className = {Styles.list} >
                   {renderList}
               </ul>
           </div>
       )
    }
}
CategoriesBar.propTypes = {
    menu: arrayOf(
        shape({
            path: string.isRequired,
            text: string.isRequired
        }).isRequired
    ).isRequired,
    currentPath: string
}
CategoriesBar.defaultProps = {
     currentPath: ''
}