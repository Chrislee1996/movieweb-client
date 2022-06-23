import apiUrl from '../apiConfig'
import axios from 'axios'
import env from 'react-dotenv'


export const getMovies = (page) => {
    const searchUrl = 
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    const config = {
        method: 'get',
        url:searchUrl
    }
    return axios(config)
}




export const getUpcoming = () => {
    const searchUrl = 
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    const config = {
        method: 'get',
        url:searchUrl
    }
    return axios(config)
}


export const getTopRated = () => {
    const searchUrl = 
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    const config = {
        method: 'get',
        url:searchUrl
    }
    return axios(config)
}



