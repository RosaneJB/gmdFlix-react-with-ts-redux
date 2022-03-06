import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setDetails } from "../../redux/reducers/tvReducer";
import {
  getTvAccountStates,
  getTvAlternativeTitles,
  getTvDetails,
  getTvImage,
  getTvRecommendations,
} from "../../services";
import {
  DetailsResponseType,
  TvAccountStatesType,
  TvAlternativeTitlesType,
  TvAlternativeTitlesTypeResults,
  TvGenreType,
  TvProductionCompanyType,
  TvProductionCountryType,
  TvRecommendationsType,
} from "../../ts/tv";
import { handleAverage } from "../../utils";
import { ModalAccountStates, ModalAlternativeTitles, ModalRecommendations } from "./components/card/modal";
import { RatingTv } from "./components/rating";

export const TvDetails = () => {
  let { id } = useParams();
  const tvs = useAppSelector((state) => state.tvs);
  const dispatch = useAppDispatch();
  const [alternativeTitlesTv, setAlternativeTitlesTv] =
    useState<TvAlternativeTitlesType>();
  const [accountStatesTv, setAccountStatesTv] = useState<TvAccountStatesType>()
  const [recommendationsTv, setRecommendationsTv] = useState<TvRecommendationsType>()

  useEffect(() => {
    const fillMovie = async () => {
      const changeTvDetails = (details: DetailsResponseType) =>
        dispatch(setDetails(details));
      const response = await getTvDetails(Number(id));
      const alternativeTitles = await getTvAlternativeTitles(Number(id));
      const accountStates = await getTvAccountStates(Number(id))
      const recommendations = await getTvRecommendations(Number(id))
      setAlternativeTitlesTv(alternativeTitles);
      setAccountStatesTv(accountStates)
      setRecommendationsTv(recommendations)
      changeTvDetails(response);
    };
    fillMovie();
  }, [dispatch, id]);

  useEffect(() => {
    console.log(accountStatesTv, "estados");
  }, [accountStatesTv]);

  return (
    <>
      {tvs.details ? (
        <>
          <div className="row">
            <div className="col-4">
              <RatingTv />
              <div className="bg-info p-3">
                <h4>Produtoras:</h4>
                {tvs.details.production_companies?.map(
                  (company: TvProductionCompanyType, index) => {
                    return (
                      <>
                        <span key={index}>
                          {company.name} - {company.origin_country}
                        </span>
                        <hr />
                      </>
                    );
                  }
                )}
              </div>
              <div className="bg-warning p-3">
                <h4>Países:</h4>
                {tvs.details.production_countries?.map(
                  (country: TvProductionCountryType, index) => {
                    return (
                      <>
                        <span key={index}>
                          {country.iso_3166_1} - {country.name}
                        </span>
                        <hr />
                      </>
                    );
                  }
                )}
              </div>
              <div className="bg-danger p-3">
                <h4>Gêneros:</h4>
                {tvs.details.genres?.map((genre: TvGenreType, index) => {
                  return (
                    <>
                      <span key={index}>{genre.name}</span>
                      <hr />
                    </>
                  );
                })}
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#alternativeTitles"
              >
                Títulos Alternativos
              </button>
              {alternativeTitlesTv && <ModalAlternativeTitles alternativeTitlesTv={alternativeTitlesTv} />}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#recommendations"
              >
                Recomendações
              </button>
              {recommendationsTv && <ModalRecommendations recommendations={recommendationsTv} />}
            </div>
            <img
              className="col-8"
              style={{ height: "100%" }}
              src={getTvImage(tvs.details.backdrop_path)}
              alt={tvs.details.name}
            />
          </div>
          {accountStatesTv?.success &&
          <>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#accountStates"
            >
              Estados da Conta
            </button>
            <ModalAccountStates accountStates={accountStatesTv}/>
          </>
          }
        </>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
};
