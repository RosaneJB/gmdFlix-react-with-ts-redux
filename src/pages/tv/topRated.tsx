import { useState, useEffect } from "react"
import { getTvTopRated } from "../../services"
import { TopRatedResponseType } from "../../ts/tv"
import { CardTvResult } from "./components/card"

export const TopRatedTv = () => {
    const [topRatedTv, setTopRatedTv] = useState<TopRatedResponseType>()
    
    useEffect(() => {
        const fillTopRated = async () => {
            const response = await getTvTopRated()
            setTopRatedTv(response)
        }
        fillTopRated()
    }, [])

    return (
        <>
            <h1 className="text-center">Lista de Séries (Mais bem Avaliadas)</h1>
            <div className="row">
            {topRatedTv && topRatedTv.results?.map((tv) => {
                return <CardTvResult tv={tv} />
            })}
            </div>
        </>
    )
}
