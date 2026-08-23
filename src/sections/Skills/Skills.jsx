// sections/Skills/Skills.jsx
import { useState } from 'react'
import './Skills.css'
import { TableOfContents, Agenda, Backend, Frontend, Database, Infra, BackendContent, FrontendContent, DatabaseContent, InfraContent, BookCover } from './BookContent'

export default function Skills() {

    const totalPages = 6;
    const [currentPage , setCurrentPage] = useState(0);
    const [displayPage, setDisplayPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const isOpened = currentPage > 0;

    const pages = [
        { front: <BookCover />,         back: <TableOfContents /> }, // index 0
        { front: <Agenda />,            back: <Backend /> },         // index 1
        { front: <BackendContent />,    back: <Frontend /> },        // index 2
        { front: <FrontendContent />,   back: <Database /> },        // index 3
        { front: <DatabaseContent />,   back: <Infra /> },           // index 4
        { front: <InfraContent />,      back: <Infra /> },           // index 5
    ]

    const nextPage = () => {
        if(isAnimating || currentPage >= totalPages - 1) return
        setIsAnimating(true)
        setCurrentPage(currentPage + 1)
        setTimeout(() => {
            setDisplayPage(currentPage + 1) 
            setIsAnimating(false)
        }, 250)
    }
    const prevPage = () => {
        if (isAnimating || currentPage <= 0) return
        setIsAnimating(true)
        const prev = currentPage - 1
        setCurrentPage(prev)
        setTimeout(() => {
            setDisplayPage(prev)
            setIsAnimating(false)
        }, 250)
    }

    const getZIndex = (index) => {
        if(index < displayPage){
            return totalPages + index + 1
        }else{
            return totalPages - index
        }
    }

    return (
        <section className="Skills">
            <div className={`book ${isOpened ? 'book-open' : ''}`}>  
                {[0,1,2,3,4,5].map((index) => (
                    <div key={index} style={{zIndex: getZIndex(index)}}
                        className={`bookPage ${index < currentPage ? 'flipped' : ''}`}>  

                        <div className="page-front">
                            {pages[index].front}
                        </div>
                        <div className="page-back">
                            {pages[index].back}
                        </div>
                    </div>
                ))}

            </div>
                <div>
                    <button onClick={prevPage}>이전</button>
                    <span>{currentPage} / {totalPages - 1}</span>
                    <button onClick={nextPage}>다음</button>
                </div>
        </section>
    )
}