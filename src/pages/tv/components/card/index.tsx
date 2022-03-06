import { Link } from "react-router-dom";
import { getTvImage } from "../../../../services/tmdb/tv";
import { ResultTvType } from "../../../../ts/tv";
import { dateFormat } from "../../../../utils/dates";

export const CardTvResult = (props: {tv: ResultTvType}) => {
    return (
        <div className="card mb-3 col-lg-4 col-md-6 col-sm-12">
            <img src={getTvImage(props.tv.backdrop_path)} className="card-img-top" alt={props.tv.original_name} />
            <div className="card-body">
                <h5 className="card-title">{props.tv.name}</h5>
                <span className="fs-6 mb-2">{props.tv.original_name}</span>
                <p className="card-text">{props.tv.overview}</p>
                <p className="card-text"><small className="text-muted">{props.tv.first_air_date ? dateFormat(props.tv.first_air_date) : ''}</small></p>
                <Link to={`/tv/${props.tv.id}`} className="btn btn-primary">Ver</Link>
            </div>
        </div>
    )
}
