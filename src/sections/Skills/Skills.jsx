// sections/Skills/Skills.jsx
import { useState } from 'react'
import './Skills.css'
import { TableOfContents, Agenda, Backend, Frontend, Infra, BackendContent, FrontendContent, InfraContent, BookCover } from './BookContent'
import { ChevronLeftIcon, ChevronRightIcon } from '../../assets/icons/icons'

export default function Skills() {

    const totalPages = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [displayPage, setDisplayPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const isOpened = currentPage > 0;

    const pages = [
        { front: <BookCover />,       back: <TableOfContents /> },
        { front: <Agenda />,          back: <Backend /> },
        { front: <BackendContent />,  back: <Frontend /> },
        { front: <FrontendContent />, back: <Infra /> },
        { front: <InfraContent />,    back: <Infra /> },
    ]

    const nextPage = () => {
        if (isAnimating || currentPage >= totalPages - 1) return
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
        if (index < displayPage) {
            return totalPages + index + 1
        } else {
            return totalPages - index
        }
    }

    return (
        <section className="Skills">
            <div className={`book ${isOpened ? 'book-open' : ''}`}>
                {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} style={{ zIndex: getZIndex(index) }}
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

            <button className='prevBtn' onClick={prevPage}>
                <ChevronLeftIcon size={22} />
            </button>
            <button className='nextBtn' onClick={nextPage}>
                <ChevronRightIcon size={22} />
            </button>
        </section>
    )
}