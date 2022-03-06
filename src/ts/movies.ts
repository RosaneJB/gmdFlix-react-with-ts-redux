export type TopRatedParams = {
    api_key: string
    language?: string
    page?: number
    region?: string
}

export type ResultMovieType = {
    poster_path?: string | null
    adult?: boolean
    overview?: string
    release_date?: string
    genre_ids?: number[] // [1,2,3]
    id?: number
    original_title?: string
    original_language?: string
    title?: string
    name?: string
    backdrop_path?: string | null
    popularity?: number
    vote_count?: number
    video?: boolean
    vote_average?: number
}

export type TopRatedResponseType = {
    page?: number
    results?: ResultMovieType[]
    total_results?: number
    total_pages?: number
}
export type PopularResponseType = {
    page?: number
    results?: ResultMovieType[]
    total_results?: number
    total_pages?: number
}
export type DatesType = {
    maximum?:string
    minimum?:string
}
export type UpcomingResponseType = {
    page?: number
    results?: ResultMovieType[]
    dates?: DatesType
    total_results?: number
    total_pages?: number
}
enum MovieStatus {
    'Rumored', 'Planned', 'In Production', 'Post Production', 'Released', 'Canceled'
}
export type MovieSpokenLanguageType = {
    iso_639_1?: string
    name?: string
}
export type MovieProductionCountryType = {
    iso_3166_1?: string
    name?: string
}
export type MovieProductionCompanyType = {
    name?: string
    id?: number
    logo_path?: string | null
    origin_country?: string
}
export type MovieGenresType = {
    id?: number
    name?: string
}
export type MovieDetailsType = {
    adult?: boolean
    backdrop_path?: string | null
    belongs_to_collection?: null | object
    budget?: number
    genres?: MovieGenresType[]
    homepage?: string | null
    id?: number
    imdb_id?: string | null
    original_language?: string
    original_title?: string
    overview?: string | null
    popularity?: number
    poster_path?: string | null
    production_companies?: MovieProductionCompanyType[]
    production_countries?: MovieProductionCountryType[]
    release_date?: string
    revenue?: number
    runtime?: number | null
    spoken_languages?: MovieSpokenLanguageType[]
    status?: MovieStatus
    tagline?: string | null
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
}