import { createSlice } from '@reduxjs/toolkit'
import { PopularResponseType, UpcomingResponseType, TopRatedResponseType, MovieDetailsType } from '../../ts/movies'

export interface MoviesInitialState {
    popular: PopularResponseType
    upcoming: UpcomingResponseType
    topRated: TopRatedResponseType
    details: MovieDetailsType
}

export const slice = createSlice({
    name: 'movies',
    initialState: {
        popular: {
            page: 1,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        upcoming: {
            page: 1,
            results: [],
            dates: {
                maximum: undefined,
                minimum: undefined
            },
            total_results: 0,
            total_pages: 0
        },
        topRated: {
            page: 1,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        details: {
            adult: false,
            backdrop_path:  null,
            belongs_to_collection: null,
            budget: undefined,
            genres: [],
            homepage: null,
            id: undefined,
            imdb_id: null,
            original_language: '',
            original_title: '',
            overview: null,
            popularity: undefined,
            poster_path: null,
            production_companies: [],
            production_countries: [],
            release_date: '',
            revenue: undefined,
            runtime: undefined,
            spoken_languages: [],
            status: undefined,
            tagline: null,
            title: 'Sem filme 2',
            video: false,
            vote_average: undefined,
            vote_count: undefined,
        }
    },
    reducers: {
        setPopular: (state: MoviesInitialState, action: { payload: PopularResponseType }) => {
            state.popular = action.payload
        },
        setUpcoming: (state: MoviesInitialState, action: { payload: UpcomingResponseType }) => {
            state.upcoming = action.payload
        },
        setTopRated: (state: MoviesInitialState, action: { payload: TopRatedResponseType }) => {
            state.topRated = action.payload
        },
        setDetails: (state: MoviesInitialState, action: { payload: MovieDetailsType }) => {
            state.details = action.payload
        },
    }
})

export const { setPopular, setDetails, setTopRated, setUpcoming } = slice.actions
export default slice.reducer
