// sections/AboutMe/AboutMe.jsx
import './Contact.css'
import {EmailIcon2} from '../../assets/icons/icons'

export default function Contact() {
    const postcard = {
        to : "To.제 포트폴리오에 와주신 분께",
        letter : "여기까지 천천히\n살펴봐 주셔서\n감사드립니다.",
        footer : "Thank you for reading-"
    }
    const contact = {
        email : "rddckdeo@naver.com",
        github : "https://github.com/rddckdeo",
        phone : "010-4611-6480",
    }
    const quickLinks = ["About Me", "Skills", "Project", "Career", "Experience"]

    return (
        <section className="Contact">
            <div className='contact-postcard'>
                <div className='contact-postcard-header'>
                    <div className='contact-postcard-header-stamp'>
                        <EmailIcon2 size={32} />
                    </div>
                </div>
                <div className='contact-postcard-content'>
                    <small className='text-label'>{postcard.to}</small>
                    <p className='text-body'>{postcard.letter}</p>
                </div>
                <div className='contact-postcard-footer'>
                    <p>{postcard.footer}</p>
                </div>
            </div>
            <div className='contact-card'>
                <div className='contact-card-sidebar'/>
                <div className='contact-card-container'>
                    <p className='contact-card-title'>CONTACT</p>
                    <hr className='contact-card-divider' />
                    <div className='contact-card-contents'>
                        <div className='contact-card-contents-left'>
                            <div className='contact-card-item'>
                                <p className='contact-card-label'>EMAIL</p>
                                <small>{contact.email}</small>
                            </div>
                            <div className='contact-card-item'>
                                <p className='contact-card-label'>GITHUB</p>
                                <small>{contact.github}</small>
                            </div>
                            <div className='contact-card-item'>
                                <p className='contact-card-label'>PHONE</p>
                                <small>{contact.phone}</small>
                            </div>
                        </div>
                        <div className='contact-card-contents-right'>
                            <p className='contact-card-label'>QUICK LINKS</p>
                            {quickLinks.map((link, index) => (
                                <small key={index} className='contact-card-link'>{link}</small>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}