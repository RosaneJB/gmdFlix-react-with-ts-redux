import { Link } from "react-router-dom";
import { getMoviesImage } from "../../../../services/tmdb/movies";
import { ResultMovieType } from "../../../../ts/movies";
import { dateFormat } from "../../../../utils/dates";

export const CardMovieResult = (props: {movie: ResultMovieType}) => {
    return (
        <div className="card mb-3 col-lg-4 col-md-6 col-sm-12">
            <img src={getMoviesImage(props.movie.backdrop_path)} className="card-img-top" alt={props.movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{props.movie.title}</h5>
                <span className="fs-6 mb-2">{props.movie.original_title}</span>
                <p className="card-text">{props.movie.overview}</p>
                <p className="card-text"><small className="text-muted">{props.movie.release_date ? dateFormat(props.movie.release_date) : ''}</small></p>
                <Link to={`/movies/movie/${props.movie.id}`} className="btn btn-primary">Ver</Link>
            </div>
        </div>
    )
}
