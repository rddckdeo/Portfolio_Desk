// sections/AboutMe/AboutMe.jsx
import './AboutMe.css'

import Img1 from '../../assets/images/pictures/image 20.png'
import Img2 from '../../assets/images/pictures/image 21.png'
import Img3 from '../../assets/images/pictures/image 22.png'

import {
    NameIcon,
    BirthIcon,
    AddressIcon,
    PhoneIcon,
    EmailIcon,
    EducationIcon,
    GithubIcon,
    IntroduceIcon
} from '../../assets/icons/icons'

export default function AboutMe() {

    const profile = {
        name: "김창대",
        birth: "98.07.28",
        address: "경기도 안양시 석수동",
        phone: "010-4611-6480",
        email: "rddckdeo@naver.com",
        education: "대림대학교\n메카트로닉스학과",
        github: "https://github.com/rddckdeo",
        introduce: "방문해주셔서 감사드립니다. \n다양한 현장에서 문제를 직접 해결하며 쌓은 실무 감각과,\n꾸준한 학습으로 다져온 개발 역량을 함께 갖춘 개발자 김창대입니다.\n 어떤 문제든 파고드는 태도로 접근하며, 꾸준히 배우고 성장하는 개발자가 되고자 합니다.",
    }

    return (
        <section className="about-me">
            <div className='page'>
                <div className='page-header'>
                    <h1>ABOUT ME</h1>
                    <span style={{ fontFamily: "var(--text-hero-font)", fontWeight: "var(--text-hero-weight)" }}>Chang Dae Kim Portfolio</span>
                    <span style={{ fontFamily: "var(--text-hero-font)", fontWeight: "var(--text-hero-weight)" }}>{profile.email}</span>
                </div>
                <hr />
                <div className='page-container'>
                    <div className='picture-area'>
                        <img src={Img3} alt="placeholder" style={{ width: "300px" }} />
                        <div className='picture-area-2'>
                            <img src={Img2} alt="placeholder" style={{ width: "200px" }} />
                            <img src={Img1} alt="placeholder" style={{ width: "200px" }} />
                        </div>
                    </div>
                    <div className='introduce-area'>
                        {/* First Line */}
                        <div className='introduce-line'>
                            <div><h4><NameIcon size={16} /> 이름</h4><small>{profile.name}</small></div>
                            <div><h4><BirthIcon size={16} /> 생년월일</h4><small>{profile.birth}</small></div>
                            <div><h4><AddressIcon size={16} /> 거주지</h4><small>{profile.address}</small></div>
                        </div>
                        {/* Second Line */}
                        <div className='introduce-line'>
                            <div><h4><PhoneIcon size={16} /> 연락처</h4><small>{profile.phone}</small></div>
                            <div><h4><EmailIcon size={16} /> 이메일</h4><small>{profile.email}</small></div>
                            <div><h4><EducationIcon size={16} /> 학력</h4><small>{profile.education}</small></div>
                        </div>
                        <div className='introduce-line' style={{ marginTop: "0px" }}>
                            <div style={{ marginBottom: "20px" }}><h4><GithubIcon size={16} /> Git hub</h4><small>{profile.github}</small></div>
                        </div>
                        <hr />
                        <div className='introduce-line-content'>
                            <div>
                                <h4><IntroduceIcon size={16} /> Introduce</h4>
                                <small className='text-label'>{profile.introduce}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}