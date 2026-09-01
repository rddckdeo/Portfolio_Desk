import './BookContent.css'

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
    return(
        <div className='toc-container'>
            <p className='toc-title'>Skills</p>
            <p className='toc-quote'>
                "개발에서 중요한 것은 기술을 사용하는 것보다<br/>
                왜 그 기술을 사용해야하는지 이해하는 것을<br/>
                더 중요하다고 생각합니다."
            </p>
            <div className='toc-stack-box'>
                <div className='toc-stack-row'>
                    <p className='toc-stack-label'>Language</p>
                    <div className='toc-stack-tags'>
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className='toc-stack-row'>
                    <p className='toc-stack-label'>Frontend</p>
                    <div className='toc-stack-tags'>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div className='toc-stack-row'>
                    <p className='toc-stack-label'>Backend</p>
                    <div className='toc-stack-tags'>
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div className='toc-stack-row'>
                    <p className='toc-stack-label'>DevOps &amp; Infra</p>
                    <div className='toc-stack-tags'>
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Agenda() {
    const agendaList = [
        { number: "01", title: "Backend", tags: "JAVA, SPRING BOOT" },
        { number: "02", title: "Frontend", tags: "HTML, CSS, JS, REACT" },
        { number: "03", title: "DevOps", tags: "MySQL, ORACLE" },
        { number: "04", title: "Infra", tags: "Linux, Git" },
    ]

    return(
        <div className='agenda-container'>
            {agendaList.map((item, index) => (
                <div className='agenda-row' key={index}>
                    <p className='agenda-number'>{item.number}</p>
                    <p className='agenda-title'>{item.title}</p>
                    <small className='agenda-tags'>{item.tags}</small>
                </div>
            ))}
        </div>
    )
}

export function Backend(){
    return(
        <div>Backend</div>
    )
}

export function BackendContent(){
    return(
        <div>Backend</div>
    )
}

export function Frontend(){
    return(
        <div>Frontend</div>
    )
}

export function FrontendContent(){
    return(
        <div>Frontend</div>
    )
}

export function Database(){
    return(
        <div>Database</div>
    )
}

export function DatabaseContent(){
    return(
        <div>Database</div>
    )
}

export function Infra(){
    return(
        <div>Infra</div>
    )
}

export function InfraContent(){
    return(
        <div>Infra</div>
    )
}