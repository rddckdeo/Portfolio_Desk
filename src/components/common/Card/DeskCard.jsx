// components/common/DeskCard/DeskCard.jsx
import './DeskCard.css'

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
            <p className='text-label'>About Me</p>

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
            <p className='text-label'>Project</p>
        </div>
    )
}

export function CareerCard(){
    return(
        <div className='desk-card desk-card--rotated career-card'>
            <p className='text-label'>Carrer</p>
        </div>
    )
}

export function ExperienceCard(){
    return(
        <div className='desk-card experience-card'>
            <p className='text-label'>Experience</p>
        </div>
    )
}