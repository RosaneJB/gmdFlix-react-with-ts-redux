import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMoviesImage } from "../../services";
import { MovieDetailsType } from "../../ts/movies";
import { handleAverage } from "../../utils";

export const Movie = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType>();
  let { id } = useParams();
  useEffect(() => {
    const fillMovie = async () => {
      const response = await getMovieDetails(Number(id));
      setMovieDetails(response);
    };
    fillMovie();
  }, [id]);

  return (
    <>
      {movieDetails ? (
        <>
          <div className="row">
            <div className="col-4">
              <div className="bg-success p-3 text-white">
                <h1 className="text-dark">{movieDetails.title}</h1>
                <p>{movieDetails.overview}</p>
                <span>Avaliação:</span>
                <div>
                {handleAverage(movieDetails.vote_average)}
                </div>                
                <span className="mt-2">Votantes:</span>
                <div>
                {movieDetails.vote_count}
                </div>
              </div>
              <div className="bg-info p-3">
                <h4>Produtoras:</h4>
                {movieDetails.production_companies?.map((company, index) => {
                  return (
                    <>
                      <span key={index}>
                        {company.name} - {company.origin_country}
                      </span>
                      <hr />
                    </>
                  );
                })}
              </div>
              <div className="bg-warning p-3">
                <h4>Países:</h4>
                {movieDetails.production_countries?.map((country, index) => {
                  return (
                    <>
                      <span key={index}>
                        {country.iso_3166_1} - {country.name}
                      </span>
                      <hr />
                    </>
                  );
                })}
              </div>
              <div className="bg-danger p-3">
                <h4>Gêneros:</h4>
                {movieDetails.genres?.map((genre, index) => {
                  return (
                    <>
                      <span key={index}>
                        {genre.name}
                      </span>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
            <img
              className="col-8"
              style={{height: '100%'}}
              src={getMoviesImage(movieDetails.backdrop_path)}
              alt={movieDetails.title}
            />
          </div>
        </>
      ) : (
        <span>Carregando...</span>
      )}
    </>
  );
};
