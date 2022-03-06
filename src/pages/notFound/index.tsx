import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <h5>A página que você está tentando acessar não existe voltar para a <Link to="/">Home</Link></h5>
    )
}
