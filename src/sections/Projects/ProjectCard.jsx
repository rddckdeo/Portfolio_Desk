import { useState } from 'react'
import './ProjectCard.css'

export default function ProjectCard({ color, title, onClick }) {

    return (
        <div className='project-card-container' onClick={onClick}>
            <div className='project-card-header' style={{ backgroundColor: color }}>
                {title}
            </div>
            <div className='project-card-content'>ss</div>
        </div>
    )
}