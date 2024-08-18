import axios from "axios"

const movieBaseUrl ="https://api.themoviedb.org/3"
const api_key = 'd83196f9652b5a13daa9062d053076a0'

const  getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

export default {
    getTrendingVideos
}