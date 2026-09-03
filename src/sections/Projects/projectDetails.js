// project 데이터 모음
import haru1 from '../../assets/images/projects/haru/haru1.png'
import haru2 from '../../assets/images/projects/haru/haru2.png'
import haru3 from '../../assets/images/projects/haru/haru3.png'
import haru4 from '../../assets/images/projects/haru/haru4.png'
import haru5 from '../../assets/images/projects/haru/haru5.png'

import CoCo1 from '../../assets/images/projects/CoCo/CoCo1.png'
import CoCo2 from '../../assets/images/projects/CoCo/CoCo2.png'
import CoCo3 from '../../assets/images/projects/CoCo/CoCo3.png'
import CoCo4 from '../../assets/images/projects/CoCo/CoCo4.png'
import CoCo5 from '../../assets/images/projects/CoCo/CoCo5.png'
import CoCo6 from '../../assets/images/projects/CoCo/CoCo6.png'

import levup1 from '../../assets/images/projects/Levup/levup1.png'
import levup2 from '../../assets/images/projects/Levup/levup2.png'
import levup3 from '../../assets/images/projects/Levup/levup3.png'
import levup4 from '../../assets/images/projects/Levup/levup4.png'
import levup5 from '../../assets/images/projects/Levup/levup5.png'

import DeskPortfolio1 from '../../assets/images/projects/Portfolio/deskPortfolio1.png'

