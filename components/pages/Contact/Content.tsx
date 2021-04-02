import { Row, Col, Typography, Input, Button } from "antd"
import styles from "../_styles/Contact.module.css"

const { Title } = Typography
const { TextArea } = Input

const colBreakpoints = {
    lg: 10,
    sm: 24
}

export default function Content() {
    return <Row>
        <Col lg={colBreakpoints.lg} sm={colBreakpoints.sm} >
            <Title level={4} className="serif">
                I’m open to ideas, feel free to contact me.
            </Title>
        </Col>
        <Col lg={colBreakpoints.lg} sm={colBreakpoints.sm} >
            <form>
                <Input className={styles.input} placeholder="Name" required={true} type="text" />
                <Input className={styles.input} placeholder="Email" required={true} type="email" />
                <TextArea className={styles.textarea} rows={4} required={true} placeholder="Message" />
                <Button className={styles["submit-btn"]}>Submit</Button>
            </form>
        </Col>
    </Row>
}