import { Typography } from "antd"
import styles from "../_styles/Home.module.css"

const { Title, Paragraph } = Typography
const imgSrc: string = "https://images.unsplash.com/photo-1598094670018-abf669538033?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

interface ProjectCardProps {
    src: string;
    title: string;
    subHeading: string;
}

function ProjectCard({src, title, subHeading}: ProjectCardProps) {
    return <div className={styles["project-card"]} >
        <img src={src} alt="" />
        <Title className={`serif ${styles["project-card-heading"]}`} level={4}>{title}</Title>
        <Paragraph className={styles["project-card-sub"]}>{subHeading}</Paragraph>
    </div>
}

export default function MainContent() {
    return <section className={styles["main-content"]} >
        <ProjectCard src={imgSrc} title="Project title" subHeading="Design & FrontEnd" />
        <ProjectCard src={imgSrc} title="Project title" subHeading="Design & FrontEnd" />
        <ProjectCard src={imgSrc} title="Project title" subHeading="Design & FrontEnd" />
    </section>
}