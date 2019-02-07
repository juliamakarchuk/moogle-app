// let { backdrop_path, budget, overwiew, release_date, status,title, tagline, runtime, production_coutries, poster_path, genres} = this.state.about;
import React, {Component} from 'react';

import Styles from './styles.module.css';

import iconStar from './star.svg';
import iconBell from './bell.svg';

export default class Info extends Component{

    render(){
        let { 
            backdrop_path, 
            budget, 
            overview, 
            release_date, 
            status,
            title, 
            tagline, 
            runtime,
            production_countries, 
            poster_path, 
            genres,
            id} = this.props;

        console.log(production_countries);


         if(!production_countries) {
             return <div></div>
        }
        let genre = genres.map(el => el.name.toLowerCase());
        return(
                <div className = {Styles.info}>
                <h3 className = {Styles.title}>{title} ({release_date.split('-')[0]})</h3>
                <div className = {Styles.iconsBar}>
                    <svg className ={Styles.iconStar}>
                        <use href ={`${iconStar}#root`}></use>
                    </svg>
                    <svg className ={Styles.iconBell}>
                        <use href={`${iconBell}#root`}></use>
                    </svg>
                </div>
                <table className = {Styles.infoTable}>
                    <tr>
                        <td>{`country`}</td>
                        <td>{production_countries[0].name}</td>
                    </tr>
                    <tr>
                        <td>{`tagline`}</td>
                        <td>{tagline}</td>
                    </tr>
                    <tr>
                        <td>{`genre`}</td>
                        <td>{genre.join(', ')}</td>
                    </tr>
                    <tr>
                        <td>{`time`}</td>
                        <td>{`${runtime} minutes / ${(runtime/60).toFixed(2)} hours`}</td>
                    </tr>
                </table>
                <div>
                    <h3 className = {Styles.title}>{'About film'}</h3>
                    <p className = {Styles.overview}>{overview}</p>
                </div>
            </div>
        )
    }
}