import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setTopRated } from "../../redux/reducers/movieReducer"
import { getMoviesTopRated } from "../../services/tmdb/movies"
import { TopRatedResponseType } from "../../ts/movies"
import { Pagination } from "../components/pagination"
import { CardMovieResult } from "./components/card"

export const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState<TopRatedResponseType>()
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const movies = useAppSelector((state) => state.movies)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const fillTopRate = async () => {
            const response = await getMoviesTopRated(actualPage)
            const changeTopRated = (topRated: TopRatedResponseType) => dispatch(setTopRated(topRated))
            changeTopRated(response)
            response.page && setActualPage(response.page)
            response.total_pages && setTotalPages(response.total_pages > 500 ? 500 : response.total_pages)
        }
        if (movies.topRated.page !== 1 || movies.topRated.results.length < 1) {
            console.log('top rated requisitou');
            fillTopRate()            
        }
    }, [actualPage, dispatch, movies.topRated.page, movies.topRated.results.length])

    return (
        <>
            <h1 className="text-center">Lista de Filmes (Mais bem Avaliados)</h1>
            <div className="row">
            {movies.topRated && movies.topRated.results?.map((movie, index) => {
                return <CardMovieResult key={index} movie={movie} />
            })}
            </div>
            <Pagination actualPage={actualPage} setActualPage={setActualPage} totalPages={totalPages} />
        </>
    )
}
