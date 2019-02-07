import React, {Component} from 'react';
import { Route, Switch, Redirect, Link , Router} from 'react-router-dom';

import Styles from './styles.module.css';
import notificationIcon from './bell.svg';
import favoriteIcon from './star.svg';

export default class SearchItem extends Component{
    render(){
        let {img, release,title, popularity, id, _onAddFavorite} = this.props;
        let image =()=> img ? img : '/lgYGPujZNckyKwQQNwMLmkWoKui.jpg';
        let releaseYear = release.split('-')[0];
        return(
            <div className = {Styles.wrap}>
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