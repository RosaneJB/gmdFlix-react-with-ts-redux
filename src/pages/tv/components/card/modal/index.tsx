import { Link } from "react-router-dom";
import { TvAlternativeTitlesType, TvAlternativeTitlesTypeResults, TvAccountStatesType, TvRecommendationsType } from "../../../../../ts/tv";

export const ModalAlternativeTitles = ({alternativeTitlesTv}: {alternativeTitlesTv: TvAlternativeTitlesType}) => {
    return (
        <div
            className="modal fade"
            id="alternativeTitles"
            tabIndex={-1}
            aria-labelledby="alternativeTitlesLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="text-center modal-title" id="alternativeTitlesLabel">
                            Títulos Alternativos
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {alternativeTitlesTv?.results?.map(
                            (
                                alternative: TvAlternativeTitlesTypeResults,
                                index: number
                            ) => {
                                return (
                                    <>
                                        <span key={index}>{alternative.title}</span>
                                        <hr />
                                    </>
                                );
                            }
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const ModalAccountStates = ({accountStates}: {accountStates: TvAccountStatesType})=>{
    return (
        <div
            className="modal fade"
            id="accountStates"
            tabIndex={-1}
            aria-labelledby="accountStatesLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="text-center modal-title" id="accountStatesLabel">
                            Títulos Alternativos
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <h4>{accountStates.favorite}</h4>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const ModalRecommendations = ({recommendations}: {recommendations: TvRecommendationsType})=>{
    return (
        <div
            className="modal fade"
            id="recommendations"
            tabIndex={-1}
            aria-labelledby="recommendationsLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="text-center modal-title" id="recommendationsLabel">
                           Recomendações
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                    <ul className="list-group">
                        {recommendations.results?.map((recommendation)=>{
                         return (
                            <li className="list-group-item">{recommendation.name} ({recommendation.original_name}) - <Link to={`/tv/${recommendation.id}`} className="btn btn-primary">Ver</Link></li>
                         )
                     })}
                    </ul>
                    
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}