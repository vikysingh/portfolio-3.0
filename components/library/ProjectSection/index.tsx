import styles from "./style.module.css"
import ProjectCard from "./ProjectCard"

export default function ProjectSection() {
    return <section className={`bg-white ${styles["project-section"]}`} >
        <h2 className="blue" >Recent Projects</h2>
        <div className={`flex center-center ${styles["project-container"]}`} >
            <ProjectCard background="#FD0F0F" />
            <ProjectCard background="#FF00B8" />
            <ProjectCard background="#00A7EF" />
            <ProjectCard background="#00EF7C" />
        </div>
    </section>
}