import React, {Component} from 'react';
import {fetchData, fetchCategoriesData} from '../../../API';

import SearchItem from '../SearchItem';

import Styles from './styles.module.css';

export default class SearchList extends Component{

    state = {
        search: [],
        page: 1
    }

    componentWillMount = () =>{
        console.log('mount');
        fetchData(this.props.info, this.state.page).then(data=>{
            this.setState({
                search: data,
                page: this.state.page+1
            })
        })
    }

    componentWillReceiveProps=(nextProps)=>{
        console.log(nextProps.info)
        fetchData(nextProps.info, this.state.page).then(data=>{
            this.setState({
                search: data,
                page: this.state.page+1
            })
        })
    }

    _loadMoreFilmes = () => {
        fetchData(this.props.info, this.state.page)
        .then( response => this.setState({
            search: [...this.state.search, ...response],
            page: this.state.page + 1
        }))
    }

    render(){
        let { search } = this.state;
        let  {_onAddFavorite}  = this.props;
        return(
            <div className = { Styles.container }>
              { search.map(( el )=> <SearchItem key = { el.id } { ...el } _onAddFavorite = {()=>_onAddFavorite(el)}/>) }
              <button className = {Styles.button} onClick = {()=>{this._loadMoreFilmes()}}>Load more...</button>
          </div>
        )
    }
}