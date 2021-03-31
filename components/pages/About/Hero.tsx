import styles from "../_styles/About.module.css"
import { Row, Col, Typography } from "antd"

const { Title, Paragraph } = Typography

const imgSrc: string = "https://cdn.sanity.io/images/8ou871uz/portfolio/08c41986c570182c6beb733f0ba5820ea67dc2b3-884x868.jpg"

export default function Hero() {
    return <Row className={styles.hero} >
                <Col span={10}>
                    <img src={imgSrc} alt="Profile photo" />
                </Col>
                <Col offset={1} span={10}>
                    <Title level={5}>About me</Title>
                    <Paragraph>
                        I’m a self-taught FrontEnd developer based in Italy. 
                        I love working with JavaScript and building beautiful UIs and websites.
                    </Paragraph>
                    <Paragraph>
                        I’ve spent the last two years learning FrontEnd development and its
                        very philosophy – from simple “Hello world” programs to designing complete web apps’ 
                        architecture.
                    </Paragraph>
                    <Paragraph>
                        A creative thinker and a problem solver, I’m comfortable working with modern 
                        technologies such as TypeScript, NextJS or Sass.
                    </Paragraph>
                </Col>
        </Row>
}