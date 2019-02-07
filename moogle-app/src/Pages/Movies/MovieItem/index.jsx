import React, { Component } from 'react';

import Styles from './styles.module.css';
import notificationIcon from './bell.svg';
import favoriteIcon from './star.svg';
import { Route, Switch, Redirect, Link , Router} from 'react-router-dom';

export default class MovieItem extends Component {

    _handleClick = (evt) =>{
        if(evt.target.hasAttribute('href')||evt.target.nodeName == 'SVG') return;
       console.log(evt.target);
       this.props._onAboutFilm();
       return (<Link to = {'/about'}/>)
    }
    render(){
        let {img, release,title, id, popularity, _onAddFavorite, _onAboutFilm} = this.props;
        let image =()=> img ? img : '/lgYGPujZNckyKwQQNwMLmkWoKui.jpg';
        let releaseYear = release.split('-')[0];
        return(
            <div className = {Styles.wrap} onClick = {this._handleClick}>
            <div className = {Styles.image} style={ { backgroundImage: `url(${`https://image.tmdb.org/t/p/w300`+image()})` } }></div>
            <Link to ={'/about'}><p className = {Styles.title}> {title} ({releaseYear})</p></Link>
            <span className = {Styles.popularity}>{popularity}</span>
            <svg className = { Styles.iconStar } onClick = {_onAddFavorite}>
                <use href = {`${favoriteIcon}#root`} />
            </svg>
            <svg className = { Styles.iconBell }>
                <use href = {`${notificationIcon}#root`} />
            </svg>
            </div>
        )
    }
}