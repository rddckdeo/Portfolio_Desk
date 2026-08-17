// components/layout/DeskBackground/DeskBackground.jsx
import './DeskBackground.css'

export default function DeskBackground({ children }) {
    return (
    <div className="desk-background">
        <div className='desk-background-inner'>
            {children}
        </div>
    </div>
    )
}