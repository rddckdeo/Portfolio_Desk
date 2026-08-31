import './CareerCard.css'

export default function CareerCard({company}){
    return(
        <div className='career-card-container'>
            <div className='career-card-header'>
                <div className='career-card-id'>ID</div>
                <div className='career-card-holder'></div>
                <div className='career-card-logo'>
                    <img src={company.img} alt="placeholder" className='career-card-logo-img'/>
                </div>
                <div className='career-card-header-title'>
                    <p className='text-subheading' style={{fontSize : '20px'}}>{company.name}</p>
                    <p className='text-label'  style={{fontSize : '16px', color : 'var(--color-label)'}}>{company.address}</p>
                </div>
            </div>
            <hr/>
            <div  className='career-card-content'>
                <div className='career-card-line'>
                    <div style={{color : 'var(--color-label)'}}>소속</div>
                    <div style={{fontSize : '15px', whiteSpace : 'pre-line'}}>{company.department}</div>
                </div>
                <div className='career-card-line'>
                    <div style={{color : 'var(--color-label)'}}>재직 기간</div>
                    <div style={{fontSize : '15px', whiteSpace : 'pre-line'}}>{company.period}</div>
                </div>
                <div className='career-card-line'>
                    <div style={{color : 'var(--color-label)'}}>담당 업무</div>
                    <div style={{fontSize : '15px', whiteSpace : 'pre-line'}}>{company.work}</div>
                </div>
                <div className='career-card-footer' style={{color : 'var(--color-label)'}} >클릭하면 상세 업무 내용이 펼처집니다.</div>
            </div>
        </div>
    )
}