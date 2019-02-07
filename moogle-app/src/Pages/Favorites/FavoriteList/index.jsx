import React, {Component} from 'react';
import FavoriteItem from '../FavoriteItem';
import Styles from './styles.module.css';

export default class FavoriteList extends Component {

    // componentWillMount = () =>{
    //      let value = JSON.parse(localStorage.getItem('favorites'));
    //      console.log(value)
    // }

    render(){
        // let value = JSON.parse(localStorage.getItem('favorites'));
        let movies = this.props.info;
        let { _onDeleteFavorite } = this.props;
        return(
        <div className = { Styles.container }>
              { movies.map(( el )=> <FavoriteItem key = { el.id } { ...el } _onDeleteFavorite = {()=>{_onDeleteFavorite(el.id)}}/>) }
          </div>
        )
    }
}