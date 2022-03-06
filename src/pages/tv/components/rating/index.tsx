import { useAppSelector } from "../../../../redux/hooks";
import { handleAverage } from "../../../../utils";

export const RatingTv = () => {
    const tvs = useAppSelector((state) => state.tvs);
    return (
        <div className="bg-success p-3 text-white">
            <h1 className="text-dark">{tvs.details.name}</h1>
            <p>{tvs.details.overview}</p>
            <span>Avaliação:</span>
            <div>{handleAverage(tvs.details.vote_average)}</div>
            <span className="mt-2">Votantes:</span>
            <div>{tvs.details.vote_count}</div>
        </div>
    )
}