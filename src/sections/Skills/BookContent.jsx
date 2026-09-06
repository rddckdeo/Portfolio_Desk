import './BookContent.css'

function SkillLeftPage({ title, verticalLabel, description, categories, accentColor }) {
    return (
        <div className='skill-left-page'>
            <div className='skill-left-header'>
                <p className='skill-left-title'>{title}</p>
                <p className='skill-vertical-label'>{verticalLabel}</p>
            </div>
            <p className='skill-left-desc'>{description}</p>
            <div className='skill-left-list'>
                {categories.map((cat, i) => (
                    <div className='skill-left-row' key={i}>
                        <span className='skill-left-number' style={{ color: accentColor }}>
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className='skill-left-cat-title'>{cat.title}</span>
                        <div className='skill-left-tags'>
                            {cat.tags.map((tag, j) => (
                                <span className='skill-tag' style={{ backgroundColor: accentColor }} key={j}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function SkillRightPage({ title, color, sections }) {
    return (
        <div className='skill-right-page' style={{ backgroundColor: color }}>
            <p className='skill-right-title'>{title}</p>
            {sections.map((sec, i) => (
                <div className='skill-right-section' key={i}>
                    <p className='skill-right-section-title'>{sec.title}</p>
                    <ul className='skill-right-bullets'>
                        {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    )
}

// ===== Book Cover / TableOfContents / Agenda (기존 그대로) =====

export function BookCover(){
    return(
        <div className='cover-container'>
            <div className='cover-ribon'></div>
            <div className='cover-container-inner'>
                <div className='cover-content'>
                    <h1>SKILLS</h1>
                    <h2>C H A P T E R  T W O</h2>
                </div>
            </div>
        </div>
    )
}
export function TableOfContents(){
    const stacks = [
        { 
            label: "Backend", 
            color: "#1A2BA8", 
            items: ["Java", "Spring", "JPA", "MyBatis", "MySQL", "Oracle"] 
        },
        { 
            label: "Frontend", 
            color: "#EC4741", 
            items: ["HTML", "CSS", "JavaScript", "JSP", "React"] 
        },
        { 
            label: "Infra", 
            color: "#2E7D32", 
            items: ["Linux", "AWS", "Vercel", "GitHub"] 
        },
    ]

    return(
        <div className='toc-container'>
            <p className='toc-title'>Skills</p>
            <p className='toc-quote'>
                "개발에서 중요한 것은 기술을 사용하는 것보다<br/>
                왜 그 기술을 사용해야하는지 이해하는 것을<br/>
                더 중요하다고 생각합니다."
            </p>
            <div className='toc-stack-box'>
                {stacks.map((stack, i) => (
                    <div className='toc-stack-row' key={i}>
                        <p className='toc-stack-label'>{stack.label}</p>
                        <div className='toc-stack-tags'>
                            {stack.items.map((item, j) => (
                                <span key={j} style={{ backgroundColor: stack.color }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Agenda() {
    const agendaList = [
        { number: "01", title: "Backend", tags: "JAVA, SPRING BOOT", color: "#1A2BA8" },
        { number: "02", title: "Frontend", tags: "HTML, CSS, JS, REACT", color: "#EC4741" },
        { number: "03", title: "Infra", tags: "Linux, Git, AWS", color: "#2E7D32" }
    ]

    return(
        <div className='agenda-container'>
            <p className='agenda-container-title'>Agenda</p>
            {agendaList.map((item, index) => (
                <div className='agenda-row' key={index}>
                    <p className='agenda-number' style={{ color: item.color }}>{item.number}</p>
                    <p className='agenda-title'>{item.title}</p>
                    <small className='agenda-tags'>{item.tags}</small>
                </div>
            ))}
        </div>
    )
}

// ===== Backend =====

export function Backend(){
    return (
        <SkillLeftPage
            title="Backend"
            verticalLabel="JAVA . SPRING"
            accentColor="#1A2BA8"
            description={"기능이 동작하는 것과, 안정적으로 동작하는 것은 다릅니다.\n예외 상황까지 고려해 안전하게 설계하고,\n같은 결과라도 더 견고한 코드를 작성하는 것을 목표로 합니다."}
            categories={[
                { title: "Language & Framework", tags: ["Java", "Spring"] },
                { title: "Use Library", tags: ["Lombok", "JWT"] },
                { title: "ORM & DataBase", tags: ["JPA", "MyBatis", "MySQL", "Oracle"] },
                { title: "Tools", tags: ["Gradle", "Maven", "DBeaver", "STS 3 / 4", "Postman"] },
            ]}
        />
    )
}

export function BackendContent(){
    return (
        <SkillRightPage
            title="Language & Framework"
            color="#1A2BA8"
            sections={[
                {
                    title: "Java",
                    bullets: [
                        "게시판, 회원가입/로그인 등 CRUD 전반을 여러 프로젝트에서 구현",
                        "메서드 체이닝 및 Builder 패턴 사용 숙지",
                        "Java 단과 과정 강의 경험을 통한 Java 숙련도 향상 (자료형, 제어문, 클래스, 메서드, OOP 4대원칙, 예외처리, 제네릭, SQL 등)",
                        "MVC 및 REST API 설계 숙련",
                    ]
                },
                {
                    title: "Spring 생태계",
                    bullets: [
                        "Spring Framework의 Legacy 프로젝트 경험, Spring Boot 주력 사용",
                        "Spring Security와 JWT로 로그인 기능과 인증/인가 로직 구현 경험",
                        "Filter와 Interceptor의 차이를 인지하며, 개인 프로젝트에 적용하여 숙련도 향상",
                        "Spring DI / IoC를 이해하며, 이를 이해하기 위해 Spring을 사용하지 않은 순수 Java 코드로 로직을 구현하고 의존성의 중요성을 체득",
                    ]
                }
            ]}
        />
    )
}

// ===== Frontend =====

export function Frontend(){
    return (
        <SkillLeftPage
            title="Frontend"
            verticalLabel="Java Script . REACT"
            accentColor="#EC4741"
            description={"화면이 뜨는 것과, 어디서나 자연스럽게 보이는 것은 다릅니다.\n다양한 화면과 상황을 고려해 설계하고,\n작은 디테일까지 신경 써 자연스러운 경험을 만드는 것을 목표로 합니다."}
            categories={[
                { title: "Language", tags: ["HTML", "CSS", "JavaScript"] },
                { title: "Framework / Library", tags: ["JSP", "React"] },
                { title: "Tools", tags: ["VSCode", "Figma"] },
            ]}
        />
    )
}

export function FrontendContent(){
    return (
        <SkillRightPage
            title="Language & Framework"
            color="#EC4741"
            sections={[
                {
                    title: "React",
                    bullets: [
                        "useState, Hook을 활용한 상태 관리",
                        "Props를 통한 컴포넌트 간 데이터 전달",
                        "기능 단위로 컴포넌트를 분리해 재사용성을 높이는 설계 목표",
                        "조건부 렌더링, 배열 map을 활용한 동적 UI 구현",
                    ]
                },
                {
                    title: "렌더링 방식",
                    bullets: [
                        "SSR과 SPA 실무/프로젝트 경험",
                    ]
                },
                {
                    title: "HTML, CSS, Java Script",
                    bullets: [
                        "Flexbox를 활용한 레이아웃 정렬",
                        "각종 이벤트 처리(클릭, 폼 제출 등)를 통한 사용자 인터랙션 구현",
                        "Form 입력 값 검증(Validation) 처리 및 비동기 데이터 처리",
                        "API 응답 데이터를 기반으로 동적으로 화면에 처리",
                    ]
                }
            ]}
        />
    )
}

// ===== Infra =====

export function Infra(){
    return (
        <SkillLeftPage
            title="Infra"
            verticalLabel="Linux . AWS . Git Hub"
            accentColor="#2E7D32"
            description={"개발한 코드가 실제로 사용자에게 닿기까지의 과정도\n개발의 일부라고 생각합니다.\n직접 서버에 올려보고 배포해보며, 그 과정을 하나씩\n익혀가는 것이 목표입니다."}
            categories={[
                { title: "OS", tags: ["Linux"] },
                { title: "Cloud", tags: ["AWS EC2", "Vercel"] },
                { title: "Version Control", tags: ["GitHub"] },
            ]}
        />
    )
}

export function InfraContent(){
    return (
        <SkillRightPage
            title="Infra Overview"
            color="#2E7D32"
            sections={[
                {
                    title: "Linux",
                    bullets: [
                        "기본 명령어를 활용한 서버 환경 조작 경험",
                    ]
                },
                {
                    title: "Cloud",
                    bullets: [
                        "AWS EC2 인스턴스 생성 및 SSH를 통한 배포, 구동 확인 경험",
                        "Vercel을 활용한 React 프로젝트 배포 경험",
                    ]
                },
                {
                    title: "Git Hub",
                    bullets: [
                        "Jira 기반 티켓 단위로 브랜치 생성 및 작업, PR/Merge 요청 경험",
                        "Git 병합(merge) 충돌 발생 시 직접 해결한 경험",
                        "커밋 메시지 컨벤션(feat, fix 등) 준수 노력",
                        "main / dev / hotfix 등 브랜치 전략을 적용하며 숙련도를 높여가는 중",
                    ]
                }
            ]}
        />
    )
}