import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

function fetchData(query){
    return fetch(
        // `https://api.themoviedb.org/3/movie/19404/videos?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&language=en-US`
        'https://api.themoviedb.org/3/movie/top_rated?&query=21&page=1&language=en-US&api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6'
        // `https://api.themoviedb.org/3/search/movie?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&query=drama`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    .then(data=>{
        console.log('data',data);
        const filmes = data.results.map(result=>({
            id: result.id,
            img: result.poster_path,
            release: result.release_date,
            overview: result.overview,
            title: result.title,
            popularity: result.vote_average
        }));
        return filmes;
    })
    .catch(err=>console.log(err))
}
fetchData();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
