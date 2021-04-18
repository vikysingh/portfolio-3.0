import { Row, Col, Typography, Input, Button, Form } from "antd"
import styles from "../_styles/Contact.module.css"

const { Title } = Typography
const { TextArea } = Input

const colBreakpoints = {
    lg: 10,
    sm: 24
}

const { Item } = Form

export default function Content() {
    return <Row>
        <Col lg={colBreakpoints.lg} sm={colBreakpoints.sm} >
            <Title level={4} className="serif">
                I’m open to ideas, feel free to contact me.
            </Title>
        </Col>
        <Col lg={colBreakpoints.lg} offset={1} sm={colBreakpoints.sm} >
            <Form name="primary-contact-form">
                <Item>
                    <Input className={styles.input} name="name"
                           placeholder="Name" required={true} type="text" />
                </Item>
                <Item>
                    <Input className={styles.input} name="email"
                           placeholder="Email" required={true} type="email" />
                </Item>
                <Item>
                    <TextArea className={styles.textarea} name="message"
                              rows={4} required={true} placeholder="Message" />
                </Item>
                <Item>
                    <Button className={styles["submit-btn"]} htmlType="submit">Submit</Button>
                </Item>
            </Form>
        </Col>
    </Row>
}