export const projectDetails = [
    { // Haru
        title : "Hotel Haru",
        subTitle: "가상의 호텔을 소개하는 예약 플랫폼",
        content: "초특가 여기어때 프로젝트는 가상의 호텔 Haru(하루)를 홍보하며 예약 및 리뷰, 게시판 등의 서비스를 이용할 수 있는 호텔 예약 웹 사이트입니다.그린아트컴퓨터학원 Java 기반 풀스택 (스프링, Vue) 웹 개발자 양성과정의 세미 프로젝트로 진행하였으며,웹 개발을 위한 첫 협업을 한 프로젝트입니다.",
        periodAndTeam: "2023.11 - 2023.12 (1개월) . 5명",
        github: "https://github.com/rddckdeo/SemiProject",
        picture: [ haru1, haru2, haru3, haru4, haru5 ],
        skills: [
            "Java", "HTML", "CSS", "JavaScript", "Spring Framework", "JQuery", "Ajax", "BootStrap", "ORACLE", "MyBatis"
        ],
        tools: [
            "Eclipse IDE", "VSCode", "Apache Tomcat", "GitHub", "DBeaver"
        ],
        roles: [
            "게시판 기능 추가",
            "답변 및 댓글 기능 추가",
            "게시판 검색 기능 추가",
            "비밀글 기능 및 카테고리 설정",
            "발표 PPT 디자인 및 제작"
        ],
        color : "#D69240"
    },
    {// CoCo
        title : "Collaboration Code (CoCo)",
        subTitle: "개발자 협업을 위한 원스톱 프로젝트 관리 플랫폼",
        content: "프로젝트 CoCo는 개발자들이 모여 프로젝트를 기획하고 팀원을 모집한 후 단일 페이지에서 협업에 필요한 여러 Tool을 사용하여 개발을 하는 홈페이지입니다. 캘린더 및 스케줄을 공유하여 일정을 공유하고 현재 작업에 진척도 및 설명이 필요할 경우 그림판을 통해 그림을 그린 후 내용을 공유할 수 있으며 실시간 채팅을 통해 회의 및 내용 공유를 할 수 있습니다. 또한 개발자들이 정보를 공유하거나 커뮤니케이션을 할 수 있는 정보게시판 또는 자유게시판이 제공되어 원활한 소통을 가능하게 합니다.",
        periodAndTeam: "2024.01 - 2024.02 (1개월) . 3명",
        github: "https://github.com/rddckdeo/FinalProject",
        picture: [CoCo1, CoCo2, CoCo3, CoCo4, CoCo5, CoCo6],
        skills: [
            "Spring Framework", "Java", "JSP", "HTML", "CSS", "JavaScript", "MyBatis", "ORACLE", "Spring Security"
        ],
        tools: [
            "STS3 - Eclipse", "VSCode", "DBeaver","Apache Tomcat", "GitHub"
        ],
        roles: [
            "로그인, 회원가입 기능 전담 및 Spring Security를 사용한 비밀번호 암호화 복호화",
            "Hero (Main) 페이지 및 로그인 상태 관리",
            "Admin 페이지 전담 (통계 및 관리 - 방문자, 사용자, 프로젝트, 문의 등 )",
            "게시판 댓글 및 답변 기능 추가,",
            "My Page 기능 전담 (내 프로젝트 조회 및 관리 등 기능 구현)",
            "알림 기능 추가 - 프로젝트에 댓글 및 답변, 상태에 따른 실시간 알림 기능 추가"
        ],
        color : "#C7345B"
    },
    { // Levup
        title : "Levup",
        subTitle: "일상의 목표를 게임처럼 달성하는 성장 기록 플랫폼",
        content: "게임이 주는 성취감을 현실의 성장에서 느낄 수 있도록 만든 개인 프로젝트입니다.\n일상의 목표를 업적처럼 등록하고 달성률을 확인할 수 있으며, 5단계 검증 시스템으로 신뢰도를 관리합니다.",        periodAndTeam: "개인 프로젝트",
        github: "https://github.com/rddckdeo/levup_front",
        picture: [ levup1, levup2, levup3, levup4, levup5],
        skills: [
            "Java", "Spring Boot", "JWT", "JPA", "Spring Security", "React", "TypeScript", "MySQL", "Tailwind CSS"
        ],
        tools: [
            "STS4", "DBeaver", "VSCode", "Google Sheet(QA)", "Postman"
        ],
        roles: [
            "JWT 기반 회원가입/로그인 인증 시스템 구현",
            "업적 생성, 조회, 수정, 삭제(CRUD) 및 세부 항목 관리 기능 구현",
            "메서드 체이닝 및 빌더 패턴 등 새로운 코드 작성 방식을 학습하며 적용",
            "카테고리 및 태그 시스템 설계",
            "전 기능에 대한 QA 시트 작성 및 셀프 테스트를 통한 버그 발견·개선",
            "타입 안정성과 적용 경험을 고려한 TypeScript 코드 작성"
        ],
        color : "#1D4ED8"
    },
    { // Desk-Portfolio
        title : "Desk-Portfolio",
        subTitle: "책상 위 오브젝트로 표현한 개인 포트폴리오",
        content: "책상 위에 놓인 문서, 책, 사원증 등의 오브젝트로 자기소개를 표현한 인터랙티브 포트폴리오입니다.\nCSS 3D transform을 활용하여 다양한 3D 애니메이션 효과를 구현하였으며, 일반적인 자기 소개가 아닌 책상과 연관된 오브젝트로 저를 하나씩 표현하기 위한 포트폴리오입니다.",
        periodAndTeam: "개인 프로젝트",
        github: "https://github.com/rddckdeo/Portfolio_Desk",
        picture: [ DeskPortfolio1 ],
        skills: [
            "React", "JavaScript", "CSS"
        ],
        tools: [
            "GitHub", "VSCode", "Figma", "Vercel"
        ],
        roles: [
            "Figma를 사용한 전체 UI/UX 기획 및 디자인",
            "CSS 3D transform을 활용한 책 페이지 넘김 애니메이션 구현",
            "반응형 레이아웃 설계 (Flexbox, clamp, 미디어 쿼리)",
            "Vervel을 통한 배포 및 CI/CD 자동화"
        ],
        color : "#1E7F4F"
    },
]

/* 양식
 * {
        title : "",
        subTitle: "",
        content: "",
        periodAndTeam: "",
        github: "",
        picture: [
            ""
        ],
        skills: [

        ],
        Tools: [

        ],
        roles: [

        ]
    }, 
 */