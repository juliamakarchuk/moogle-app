import v4 from 'uuid';
export function fetchData(query, page){
    return fetch(
        `https://api.themoviedb.org/3/search/movie?&page=${page}&api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&query=${query}`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    // .then(res=> {console.log(res);return res})
    .then(data=>{
        const filmes = data.results.map(result=>({
            ...result,
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

export function fetchCategoriesData(categories, page){
    return fetch(
        `https://api.themoviedb.org/3/movie/${categories}?query=21&page=${page}&language=en-US&api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    .then(data=>{
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
export function fetchSerials (page){
    return fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?page=${page}&language=us-US&api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    .then(data=>{
        const filmes = data.results.map(result=>({
            id: result.id,
            img: result.poster_path,
            release: result.first_air_date,
            overview: result.overview,
            name: result.name,
            popularity: result.vote_average,

        }));
        return filmes;
    })
    .catch(err=>console.log(err))
}

export function fetchId (id){
    return fetch(
        // `https://www.googleapis.com/youtube/v3/videos`
        // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
        // `https://api.themoviedb.org/3/movie/${id}/lists?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&language=en-US`
        // `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&language=en-US`
        `https://api.themoviedb.org/3/movie/${id}?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&language=en-US`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    .then(data=>{
        return data
    })
    .catch(err=>console.log(err))
}
export function fetchVideo(id){
    return fetch(
        // `https://www.googleapis.com/youtube/v3/videos`
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0e091ebb1ec18b3bc2f1f920dbb0d6d6&language=en-US`
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching'+response.statusText)
    })
    .then(data=>{
        return data
    })
    .catch(err=>console.log(err))
}
// AIzaSyBPZ2PauxwV-OB1YI_wC0zmRajjauc0QWg