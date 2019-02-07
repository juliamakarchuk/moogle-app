import React, {Component} from 'react';

import Spinner from '../../Spinner';
import Styles from './styles.module.css';
import { fetchVideo } from '../../../API';
import { delay } from '../../../instruments';

export default class Video extends Component{
    state = {
       key : [],
       isLoading: true
    }
   _isFetchingAbout = ( state ) =>{
       this.setState({
           isLoading: state
       })
   }
   _fetchVideo = async ()=>{
       await delay (3000);
       fetchVideo(this.props.id)
        .then(data=>{
            console.log('dada',data.results[0].key);
            this.setState({
                key: data.results[0].key
            })
        })
        .then( this._isFetchingAbout(false))
   }
    componentDidMount(){
        this._fetchVideo();
    }
    render(){
        if(this.state.isLoading) {
            return (
                <div className = {Styles.spinnerBlock}>
                    <Spinner/>
                </div>
            )
       }
        return(
            <div className= {Styles.video}>
                <h3 className = {Styles.title}>Trailer</h3>
                <iframe width="600" 
                height="355" 
                src={`https://www.youtube.com/embed/${this.state.key}`}
                frameborder="0" allow="accelerometer; 
                autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
        )
    }
}