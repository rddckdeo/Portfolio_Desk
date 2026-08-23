import './ProjectCard.css'

export default function ProjectCard({color, title}){
    return(
        <div className='project-card-container'>
            <div className='project-card-header' 
                style={{backgroundColor : color}}>{title}
            </div>
            <div className='project-card-content'>ss</div>
        </div>
    )
}