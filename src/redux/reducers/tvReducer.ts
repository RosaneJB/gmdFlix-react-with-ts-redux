import { createSlice } from '@reduxjs/toolkit'
import { DetailsResponseType, OnTheAirResponseType, PopularResponseType, TopRatedResponseType } from '../../ts/tv'

export interface tvsInitialState {
    popular: PopularResponseType
    onTheAir: OnTheAirResponseType
    topRated: TopRatedResponseType
    details: DetailsResponseType
}

export const slice = createSlice({
    name: 'tvs',
    initialState: {
        popular: {
            page: 1,
            results: [],
            total_results: 0,
            total_pages: 0
        },
        onTheAir: {
            page: 1,
            results: [],
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
            backdrop_path: null,
            created_by: [],
            episode_run_time: [],
            first_air_date: '',
            genres: [],
            homepage: '',
            id: 0,
            in_production: false,
            languages: [],
            last_air_date: '',
            last_episode_to_air: {},
            name: '',
            next_episode_to_air: null,
            networks: [],
            number_of_episodes: 0,
            number_of_seasons: 0,
            origin_country: [],
            original_language: '',
            original_name: '',
            overview: '',
            popularity: 0,
            poster_path: null,
            production_companies: [],
            production_countries: [],
            seasons: [],
            spoken_languages: [],
            status: '',
            tagline: '',
            type: '',
            vote_average: 0,
            vote_count: 0,
        }
    },
    reducers: {
        setPopular: (state: tvsInitialState, action: { payload: PopularResponseType }) => {
            state.popular = action.payload
        },
        setOnTheAir: (state: tvsInitialState, action: { payload: OnTheAirResponseType }) => {
            state.onTheAir = action.payload
        },
        setTopRated: (state: tvsInitialState, action: { payload: TopRatedResponseType }) => {
            state.topRated = action.payload
        },
        setDetails: (state: tvsInitialState, action: { payload: DetailsResponseType }) => {
            state.details = action.payload
        },
    }
})

export const { setPopular, setTopRated, setOnTheAir, setDetails } = slice.actions
export default slice.reducer
