import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getMoviesUpcoming } from "../../services"
import { setUpcoming } from "../../redux/reducers/movieReducer"
import { UpcomingResponseType } from "../../ts/movies"
import { Pagination } from "../components/pagination"
import { CardMovieResult } from "./components/card"

export const UpcomingMovies = () => {
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const movies = useAppSelector((state) => state.movies)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const fillUpcoming = async () => {
            const changeUpcoming = (upcoming: UpcomingResponseType) => dispatch(setUpcoming(upcoming))
            const response = await getMoviesUpcoming(actualPage)
            changeUpcoming(response)
            response.page && setActualPage(response.page)
            response.total_pages && setTotalPages(response.total_pages > 500 ? 500 : response.total_pages)
        }
        if (movies.upcoming.page !== 1 || movies.upcoming.results.length < 1) {
            fillUpcoming()            
        }
    }, [actualPage, dispatch, movies.upcoming.page, movies.upcoming.results.length])
    return (
        <>
            <h1 className="text-center">Lista de Novos Filmes</h1>
            <div className="row">
                {movies.upcoming && movies.upcoming.results?.map((movie, index) => {
                    return <CardMovieResult key={index} movie={movie} />
                })}
            </div>
            <Pagination actualPage={actualPage} setActualPage={setActualPage} totalPages={totalPages} />
        </>
    )
}
