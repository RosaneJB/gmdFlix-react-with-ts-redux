import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setDetails } from "../../redux/reducers/movieReducer"
import { MovieDetailsType } from "../../ts/movies"

export const Home = () => {
    const movies = useAppSelector((state) => state.movies)
    const dispatch = useAppDispatch()
    const changeDetails = (details: MovieDetailsType) => dispatch(setDetails(details))

    const handleTitle = () => {
        changeDetails({...movies.details, title: 'Novo Título', original_language: 'PT-BR'})
    }

    return (
        <>
        <h1>{movies.details.title} - {movies.details.original_language} - {movies.upcoming.page}- {movies.upcoming.total_pages}</h1>
            <button className="btn btn-success" onClick={handleTitle}>
                Alterar Título
            </button>
        </>
    )
}
