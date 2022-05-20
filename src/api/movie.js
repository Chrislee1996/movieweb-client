import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMovies = (page) => {
    const searchUrl = 
    `https://api.themoviedb.org/3/movie/now_playing?api_key=1e82814411d52914e0401e0ea118c4d8&language=en-US&page=${page}`
    const config = {
        method: 'get',
        url:searchUrl
    }
    return axios(config)
}


export const getUpcoming = () => {
    const searchUrl = 
    `https://api.themoviedb.org/3/movie/upcoming?api_key=1e82814411d52914e0401e0ea118c4d8&language=en-US&page=1`
    const config = {
        method: 'get',
        url:searchUrl
    }
    return axios(config)
}



