import styles from "../_styles/About.module.css"
import { Row, Col, Typography } from "antd"

const { Title, Paragraph } = Typography

interface HeroProps {
    imgSrc: string;
    description: Object;
}

export default function Hero({ imgSrc, description }: HeroProps) {
    return <Row className={styles.hero} >
                <Col span={10}>
                    <img src={imgSrc} alt="Profile photo" />
                </Col>
                <Col offset={1} span={10}>
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