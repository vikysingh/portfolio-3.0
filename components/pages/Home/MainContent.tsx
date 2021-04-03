import { Typography } from "antd"
import styles from "../_styles/Home.module.css"

const { Link } = Typography

interface ProjectCardProps {
    link: string;
    title:string;
    imgSrc: string;
}

interface MainContentProps {
    projects: ProjectCardProps[];
}

function ProjectCard({ imgSrc, link, title }: ProjectCardProps) {
    return <Link className={styles["project-card"]} href={link} >
        <img src={imgSrc} alt={title} />
    </Link>
}

export default function MainContent({ projects }: MainContentProps) {
    return <section className={styles["main-content"]} >
        {
            projects.map(project => <ProjectCard title={project.title} 
                key={project.title} link={project.link}
                imgSrc={project.imgSrc} />)
        }
    </section>
}