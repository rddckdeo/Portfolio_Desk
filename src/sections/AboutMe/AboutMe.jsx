// sections/AboutMe/AboutMe.jsx
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className='page'>
                <div className='page-header'>
                    <h1>ABOUT ME</h1>
                    <span>Chang Dae Kim Portfolio</span>
                    <span>rddckdeo@naver.com</span>
                </div>
                <hr/>
                <div className='page-container'>
                    <div className='picture-area'>
                        <img src="https://placehold.co/300x400" alt="placeholder" />
                        <div className='picture-area-2'>
                            <img src="https://placehold.co/200x200" alt="placeholder"/>
                            <img src="https://placehold.co/200x200" alt="placeholder"/>
                        </div>
                    </div>
                    <div className='introduce-area'>
                        {/* First Line */}
                        <div className='introduce-line'>
                            <div><h4>이름</h4><small>김창대</small></div>
                            <div><h4>생년월일</h4><small>98.07.28</small></div>
                            <div><h4>거주지</h4><small>경기도 안양시</small></div>
                        </div>
                        {/* First Line */}
                        <div className='introduce-line'>
                            <div><h4>연락처</h4><small>010-4611-6480</small></div>
                            <div><h4>이메일</h4><small>rddckdeo@naver.com</small></div>
                            <div><h4>학력</h4><small>대림대학교 메카트로닉스과</small></div>
                        </div>
                        <div className='introduce-line'>
                            <div><h4>Git hub</h4><small>https://www...</small></div>
                        </div>
                        <div className='introduce-line-content'>
                            <div>
                                <h4>Introduce</h4>
                                <small>방문해주셔서 감사드립니다.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}