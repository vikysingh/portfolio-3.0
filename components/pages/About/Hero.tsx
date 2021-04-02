import styles from "../_styles/About.module.css"
import { Row, Col, Typography } from "antd"

const { Title, Paragraph } = Typography

interface HeroProps {
    imgSrc: string;
    description: Object;
}

const colBreakpoints = {
    lg: 10,
    md: 10,
    sm: 24
}

export default function Hero({ imgSrc, description }: HeroProps) {
    return <Row className={styles.hero} >
                <Col lg={colBreakpoints.lg} md={colBreakpoints.md}
                    sm={colBreakpoints.sm} >
                    <img src={imgSrc} alt="Profile photo" />
                </Col>
                <Col offset={1} lg={colBreakpoints.lg} md={colBreakpoints.md}
                    sm={colBreakpoints.sm} >
                    <Title level={5}>About me</Title>
                    <Paragraph>
                        {description.first}
                    </Paragraph>
                    <Paragraph>
                        {description.second}
                    </Paragraph>
                    <Paragraph>
                        {description.third}
                    </Paragraph>
                </Col>
        </Row>
}