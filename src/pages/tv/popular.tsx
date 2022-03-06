import { useState, useEffect } from "react"
import { getTvPopular } from "../../services"
import { PopularResponseType } from "../../ts/tv"
import { CardTvResult } from "./components/card"

export const PopularTv = () => {
    const [popularTv, setPopularTv] = useState<PopularResponseType>()
    
    useEffect(() => {
        const fillPopular = async () => {
            const response = await getTvPopular()
            setPopularTv(response)
        }
        fillPopular()
    }, [])

    return (
        <>
            <h1 className="text-center">Lista de Séries (Populares)</h1>
            <div className="row">
            {popularTv && popularTv.results?.map((tv) => {
                return <CardTvResult tv={tv} />
            })}
            </div>
        </>
    )
}
