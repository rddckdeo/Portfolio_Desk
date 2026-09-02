import './ProjectComponents.css'

export function ProjectComponentsLeft({projectDetails}) {
    return (
        <>
            <div className='project-modal-face project-modal-front'></div>
            <div className='project-modal-face project-modal-back'>
                <p className='text-heading' style={{ fontSize: '26px' }}>Description</p>
                <div className='project-modal-left-content'>
                    <small className='project-modal-label'>{projectDetails.subTitle}</small>
                    <p className='project-modal-body'>{projectDetails.content}</p>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>기간.인원</p>
                        <small className='project-modal-info-value'>{projectDetails.periodAndTeam}</small>
                    </div>
                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>Git Hub Link</p>
                        <small className='project-modal-info-value project-modal-link'>{projectDetails.github}</small>
                    </div>

                    <small className='project-modal-footnote'>프로젝트의 더 자세한 내용은 Git Hub Link를 눌러주세요!</small>
                </div>
            </div>
        </>
    )
}

export function ProjectComponentsCenter({projectDetails}) {
    return (
        <div className='project-modal-center-content'>
            <p className='project-modal-center-title'>{projectDetails.title}</p>
            <div className='project-modal-center-image'><img src={projectDetails.picture[0]} width={250} alt=''/></div>
            <div className='project-modal-center-image'>사진</div>
        </div>
    )
}

export function ProjectComponentsRight({projectDetails}) {
    return (
        <>
            <div className='project-modal-face project-modal-front'></div>
            <div className='project-modal-face project-modal-back'>
                <p className='text-heading' style={{ fontSize: '26px' }}>Tech Skills</p>

                <div className='project-modal-right-content'>
                    <small className='project-modal-label'>Skills</small>
                    <div className='project-modal-tag-group'>
                        <div className='project-modal-tag-group'>
                            {projectDetails.skills.map((skill, index) => (
                                <span key={index} className='project-modal-tag'>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <small className='project-modal-label'>Tools</small>
                    <div className='project-modal-tag-group'>
                        <div className='project-modal-tag-group'>
                            {projectDetails.tools.map((tool, index) => (
                                <span key={index} className='project-modal-tag'>{tool}</span>
                            ))}
                        </div>
                    </div>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-role'>
                        <p className='text-heading' style={{ fontSize: '20px' }}>Role</p>
                        <div className='project-modal-tag-group'>
                            {projectDetails.roles.map((role, index) => (
                                <span key={index} className='project-modal-tag'>{role}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}