// sections/AboutMe/AboutMe.jsx
import { useState } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import ProjectModal from '../../components/common/Modal/ProjectModal';

export default function Project() {

    const [selectedProject, setSelectedProject] = useState(null);

    const projectIntro = [
        {color : "#D69240", title : "Haru : Semi-Project", subTitle : "가상의 호텔을 소개하는 예약 플랫폼", team : "5인(백엔드 3명, 프론트 2명)", Skills : "JAVA, JSP, HTML, CSS, JS, ORACLE"},
        {color : "#0A0E3F", title : "CoCo : Final-Project", subTitle : "개발자 협업을 위한 원스톱 프로젝트 관리 플랫폼", team : "3인(Full 3명)", Skills : "JAVA, Spring, JSP, MyBatis, HTML, CSS, JS, ORACLE"},
        {color : "#1D4ED8", title : "TravelPlan", subTitle : "떠날 계획을 세우고, 추억을 기록하는 여행 플래너", team : "개인 프로젝트", Skills : "MySQL"},
        {color : "#C7345B", title : "Levup", subTitle : "일상의 목표를 게임처럼 달성하는 성장 기록 플랫폼", team : "개인 프로젝트", Skills : "React, JAVA, Spring boot, TypeScript, JPA, MySQL, MySQL, tailwind CSS"},
        {color : "#1E7F4F", title : "Desk-Portfolio", subTitle : "책상 위 오브젝트로 표현한 포트폴리오", team : "개인 프로젝트", Skills : "React, JS, Vercel, Figma"}
    ]

    return (
        <section className="Project">
            <ProjectCard 
                projectIntro = {projectIntro[0]}
                onClick={() => setSelectedProject('Haru-SemiProject')}
            />
            <ProjectCard 
                projectIntro = {projectIntro[1]}
                onClick={() => setSelectedProject('CoCo-FinalProject')}
            />
            <ProjectCard 
                projectIntro = {projectIntro[2]}
                onClick={() => setSelectedProject('TravelPlan')}
            />
            <ProjectCard 
                projectIntro = {projectIntro[3]}
                onClick={() => setSelectedProject('Levup')}
            />
            <ProjectCard 
                projectIntro = {projectIntro[4]}
                onClick={() => setSelectedProject('Portfolio')}
            />
            {selectedProject && (<ProjectModal selectedProject = {selectedProject} onClose={() => setSelectedProject(null)} />)}
        </section>
    )
}