import styles from "./style.module.css"

interface Props {
    background: string;
}

export default function ProjectCard({background}: Props) {
    return <div style={{background}} className={styles["project-card"]} ></div>
}