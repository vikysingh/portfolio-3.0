import { Typography } from "antd"
import styles from "../_styles/Home.module.css"

const { Link } = Typography
const imgSrc: string = "https://images.unsplash.com/photo-1598094670018-abf669538033?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

interface ProjectCardProps {
    src: string;
    link: string;
}

interface MainContentProps {
    projects: Array<Object>;
}

function ProjectCard({src, link}: ProjectCardProps) {
    return <Link className={styles["project-card"]} href={link} >
        <img src={src} alt="" />
    </Link>
}

export default function MainContent({ projects }: MainContentProps) {
    return <section className={styles["main-content"]} >
        {
            projects.map(project => <ProjectCard key={project.title} link={project.link} src={imgSrc} />)
        }
    </section>
}