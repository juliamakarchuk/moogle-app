//Core
import React, { Component } from 'react';
import { Route, Switch, Redirect, Link , Router} from 'react-router-dom';

//Components
import Header from '../Header';
import CategoriesBar from '../CategoriesBar';
import MovieList from '../../Pages/Movies/MovieList';
import SerialsList from '../../Pages/Serials/SerialsList';
import SearchResult from '../../Pages/SeachResult/SearchList';
import FavoriteList from '../../Pages/Favorites/FavoriteList';
import AboutFilm from '../../Pages/AboutFilm'

//Styles
import Styles from './styles.module.css';
import {fetchId} from '../../API';



export default class MovieApp extends Component {
    constructor(){
        super();
        this._WrappedSearchResult = this._WrappedSearchResult.bind(this);
        this._onAddFavorite = this._onAddFavorite.bind(this);
        this._onDeleteFavorite = this._onDeleteFavorite.bind(this);
        this._onAboutFilm = this._onAboutFilm.bind(this);
        this._WrapperFavorites = this._WrapperFavorites.bind(this);
        this._WrapperMovieList = this._WrapperMovieList.bind(this);
        this._WrapperSerialsList = this._WrapperSerialsList.bind(this);
        this._WrapperAboutFilm = this._WrapperAboutFilm.bind(this)
    }
    state = {
        search: 'best',
        favorites: [],
        about:''
    }
     
    componentWillMount = () =>{
        this.setState({
            favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')):[],
            about: localStorage.getItem('aboutId')? JSON.parse(localStorage.getItem('aboutId')):''
        })
    }
    componentDidUpdate = () =>{
        localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
        localStorage.setItem('aboutId', JSON.stringify(this.state.about));
    }
    _handleForm = (searchValue) =>{
        this.setState({
            search: searchValue
        })
    }
    _onAddFavorite = (el) =>{
        if(this.state.favorites.find(element => element.id === el.id)) return;
        this.setState({
             favorites: [...this.state.favorites, el]
         })
    }
    _onDeleteFavorite = (id) => {
        this.setState({
           favorites: this.state.favorites.filter(el=> el.id !== id)
        });
    }

    _onAboutFilm = (el) =>{
       this.setState({
           about: el.id
       })
    }
    _WrappedSearchResult = function (props) {
         return  (<SearchResult info = { this.state.search } {...props} _onAddFavorite = {this._onAddFavorite}/>)
    }

    _WrapperMovieList = function(props) {
        return (<MovieList _onAddFavorite = {this._onAddFavorite} _onAboutFilm = { this._onAboutFilm }></MovieList>)
    }
    
    _WrapperSerialsList = function(props) {
        return (<SerialsList _onAddFavorite= {this._onAddFavorite}></SerialsList>)
    }

    _WrapperFavorites = function(props) {
         return (<FavoriteList info = { this.state.favorites } _onDeleteFavorite = {this._onDeleteFavorite}></FavoriteList>)
    }
    _WrapperAboutFilm = function(props){
        return (<AboutFilm about = {this.state.about}></AboutFilm>)
    }
    render (){
        console.log('localstorage',localStorage)
        const navLinks =[
            {
                path: '/',
                text: 'movies'
            },
            {
                path: '/serials',
                text: 'serials'
            },
            {
                path: '/favorites',
                text: `favorites (${this.state.favorites.length})`
            } 
          ]
        return(
            <div>
                <Header _handleForm = { this._handleForm }/>
                <CategoriesBar  menu = {navLinks}/>
                <Switch>
                    <Route exact path='/' component = { this._WrapperMovieList }/>
                    <Route path ='/search' component = {this._WrappedSearchResult}/>
                    <Route path = '/serials' component = { this._WrapperSerialsList } />
                    <Route path = '/favorites' component = { this._WrapperFavorites }/>
                    <Route path = '/about'  component = {this._WrapperAboutFilm} />
                </Switch>
            </div>
        )
    }
}