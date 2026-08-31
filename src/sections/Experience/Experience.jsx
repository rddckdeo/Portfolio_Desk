// sections/AboutMe/AboutMe.jsx
import { useState } from 'react'
import './Experience.css'
import ExperienceComponents from './ExperienceContent'

import SeminarImg from '../../assets/images/pictures/image 26.png'

const experience = [
    {title : "솔루션 지원 및 고객 대응", subTitle : "[기술 지원]", content : "3D CAD 솔루션 지원부 소속으로 제품 사용에 문제를 해결하고 품질 좋은 서비스를 위해 유.무선 및 방문 서비스"},
    {title : "금융 시스템 유지보수", subTitle : "[시스템 운영]", content : "자금 세탁 방지 시스템(AML)과 책무구조도 시스템의 유지보수와 기능 개선 경험 보유"},
    {title : "프로그래밍 강의", subTitle : "[강의]", content : "JAVA, Python 언어를 비전공자들이 사용할 수 있게 다양한 커리큘렴 제작 및 강의 경험 보유"},
    {title : "Offline Seminar 진행", subTitle : "[발표]", content : "차기 소프트웨어의 신규 기능을 소개하는 Offline Seminar 발표 경험 보유"}
]

const experienceContents = [
    {
        image : null, 
        title : "솔루션 지원 및 고객 대응", 
        subTitle : "3D CAD 솔루션 - 원격 및 방문 기술지원", 
        situation : "3D CAD 공식 리셀러 회사의 솔루션 지원부에서 설치, 유지보수, 기술지원, CAD 교육(기본, 고급), 기술 영상 제작까지 다양한 업무를 담당했습니다.", 
        roles : 
            ["제품 원격 및 방문 기술지원","SOLIDWORKS 기본 교육 및 고급 교육 담당", "문서 관리 및 기술 영상 제작·YouTube 게시"], 
        result : "서울, 경기, 전남, 경상도 등 전국 200 ~ 300여 개 업체를 직접 방문하며 다양한 현장의 문제를 해결했습니다. \n 반복된 고객 응대 경험은 자연스럽게 커뮤니케이션 역량으로 이어졌고, 이를 바탕으로 신뢰를 쌓은 고객사와 2천만원 이상 규모의 거래 성사에 기여하기도 했습니다."
    },
    {
        image : null, 
        title : "금융 시스템 유지보수", 
        subTitle : "AML (자금세탁방지 시스템) 및 책무구조도 시스템 개발 및 유지보수", 
        situation : "AML(자금세탁방지 시스템)과 책무구조도 시스템을 제공하는 금융 솔루션 회사에서 유지보수 및 운영 지원을 담당했습니다.\n고객사마다 인프라 환경이 달라, 각 환경에 맞춰 배포와 수정이 가능하도록 인수인계받는 과정부터 시작했습니다.", 
        roles : 
            ["고객사 방문 및 요구사항 반영","시스템 오류 분석 및 수정, 운영 지원 전담","GitLab, Kubernetes, Apache GUI, SVN 등 고객사별 인프라 환경 대응", "Slack을 통한 오류 원인 및 해결 방안 문서화 공유", "책무구조도 신규 개발 참여", "Kakao 알림톡 연동 담당"], 
        result : "서비스 내 특정 로직에서 발생하던 전역 오류를 직접 발견하고, 원인 분석부터 해결 방안까지 문서화해 팀에 공유했습니다.\n이 경험을 통해 문제를 끝까지 추적하는 태도와, 팀원과 지식을 공유하는 협업 방식의 중요성을 배웠습니다."
    },
    {
        image : null, 
        title : "프로그래밍 강의", 
        subTitle : "코리아IT아카데미 - JAVA/Python 전 과정 강의", 
        situation : "코리아IT아카데미 인천 지점에서 JAVA(1,2과정)와 Python(1,2과정)을 담당하는 파트강사로 근무하였습니다.\n각 과정별 교재 준비부터 강의까지 진행하며, 수강생의 이해도를 높이기 위해 꾸준히 방법을 고민하여 교육을 진행하였습니다.", 
        roles : 
            [  "JAVA - 자료형부터 OOP, 스레드, DB 활용까지 전 과정 강의","Python - 자료형부터 OOP, 크롤링, DB 활용까지 전 과정 강의"], 
        result : "비전공자도 이해할 수 있도록 눈높이에 맞춘 설명 방식을 고민하며, 복잡한 개념을 쉽게 전달하는 커뮤니케이션 역량을 키웠습니다.\n또한 가르치는 과정에서 개념을 더 명확히 정리하게 되며, 스스로의 이해도 함께 깊어지는 경험을 하였습니다."
    },
    {
        image : SeminarImg, 
        title : "Offline Seminar 진행", 
        subTitle : "3D CAD 솔루션 - 신제품 Seminar 발표회", 
        situation : "3D CAD 제품인 SOLIDWORKD의 새로운 버전 출시와 각 기능에 개선 및 추가 기능을 고객사 초빙하에 설명하는 자리를 가지게 되었으며, 해당 발표를 통해 제품의 인지도와 회사의 인지도를 함께 향상시키는 중요한 발표 자리입니다.", 
        roles : 
            ["Seminar의 첫 장을 여는 Intro 및 Agenda 영역 담당",
            "제품의 Feature 파트 기능 개선 사항 담당 발표"], 
        result : "발표를 위해 몇 달 가까이 발성 연습 및 프레젠테이션 연습을 하였으며, 매우 중요한 자리의 첫 장과 담당 기능을 발표하다보니 매우 큰 부담감을 느꼇습니다. 그러나 떨리는 만큼 노력을 확실하게 했기에 좋은 결과를 얻었으며, 세미나 발표 경험으로 인해 추후 많은 사람들 앞에서 떨리지 않게 커뮤니케이션을 할 수 있는 능력을 크게 향상하였습니다."
    }
]

export function ExperienceBox({experience , number, onSelect }){

    return(
        <div className='experience-box' onClick={() => onSelect(number)}>
            <div className='experience-box-title'>
                <p className='text-subheading' >{experience.title}</p>
                <small className='text-label'>{experience.content}</small>
            </div>
            <div className='experience-box-subTitle text-label'>{experience.subTitle}</div>
        </div>
    )
}

export default function Experience() {
    // select에 따라 Components에 보내주는 데이터 상태
    const [selectExperience, setSelectExperience] = useState(1);

    return (
        <section className="Experience">
            <div className='experience-container'>
                <p className='text-hero' style={{fontSize : '30px'}}>EXPERIENCE</p>
                <small className='text-label' style={{color : "var(--color-label)"}}>아래 카드를 누르시면 상세하게 볼 수 있습니다.</small>
                
                <ExperienceBox experience = {experience[0]} number = {1} onSelect={setSelectExperience}/>
                <ExperienceBox experience = {experience[1]} number = {2} onSelect={setSelectExperience}/>
                <ExperienceBox experience = {experience[2]} number = {3} onSelect={setSelectExperience}/>
                <ExperienceBox experience = {experience[3]} number = {4} onSelect={setSelectExperience}/>

            </div>
            <div className='experience-container experience-right-content'>
                <div className='experience-content-box'>
                    <ExperienceComponents content = {experienceContents[selectExperience - 1]}/>
                </div>
            </div>
        </section>
    )
}