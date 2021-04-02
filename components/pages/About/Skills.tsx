import { Row, Col, Typography, Tag } from "antd"
import styles from "../_styles/About.module.css"

const { Title, Paragraph } = Typography

interface SkillsProps {
    skills: Array<string>;
    description: string;
}

const firstColBreakpoints = {
    lg: 20,
    sm: 24
}

const secondColBreakpoints = {...firstColBreakpoints, lg:10 }

export default function Skills({ skills, description }: SkillsProps) {
    return <>
    <Row className={styles["skills-first-row"]}>
        <Col lg={firstColBreakpoints.lg} sm={firstColBreakpoints.sm} >
            <Title className={`serif `} level={4}>Skills</Title>
        </Col>
    </Row>
    <Row>
        <Col lg={secondColBreakpoints.lg} sm={secondColBreakpoints.sm} >
            <Paragraph>
                {description}
            </Paragraph>
        </Col>
        <Col lg={secondColBreakpoints.lg} sm={secondColBreakpoints.sm} >
            <div>
                {
                    skills.map(skill => <Tag key={skill} > {skill} </Tag>)
                }
            </div>
        </Col>
    </Row>
    </>
}