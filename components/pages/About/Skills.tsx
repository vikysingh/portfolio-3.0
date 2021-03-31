import { Row, Col, Typography, Tag } from "antd"
import styles from "../_styles/About.module.css"

const { Title, Paragraph } = Typography
const skills: Array<string> = [
    "HTML5", "CSS3", "JavaScript(ES6+)", "Bootstrap",
    "Sass", "NPM", "ReactJS", "Ant Design", "Axios",
    "Git", "Redux(React-Redux)", "GitHub", "VSCode",
    "Figma", "Jest", "React Testing Library", "NextJS",
    "TypeScript"
]

export default function Skills() {
    return <>
    <Row className={styles["skills-first-row"]}>
        <Col span={20}>
            <Title className={`serif `} level={4}>Skills</Title>
        </Col>
    </Row>
    <Row>
        <Col span={10}>
            <Paragraph>
                I mainly work with JavaScript and its relative
                frameworks and libraries.
                However, in the past I’ve had the opportunity
                to build websites with WordPress’ plugin, Elementor.
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