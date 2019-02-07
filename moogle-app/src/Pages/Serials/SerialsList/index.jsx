import React, { Component}  from 'react';

import SerialItem from '../SerialItem';

import Styles from './styles.module.css';
import {fetchData, fetchCategoriesData, fetchSerials} from '../../../API';

export default class SerialsList extends Component{

    state = {
        serials : [],
        page: 1
    }

    componentDidMount = () =>{
         fetchSerials(this.state.page)
         .then( response => this.setState({
             serials: response,
             page: this.state.page + 1
         }))
    }
    _loadMoreFilmes = () => {
        fetchSerials(this.state.page)
        .then( response => this.setState({
            serials: [...this.state.serials, ...response],
            page: this.state.page + 1
        }))
    }
    render(){
        // console.log('s',this.state.serials)
        let { serials } = this.state;
        let {_onAddFavorite} = this.props;
        return(
            <div className = { Styles.container }>
              { serials.map(( el )=> <SerialItem key = { el.id } { ...el } _onAddFavorite = {()=>_onAddFavorite(el)}/>) }
              <button className = {Styles.button} onClick = {()=>{this._loadMoreFilmes()}}>Load more...</button>
          </div>
        )
    }
}