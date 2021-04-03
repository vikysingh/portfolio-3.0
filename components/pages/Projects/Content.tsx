import { Typography, Row, Col } from "antd"
import styles from "../_styles/Projects.module.css"

const { Title, Link, Paragraph } = Typography

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

interface ContentProps {
    projects: ProjectCardProps[];
}

function ProjectCard({ title, description, link }: ProjectCardProps) {
    return <div className={styles["projects-card"]}>
        <Link href={link}> {title} </Link>
        <Paragraph> {description} </Paragraph>
    </div>
}

const firstColBreakpoints = {
    lg: 9,
    md: 9,
    sm: 24,
    xs: 24
}

const secondColBreakpoints = {...firstColBreakpoints, lg:12, md: 12}

export default function Content({ projects }: ContentProps) {
    return <Row className={styles["projects-section"]} >
        <Col lg={firstColBreakpoints.lg} md={firstColBreakpoints.md}
        sm={firstColBreakpoints.sm} xs={firstColBreakpoints.xs} >
            <Title className="serif" level={3}>Projects</Title>
            <Paragraph>
                Some work I have done so far.
            </Paragraph>
        </Col>
        <Col  lg={secondColBreakpoints.lg} md={secondColBreakpoints.md}
        sm={secondColBreakpoints.sm} xs={secondColBreakpoints.xs} >
            {
                projects.map(project => <ProjectCard key={project.title + "-project-page"}
                title={project.title} description={project.description} link={project.link} />)
            }
        </Col>
    </Row>
}