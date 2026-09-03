// components/common/DeskCard/DeskCard.jsx
import './DeskCard.css'

import AboutImg from '../../../assets/images/hero/deskPortfolio1-1.png'
import ProjectImg from '../../../assets/images/hero/deskPortfolio3-1.png'
import CareerImg from '../../../assets/images/hero/deskPortfolio4-1.png'
import ExperienceImg from '../../../assets/images/hero/deskPortfolio5-1.png'

export function DeskCard({ label, style, className = '' }) {
    return (
        <div className={`desk-card ${className}`} style={style}>
            {label}
        </div>
    )
}

export function AboutCard(){
    return(
        <div className='desk-card about-card'>
            <img src={AboutImg} alt='ss' />
        </div>
    )
}

export function SkillsCard(){
    return(
        <div className='desk-card skills-card'>
            <div className='skills-left'>
                <div className='skills-inner'>
                    <p className='text-label'>Skills</p>
                </div>
            </div>
            <div className='skills-right'>
                <div className='skills-inner'>
                    <p className='text-label'>right</p>
                </div>
            </div>
        </div>
    )
}

export function ProjectCard(){
    return(
        <div className='desk-card project-card'>
            <img src={ProjectImg} alt="" />
        </div>
    )
}

export function CareerCard(){
    return(
        <div className='desk-card desk-card--rotated career-card'>
            <img src={CareerImg}/>
        </div>
    )
}

export function ExperienceCard(){
    return(
        <div className='desk-card experience-card'>
            <img src={ExperienceImg}/>
        </div>
    )
}