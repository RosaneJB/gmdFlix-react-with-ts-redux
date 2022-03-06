export type TopRatedParams = {
    api_key: string
    language?: string
    page?: number
}

export type ResultTvType = {
    poster_path?: string | null
    popularity?: number
    id?: number
    backdrop_path?: string | null
    vote_average?: number
    overview?: string
    first_air_date?: string
    origin_country?: string[]
    genre_ids?: number[] // [1,2,3]
    original_language?: string
    vote_count?: number
    name?: string
    original_name?: string
}

export type TopRatedResponseType = {
    page?: number
    results?: ResultTvType[]
    total_results?: number
    total_pages?: number
}

export type PopularResponseType = {
    page?: number
    results?: ResultTvType[]
    total_results?: number
    total_pages?: number
}
export type OnTheAirResponseType = {
    page?: number
    results?: ResultTvType[]
    total_results?: number
    total_pages?: number
}
export type TvCreatedByType = {
    id?: number
    credit_id?: string
    name?: string
    gender?: number
    profile_path?: string | null
}
export type TvGenreType = {
    id?: number
    name?: string
}
export type TvLastEpisodeOnTheAirType = {
    air_date?: string
    episode_number?: number
    id?: number
    name?: string
    overview?: string
    production_code?: string
    season_number?: number
    still_path?: string | null
    vote_average?: number
    vote_count?: number
}
export type TvNetworksType = {
    name?: string
    id?: number
    logo_path?: string | null
    origin_country?: string
}
export type TvSpokenLanguageType = {
    iso_639_1?: string
    name?: string
    english_name?: string 
}
export type TvProductionCountryType = {
    iso_3166_1?: string
    name?: string
}
export type TvProductionCompanyType = {
    name?: string
    id?: number
    logo_path?: string | null
    origin_country?: string
}
export type TvSeasonType = {
    air_date?: string
    episode_count?: number
    id?: number
    name?: string
    overview?: string
    poster_path?: string
    season_number?: number
}
export type DetailsResponseType = {
    backdrop_path?: string | null
    created_by?: TvCreatedByType[]
    episode_run_time?: number[]
    first_air_date?: string
    genres?: TvGenreType[]
    homepage?: string
    id?: number
    in_production?: boolean
    languages?: string[]
    last_air_date?: string
    last_episode_to_air?: TvLastEpisodeOnTheAirType
    name?: string
    next_episode_to_air?: null
    networks?: TvNetworksType[]
    number_of_episodes?: number
    number_of_seasons?: number
    origin_country?: string[]
    original_language?: string
    original_name?: string
    overview?: string
    popularity?: number
    poster_path?: string | null
    production_companies?: TvProductionCompanyType[]
    production_countries?: TvProductionCountryType[]
    seasons?: TvSeasonType[]
    spoken_languages?: TvSpokenLanguageType[]
    status?: string
    tagline?: string
    type?: string
    vote_average?: number
    vote_count?: number
}
export type TvAlternativeTitlesTypeResults = {
    title?: string
    iso_3166_1?: string
    type?: string
}
export type TvAlternativeTitlesType = {
    id?: number
    results?: TvAlternativeTitlesTypeResults[]
}
export type TvAccountStatesType = {
    id?: number
    favorite?: boolean
    rated?: object | boolean
    watchlist?: boolean
    status_message?: string
    status_code?: number
    success?: boolean
}
export type TvRecommendationsResultsType ={
    poster_path?: string | null
    popularity?: number
    id?: number
    backdrop_path?: string | null
    vote_average?: number
    overview?:string
    first_air_date?:string
    origin_country?:string[]
    genre_ids?:number[]
    original_language?:string
    vote_count?: number
    name?:string
    original_name?:string
}
export type TvRecommendationsType ={
    page?: number
    results?: TvRecommendationsResultsType[]
    total_pages?: number
    total_results?: number
}