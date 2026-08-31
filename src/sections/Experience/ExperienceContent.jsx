import './ExperienceContent.css'

export default function ExperienceComponents({content}){
    return(
        <div className='experience-components-container'>
            <div className='experience-components-header'>
                <div className='experience-components-header-row1'>
                    <p className='text-subheading'>{content.title}</p>
                    <small className='text-label'>{content.subTitle}</small>
                </div>
                {content.image != null && <img src={content.image} alt="placeholder"/>}
            </div>
            <div className='experience-component-contents'>
                <div className='experience-component-contents-line1'>
                    <div className='experience-component-contents-line1-left'>
                        <p className='text-body'>상황</p>
                        <small className='text-label'>{content.situation}</small>
                    </div>
                    <div className='experience-component-contents-line1-right'>
                        <p className='text-body'>담당 역할</p>
                        {content.roles.map((role, index) => (
                            <li key={index} className='text-label'>{role}</li>
                        ))}
                    </div>
                </div>
                <div className='experience-component-contents-line2'>
                    <div className='experience-component-resultBox'>
                        <p className='text-body'>결과</p>
                        <small className='text-label'>{content.result}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}