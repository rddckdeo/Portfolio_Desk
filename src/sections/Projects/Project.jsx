// sections/AboutMe/AboutMe.jsx
import { useState } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import ProjectModal from '../../components/common/Modal/ProjectModal';

export default function Project() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="Project">
            <ProjectCard 
                color = "#1D4ED8" 
                title = "TravelPlan"
                onClick={() => setSelectedProject('travelplan')}
            />
            <ProjectCard 
                color = "#C7345B" 
                title = "Levup"
                onClick={() => setSelectedProject('Levup')}
            />
            <ProjectCard 
                color = "#1E2128" 
                title = "Portfolio"
                onClick={() => setSelectedProject('Portfolio')}
            />
            <ProjectCard 
                color = "#D69240" 
                title = "Haru-SemiProject"
                onClick={() => setSelectedProject('Haru-SemiProject')}
            />
            <ProjectCard 
                color = "#0A0E3F"
                title = "CoCo-FinalProject"
                onClick={() => setSelectedProject('CoCo-FinalProject')}
            />
            {selectedProject && (<ProjectModal onClose={() => setSelectedProject(null)} />)}
        </section>
    )
}