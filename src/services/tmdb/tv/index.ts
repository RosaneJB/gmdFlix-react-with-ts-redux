import { DetailsResponseType, TopRatedResponseType, TvAccountStatesType, TvAlternativeTitlesType, TvRecommendationsType } from "../../../ts/tv"
import { api_key, language } from "../../api"

export const getTvImage = (url?: string | null) => `https://image.tmdb.org/t/p/w500${url}`

export const getTvTopRated = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=${language}&page=${page}`)
    const response: TopRatedResponseType = await request.json()
    return response
}
export const getTvPopular = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=${page}`)
    const response: TopRatedResponseType = await request.json()
    return response
}
export const getTvOnTheAir = async (page = 1) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=${language}&page=${page}`)
    const response: TopRatedResponseType = await request.json()
    return response
}
export const getTvDetails = async (tv_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api_key}&language=${language}`)
    const response: DetailsResponseType = await request.json()
    return response
}
export const getTvAlternativeTitles = async (tv_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/alternative_titles?api_key=${api_key}&language=${language}`)
    const response: TvAlternativeTitlesType = await request.json()
    return response
}
export const getTvAccountStates = async (tv_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/account_states?api_key=${api_key}&language=${language}`)
    const response: TvAccountStatesType = await request.json()
    return response
}
export const getTvRecommendations = async (tv_id: number | undefined) => {
    const request = await fetch(`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${api_key}&language=${language}`)
    const response: TvRecommendationsType = await request.json()
    return response
}

