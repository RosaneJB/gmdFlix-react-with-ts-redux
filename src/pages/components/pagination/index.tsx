export const Pagination = ({actualPage, totalPages, setActualPage}: {actualPage: number, totalPages: number, setActualPage: (value: React.SetStateAction<number>) => void}) => {
    
    const handlePrev = (pages = 1) => {
        if (actualPage > pages) {
            setActualPage(actualPage - pages)            
        } 
     }
     const handleNext = (pages = 1) => {
         if (totalPages > (actualPage + pages)) {
            setActualPage(actualPage + pages)             
         }
      }
    return (
        <nav aria-label="navigation d-flex">
                <ul className="pagination justify-content-center">
                    {/* Botão de Página Anterior */}
                    <li className={`page-item`}>
                        <button 
                            onClick={() => handlePrev()}
                            className={`btn page-link ${actualPage === 1 ? 'disabled' : ''}`} 
                            
                            aria-disabled={actualPage === 1}
                        >
                            Anterior
                        </button>
                    </li>

                    {/* Páginas extras antes da página atual */}
                    {actualPage > 4 && <li onClick={() => handlePrev(4)} className={`page-item`}>
                            <button className="page-link">
                                {actualPage - 4}
                            </button>
                        </li>
                    }
                    {actualPage > 3 && <li onClick={() => handlePrev(3)} className={`page-item`}>
                            <button className="page-link">
                                {actualPage - 3}
                            </button>
                        </li>
                    }
                    {actualPage > 2 &&
                        <li onClick={() => handlePrev(2)} className={`page-item`}><button className="page-link">{actualPage - 2}</button></li>
                    }
                    {actualPage > 1 &&
                        <li onClick={() => handlePrev()} className={`page-item`}><button className="page-link">{actualPage - 1}</button></li>
                    }

                    {/* Página Atual */}
                    <li className={`page-item active`} aria-current="page">
                        <button className="page-link">
                            {actualPage}
                        </button>
                    </li>

                    {/* Páginas extras depois da página atual */}
                    {actualPage < totalPages &&
                        <li onClick={() => handleNext()} className={`page-item`}><button className="page-link">{actualPage + 1}</button></li>
                    }
                    {(actualPage + 1) < totalPages &&
                        <li onClick={() => handleNext(2)} className={`page-item`}><button className="page-link">{actualPage + 2}</button></li>
                    }
                    {(actualPage + 2) < totalPages &&
                        <li onClick={() => handleNext(3)} className={`page-item`}><button className="page-link">{actualPage + 3}</button></li>
                    }
                    {(actualPage + 4) < totalPages &&
                        <li onClick={() => handleNext(4)} className={`page-item`}><button className="page-link">{actualPage + 4}</button></li>
                    }
                    
                    {/* Botão de Próxima Página */}
                    <li className={`page-item`}>
                        <button 
                            onClick={() => handleNext()}  
                            className={`btn page-link ${actualPage === totalPages ? 'disabled' : ''}`} 
                            aria-disabled={actualPage === totalPages}
                        >
                            Próximo
                        </button></li>
                </ul>
            </nav>
    )
}