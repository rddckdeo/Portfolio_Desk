import { useEffect, useState } from 'react'
import './ProjectModal.css'
import Left from '../../../assets/icons/left.png'
import Right from '../../../assets/icons/right.png'
import Close from '../../../assets/icons/close.png'
import { ProjectComponentsCenter, ProjectComponentsLeft, ProjectComponentsRight } from '../../../sections/Projects/ProjectComponents'
import { projectDetails } from '../../../sections/Projects/projectDetails'

export default function ProjectModal({ selectedProject, onClose }) {

    // modal 확장 여부
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    /* selectedProject
        - Haru-SemiProject
        - CoCo-FinalProject
        - TravelPlan
        - Levup
        - Portfolio
    */
    const transferPorject = () => {
        if (selectedProject === "Haru-SemiProject") {
            return projectDetails[0]
        } else if (selectedProject === "CoCo-FinalProject") {
            return projectDetails[1]
        } else if (selectedProject === "TravelPlan") {
            return projectDetails[2]
        } else if (selectedProject === "Levup") {
            return projectDetails[3]
        } else if (selectedProject === "Portfolio") {
            return projectDetails[4]
        }
    }

    return (
        <div className='modal-overlay'>
            <img className='modal-icons' src={Left} alt='' />
            <div className='modal-close' onClick={onClose}>
                <img className='modal-closeBtn' src={Close} alt='' />
            </div>
            <div className='modal-container'>
                <div className={`modal-box-left ${isExpanded ? 'modal-box-expanded-left' : ''}`}>
                    <ProjectComponentsLeft projectDetails = {transferPorject()}/>
                </div>
                <div className='modal-box-center'
                    onClick={(e) => e.stopPropagation()}>
                    <ProjectComponentsCenter projectDetails = {transferPorject()}/>
                </div>
                <div className={`modal-box-right ${isExpanded ? 'modal-box-expanded-right' : ''}`}>
                    <ProjectComponentsRight projectDetails = {transferPorject()}/>
                </div>
            </div>
            <img className='modal-icons' src={Right} alt='' />
        </div>
    )
}