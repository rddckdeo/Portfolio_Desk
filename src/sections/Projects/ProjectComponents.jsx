import './ProjectComponents.css'

export function ProjectComponentsLeft({projectDetails}) {
    return (
        <>
            <div className='project-modal-face project-modal-front'></div>
            <div className='project-modal-face project-modal-back'>
                <p className='text-heading' style={{ fontSize: '26px' }}>Description</p>
                <div className='project-modal-left-content'>
                    <small className='project-modal-label'>설명</small>
                    <p className='project-modal-body'>본문</p>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>기간.인원</p>
                        <small className='project-modal-info-value'>기간 및 인원</small>
                    </div>
                    <div className='project-modal-info-row'>
                        <p className='project-modal-info-title'>Git Hub Link</p>
                        <small className='project-modal-info-value project-modal-link'>누르면 링크 이동</small>
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
            <p className='project-modal-center-title'>Project Name</p>
            <div className='project-modal-center-image'>사진</div>
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
                        여기에 아이콘 들어갈 예정
                        {/* <div className='project-modal-tag-group'>
                            {skills.map((skill, index) => (
                                <span key={index} className='project-modal-tag'>{skill}</span>
                            ))}
                        </div> */}
                    </div>

                    <small className='project-modal-label'>Tools</small>
                    <div className='project-modal-tag-group'>
                        여기에 아이콘 들어갈 예정
                    </div>

                    <hr className='project-modal-divider' />

                    <div className='project-modal-role'>
                        <p className='text-heading' style={{ fontSize: '20px' }}>Role</p>
                    </div>
                </div>
            </div>
        </>
    )
}