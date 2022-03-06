import { MovieDetailsType, PopularResponseType, TopRatedResponseType, UpcomingResponseType } from "../../../ts/movies"
import { api_key, language } from "../../api"

export const getMoviesImage = (url?: string | null) => `https://image.tmdb.org/t/p/w500${url}`

export const getMoviesTopRated = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=${page}`)
    const response: TopRatedResponseType = await request.json()
    return response
}

export const getMoviesPopular = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`)
    const response: PopularResponseType = await request.json()
    return response
}
export const getMoviesUpcoming = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=${language}&page=${page}`)
    const response: UpcomingResponseType = await request.json()
    return response
}
export const getMovieDetails = async (movie_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=${language}`)
    const response: MovieDetailsType = await request.json()
    return response
}

