import { options } from "helpers";
import axios from "axios";

export const getData = (url) => {
    return axios.get(url,options)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const getDataArray = (url) => {
    return axios.get(url,options)
    .then(response => response.data.results)
    .catch(error => {
        throw error;
    });
}

export const getDataGenres = () => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en',options)
    .then(response => response.data.genres)
    .catch(error => {
        throw error;
    });
}