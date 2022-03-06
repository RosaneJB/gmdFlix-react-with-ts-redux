import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { setOnTheAir } from "../../redux/reducers/tvReducer"
import { getTvOnTheAir } from "../../services/tmdb/tv"
import { OnTheAirResponseType } from "../../ts/tv"
import { Pagination } from "../components/pagination"
import { CardTvResult } from "./components/card"

export const OnTheAirTv = () => {
    const tvs = useAppSelector((state) => state.tvs)
    const dispatch = useAppDispatch()
    const [actualPage, setActualPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fillOnTheAir = async () => {
            const changeOnTheAir = (onTheAir: OnTheAirResponseType) => dispatch(setOnTheAir(onTheAir))
            const response = await getTvOnTheAir()
            changeOnTheAir(response)
            response.page && setActualPage(response.page)
            response.total_pages && setTotalPages(response.total_pages > 500 ? 500 : response.total_pages)
        }
            fillOnTheAir() 
    }, [dispatch, tvs.onTheAir.results.length])

    return (
        <>
            <h1 className="text-center">Lista de Séries (No Ar)</h1>
            <div className="row">
            {tvs.onTheAir && tvs.onTheAir.results?.map((tv, index) => {
                return <CardTvResult key={index} tv={tv} />
            })}
            </div>
            <Pagination actualPage={actualPage} setActualPage={setActualPage} totalPages={totalPages} />
        </>
    )
}
