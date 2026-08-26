import { useState } from 'react'
import './Career.css'
import CareerCard from './CareerCard';
import koreaitLogo from '../../assets/images/logos/koreait.jfif'
import elonLogo from '../../assets/images/logos/elon.png'
import aproLogo from '../../assets/images/logos/apro.png'
import hanyungLogo from '../../assets/images/logos/hyst.png'
import greenLogo from '../../assets/images/logos/green.png'

export default function Career() {
    
    const [career, setCareer] = useState("koreait");

    const company = [
        {name : "코리아IT아카데미", address : "인천 부평점", department : "프로그래밍학과", period : "2026.01 - 2026.09 ( 9개월 )", work : "Java, Python 과정 단과 교육", img : koreaitLogo},
        {name : "이엘온소프트", address : "서울 구로디지털단지역", department : "금융기술지원팀", period : "2025.01 - 2025.06 ( 6개월 )", work : "AML 시스템 및 책무구조도 \n시스템 유지보수", img : elonLogo},
        {name : "에이프로솔루션", address : "경기 인덕원역", department : "연구개발팀", period : "2024.07 - 2025.01 ( 7개월 )", work : "WMS SI 프로젝트 투입준비, \n사내 웹사이트 구축", img : aproLogo},
        {name : "한영솔루텍", address : "서울 독산역", department : "솔루션지원부", period : "2022.01 - 2023.08 ( 1년 8개월 )", work : "SOLIDWORKD(3D CAD) 기술지원", img : hanyungLogo},
        {name : "그린컴퓨터아트학원", address : "경기 안양역", department : "응용SW엔지니어링", period : "2023.09 - 2024.02 ( 6개월 )", work : "(스마트웹&콘텐츠개발) \nJAVA 기반 풀스택(스프링,Vue) \n웹 개발자 실무 양성과정", img : greenLogo}
    ]
    const toggleCompany = () => {
        if(career === "koreait"){
            return company[0];
        }else if(career === "elon"){
            return company[1];
        }else if(career === "apro"){
            return company[2];
        }else if(career === "hanyung"){
            return company[3];
        }else if(career === "green"){
            return company[4];
        }

    }

    return (
        <section className="Career">
            <div className='Career-Container' style={{minWidth : '400px'}}>
                <p className='text-hero career-title'>CAREER</p>
                <div className={`${career === 'koreait' ? 'select-career' : 'non-select-career'}`} onClick={() => setCareer("koreait")}>
                    <p className='text-subheading' style={{fontSize : '20px'}}>코리아IT아카데미</p>
                    <p className='text-label' style={{color : 'var(--color-label)'}}>2026.01 ~ 2026.09</p>
                </div>
                <div className={`${career === 'elon' ? 'select-career' : 'non-select-career'}`} onClick={() => setCareer("elon")}>
                    <p className='text-subheading' style={{fontSize : '20px'}}>이엘온소프트</p>
                    <p className='text-label' style={{color : 'var(--color-label)'}}>2025.01 ~ 2025.06</p>
                </div>
                <div className={`${career === 'apro' ? 'select-career' : 'non-select-career'}`} onClick={() => setCareer("apro")}>
                    <p className='text-subheading' style={{fontSize : '20px'}}>에이프로솔루션</p>
                    <p className='text-label' style={{color : 'var(--color-label)'}}>2024.07 ~ 2025.01</p>
                </div>
                <div className={`${career === 'hanyung' ? 'select-career' : 'non-select-career'}`} onClick={() => setCareer("hanyung")}>
                    <p className='text-subheading' style={{fontSize : '20px'}}>한영솔루텍</p>
                    <p className='text-label' style={{color : 'var(--color-label)'}}>2022.01 ~ 2026.08</p>
                </div>
                <p className='text-hero career-title'>ADUCATION</p>
                <div className={`${career === 'green' ? 'select-career' : 'non-select-career'}`} onClick={() => setCareer("green")}>
                    <p className='text-subheading' style={{fontSize : '20px'}}>그린아트컴퓨터학원</p>
                    <p className='text-label' style={{color : 'var(--color-label)'}}>2022.01 ~ 2026.08</p>
                </div>
            </div>
            <div className='Career-Container' style={{flex : 1}}>
                <CareerCard company = {toggleCompany()} />
            </div>
        </section>
    )
}