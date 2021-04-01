import { Row, Col, Typography, Tag } from "antd"
import styles from "../_styles/About.module.css"

const { Title, Paragraph } = Typography

interface SkillsProps {
    skills: Array<string>;
    description: string;
}

export default function Skills({ skills, description }: SkillsProps) {
    return <>
    <Row className={styles["skills-first-row"]}>
        <Col span={20}>
            <Title className={`serif `} level={4}>Skills</Title>
        </Col>
    </Row>
    <Row>
        <Col span={10}>
            <Paragraph>
                {description}
            </Paragraph>
        </Col>
        <Col span={10}>
            <div>
                {
                    skills.map(skill => <Tag key={skill} > {skill} </Tag>)
                }
            </div>
        </Col>
    </Row>
    </>
}