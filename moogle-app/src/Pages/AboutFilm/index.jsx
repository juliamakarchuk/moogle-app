import React, {Component} from 'react';
import { fetchId } from '../../API';


import Info from './Info';
import Spinner from '../Spinner';
import Video from './Video';

import Styles from './styles.module.css';
import { delay } from '../../instruments';


export default class AboutFilm extends Component{

    state = {
         about: [],
         isLoading: true
    }

    _isFetchingAbout = ( state ) =>{
        this.setState({
            isLoading: state
        })
    }

    _fetchAbout = async () =>{
        await delay (3000);

        fetchId(this.props.about)
        .then( response =>{
        this.setState({
          about: response
          })
        })
      .then( this._isFetchingAbout(false))
    }

    componentDidMount(){
       this._fetchAbout();
    }

    render(){
        let { poster_path, id} = this.state.about;

        if(this.state.isLoading) {
            return (
                <Spinner/>
            )
        }
        return (
            <div className = { Styles.container }>
                <div className = {Styles.imageBlock}>
                <img src={ `https://image.tmdb.org/t/p/w300`+poster_path} className = {Styles.image}/>
                </div>
                <Info {...this.state.about}/>
                <Video id = { id }/>
            </div>
        )
    }
}