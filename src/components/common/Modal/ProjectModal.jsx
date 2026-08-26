import { useEffect, useState } from 'react'
import './ProjectModal.css'

export default function ProjectModal({onClose}){

    // modal 확장 여부
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(true)
        },100)
        return () => clearTimeout(timer)
    }, [])


    return(
        <div className='modal-overlay'>
            <div style={{cursor : 'pointer' ,position : 'absolute', top : 0, margin : '10px', left : '90%'}} onClick={onClose}>X</div>
            <div className='modal-container'>
                <div className={`modal-box-left ${isExpanded ? 'modal-box-expanded-left' : ''}`}>
                    left
                </div>
                <div className='modal-box-center'   
                    onClick={(e) => e.stopPropagation()}>
                    center
                </div>
                <div className={`modal-box-right ${isExpanded ? 'modal-box-expanded-right' : ''}`}>
                    right
                </div>
            </div>
        </div>
    )
}