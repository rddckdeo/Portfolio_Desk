// components/layout/DeskBackground/DeskBackground.jsx
import './DeskBackground.css'

export default function DeskBackground({ children, captions }) {
    return (
    <div className="desk-background">
        <p className='page-caption'>{captions}</p>
        <div className='desk-background-inner'>
            {children}
        </div>
    </div>
    )
}