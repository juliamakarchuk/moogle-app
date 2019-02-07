import React, { Component } from 'react';

import Styles from './styles.module.css';
import MovieItem from '../MovieItem';
import {fetchData, fetchCategoriesData} from '../../../API';

export default class MovieList extends Component{
    state = {
        movies : [],
        page: 1
     }

    componentDidMount = () =>{
         fetchCategoriesData('top_rated', this.state.page)
         .then( response => this.setState({
             movies: response,
             page: this.state.page + 1
         }))
    }

    _loadMoreFilmes = (page) => {
        fetchCategoriesData('top_rated', this.state.page)
        .then( response => this.setState({
            movies: [...this.state.movies, ...response],
            page: this.state.page + 1
        }))
    }

   render(){
       let {_onAddFavorite ,_onAboutFilm} = this.props;
       let { movies } = this.state;

       return(
          <div className = { Styles.container }>
              { movies.map(( el )=> <MovieItem key = { el.id } { ...el } _onAddFavorite = {()=>_onAddFavorite(el)} _onAboutFilm = {()=>{_onAboutFilm(el)}}/>) }
              <button className = {Styles.button} onClick = {()=>{this._loadMoreFilmes()}}>Load more...</button>
          </div>
       )
   }
}