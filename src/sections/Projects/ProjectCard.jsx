import './ProjectCard.css'

export default function ProjectCard({ projectIntro , onClick }) {

    return (
        <div className='project-card-container' onClick={onClick}>
            <div className='project-card-header' style={{ backgroundColor: projectIntro.color }}>
                {projectIntro.title}
            </div>
            <div className='project-card-content'>
                <small>{projectIntro.subTitle}</small>
                <div className='project-card-content-box'><p>Team</p><small>{projectIntro.team}</small></div>
                <div><p>Skills</p><small>{projectIntro.Skills}</small></div>
            </div>
        </div>
    )
}