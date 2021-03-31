import { Typography, Row, Col } from "antd"
import styles from "../_styles/Projects.module.css"

const { Title, Link, Paragraph } = Typography

const description = "Movizzed is makeover of my first application that I had developed, always using the TMdb API, in Reactjs."

interface ProjectCardProps {
    title: string;
    description: string;
}

function ProjectCard({ title, description }: ProjectCardProps) {
    return <div className={styles["projects-card"]}>
        <Link href="#"> {title} </Link>
        <Paragraph> {description} </Paragraph>
    </div>
}

export default function Content() {
    return <Row className={styles["projects-section"]} >
        <Col span={9}>
            <Title className="serif" level={3}>Projects</Title>
            <Paragraph>
                Some work I have done so far.
            </Paragraph>
        </Col>
        <Col span={12}>
            <ProjectCard title="Moviezzed" description={description} />
            <ProjectCard title="Moviezzed" description={description} />
            <ProjectCard title="Moviezzed" description={description} />
        </Col>
    </Row>
}