// sections/Hero/Hero.jsx
import './Hero.css'

export default function Hero() {
return (
        <section className="hero">
            {/* 상단 인트로 텍스트: "서장 - 이야기를 시작합니다" */}
            <p className="hero-intro">서장 - 이야기를 시작합니다.</p>

            {/* 카드 그룹: ABOUT ME / SKILLS / PROJECT / CAREER / EXPERIENCE */}
            <div className="hero-cards">
            {/* 카드 5개는 다음 단계에서 채울 예정 */}
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