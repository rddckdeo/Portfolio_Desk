// sections/Hero/Hero.jsx
import './Hero.css'
import {DeskCard, AboutCard, SkillsCard, ProjectCard, CareerCard, ExperienceCard} from '../../components/common/Card/DeskCard'

export default function Hero() {
return (
        <section className="hero">
            <div className="hero-cards">
            {/* 카드 5개는 다음 단계에서 채울 예정 */}
                <AboutCard/>
                <SkillsCard/>
                <ProjectCard/>
                <CareerCard/>
                <ExperienceCard/>
            </div>

            {/* 하단 타이틀 영역 */}
            <div className="hero-title">
                <h1>Chang Dae Kim Portfolio</h1>
                <p className="hero-subtitle">Welcome to my Desk</p>
                <p className="hero-subtitle-kr">제 책상 위, 저를 소개하겠습니다.</p>
            </div>

            {/* 스크롤 유도 화살표 */}
            <div className="hero-scroll-indicator">▽</div>
        </section>
    )
}