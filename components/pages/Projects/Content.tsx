import { Typography, Row, Col } from "antd"
import styles from "../_styles/Projects.module.css"

const { Title, Link, Paragraph } = Typography

interface ProjectCardProps {
    title: string;
    description: string;
}

interface ContentProps {
    projects: Array<Object>;
}

function ProjectCard({ title, description }: ProjectCardProps) {
    return <div className={styles["projects-card"]}>
        <Link href="#"> {title} </Link>
        <Paragraph> {description} </Paragraph>
    </div>
}

export default function Content({ projects }: ContentProps) {
    return <Row className={styles["projects-section"]} >
        <Col span={9}>
            <Title className="serif" level={3}>Projects</Title>
            <Paragraph>
                Some work I have done so far.
            </Paragraph>
        </Col>
        <Col span={12}>
            {
                projects.map(project => <ProjectCard key={project.title + "-project-page"} title={project.title} description={project.description} />)
            }
        </Col>
    </Row>
}