import { useEffect, useState } from 'react'
import './ProjectModal.css'
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
        }else if (selectedProject === "Levup") {
            return projectDetails[2]
        } else if (selectedProject === "Portfolio") {
            return projectDetails[3]
        }
    }

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className={`modal-box-left ${isExpanded ? 'modal-box-expanded-left' : ''}`}>
                    <ProjectComponentsLeft projectDetails = {transferPorject()}/>
                </div>
                <div className='modal-box-center'
                    onClick={(e) => e.stopPropagation()}>
                    <ProjectComponentsCenter projectDetails = {transferPorject()}/>
                </div>
                <div className={`modal-box-right ${isExpanded ? 'modal-box-expanded-right' : ''}`}>
                    <ProjectComponentsRight projectDetails = {transferPorject()} onClose = {onClose}/>
                </div>
            </div>
        </div>
    )
}