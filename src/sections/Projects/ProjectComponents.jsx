import './ProjectComponents.css'

import Close from '../../assets/icons/close.png'
import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

export function ProjectComponentsLeft({ projectDetails }) {
    return (
        <>
            <div className='project-modal-face project-modal-front'>
                <div className='project-modal-front-card'>
                    <div className='project-modal-front-card-header' style={{ backgroundColor: projectDetails.color }}>
                        <p>{projectDetails.title}</p>
                    </div>
                </div>
            </div>
            <div className='project-modal-face project-modal-back'>
                <p className='text-heading' style={{ fontSize: '26px' }}>Description</p>
                <div className='project-modal-left-content'>
                    <small className='project-modal-label project-modal-label-subTitle'>{projectDetails.subTitle}</small>
                    <p className='project-modal-body'>{projectDetails.content}</p>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>기간.인원</p>
                        <small className='project-modal-info-value'>{projectDetails.periodAndTeam}</small>
                    </div>
                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>Git Hub Link</p>
                        <a href={projectDetails.github} target="_blank" rel="noopener noreferrer" className='project-modal-link'>
                            <small className='project-modal-info-value'>{projectDetails.github}</small>
                        </a>
                    </div>
                    <small className='project-modal-footnote'>프로젝트의 더 자세한 내용은 Link를 눌러주세요!</small>
                </div>
            </div>
        </>
    )
}

export function ProjectComponentsCenter({ projectDetails }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = projectDetails.picture.slice(1);
    const totalImages = images.length;


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalImages)
        }, 4000)
        return () => clearInterval(interval)
    }, [totalImages])
    return (
        <div className='project-modal-center-content' style={{ background: `linear-gradient(0deg, ${projectDetails.color}, #fff)` }}>
            <p className='project-modal-center-title'>{projectDetails.title}</p>
            <div className='project-modal-center-image'><img src={projectDetails.picture[0]} alt='' /></div>
            <div className='project-modal-center-image'><img key={currentIndex} src={images[currentIndex]} className='fade-image' alt='' /></div>
        </div>
    )
}

export function ProjectComponentsRight({ projectDetails, onClose }) {
    return (
        <>
            <div className='project-modal-face project-modal-front'></div>
            <div className='project-modal-face project-modal-back'>
                <div className='modal-close' onClick={onClose}>
                    <img className='modal-closeBtn' src={Close} alt='' />
                </div>
                <p className='text-heading' style={{ fontSize: '26px' }}>Tech Skills</p>

                <div className='project-modal-right-content'>
                    <small className='project-modal-label'>Skills</small>
                    <div className='project-modal-tag-group'>
                        <div className='project-modal-tag-group'>
                            {projectDetails.skills.map((skill, index) => (
                                <span key={index} className='project-modal-tag'
                                    style={{ backgroundColor: projectDetails.color }}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <small className='project-modal-label'>Tools</small>
                    <div className='project-modal-tag-group'>
                        <div className='project-modal-tag-group'>
                            {projectDetails.tools.map((tool, index) => (
                                <span key={index} className='project-modal-tag'
                                    style={{ backgroundColor: projectDetails.color }}>{tool}</span>
                            ))}
                        </div>
                    </div>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-role'>
                        <p className='text-heading project-modal-role-title'>Role</p>
                        <div className='project-modal-tag-group-role'>
                            {projectDetails.roles.map((role, index) => (
                                <span key={index} className='project-modal-tag-role'>{role}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}