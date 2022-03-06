import { Routes, Route } from "react-router-dom"
import * as Pages from '../pages'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages.Home />} />
            {/* filmes */}
            <Route path="movies" element={<Pages.Movies />} />
            <Route path="movies/movie/:id" element={<Pages.Movie />} />
            <Route path="movies/top-rated" element={<Pages.TopRatedMovies />} />
            <Route path="movies/popular" element={<Pages.PopularMovies />} />
            <Route path="movies/upcoming" element={<Pages.UpcomingMovies />} />

            {/* Seriados */}
            <Route path="tv" element={<Pages.Tv />} />
            <Route path="tv/:id" element={<Pages.TvDetails />} />
            <Route path="tv/top-rated" element={<Pages.TopRatedTv />} />
            <Route path="tv/popular" element={<Pages.PopularTv />} />
            <Route path="tv/on-the-air" element={<Pages.OnTheAirTv />} />

            <Route path="*" element={<Pages.NotFound />} />
        </Routes>
    )
}
