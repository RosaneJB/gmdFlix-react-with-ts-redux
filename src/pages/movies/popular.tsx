import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setPopular } from "../../redux/reducers/movieReducer"
import { getMoviesPopular } from "../../services"
import { PopularResponseType } from "../../ts/movies"
import { Pagination } from "../components/pagination"
import { CardMovieResult } from "./components/card"

export const PopularMovies = () => {
    const dispatch = useAppDispatch()
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const movies = useAppSelector((state) => state.movies)
    
    useEffect(() => {
        const fillPopular = async () => {
            const changePopular = (popular: PopularResponseType) => dispatch(setPopular(popular))
            const response = await getMoviesPopular(actualPage)
            changePopular(response)
            response.page && setActualPage(response.page)
            response.total_pages && setTotalPages(response.total_pages > 500 ? 500 : response.total_pages)
        }
        /**
         * Quando eu não estiver na página 1
         * ou quando eu não tiver nenhum resultado no meu estado global
         * ai sim, o método será chamado
         */
        if (movies.popular.page !== 1 || movies.popular.results.length < 1) {
            console.log('Chamou o método em popular');            
            fillPopular()            
        }
    }, [actualPage, dispatch, movies.popular.page, movies.popular.results.length])

    return (
        <>
        <h1>{movies.details.title} - {movies.details.original_language} - {movies.upcoming.page}- {movies.upcoming.total_pages}</h1>
            <h1 className="text-center">{movies.details.title}</h1>
            <div className="row">
                {movies.popular && movies.popular.results?.map((movie, index) => {
                    return <CardMovieResult key={index} movie={movie} />
                })}
            </div>
            <Pagination actualPage={actualPage} setActualPage={setActualPage} totalPages={totalPages} />
        </>
    )
}
