import { Typography, Row, Col } from "antd"
import styles from "./style.module.css"
import { Footer, PromoSection } from "../index"

const { Paragraph, Link } = Typography

interface HOCLayoutProps {
    children: any;
    onContact?: Boolean;
}

const siderBreakpoints = {
    md: 3,
    lg: 2,
    sm: 3,
    xs: 4
}

const centerBreakpoints = {
    md: 18,
    lg: 20,
    sm: 18,
    xs: 16
}

export default function Layout({ children, onContact }: HOCLayoutProps) {
    return <Row className={styles.layout} >
        <Col md={siderBreakpoints.md} lg={siderBreakpoints.lg}
            sm={siderBreakpoints.sm} xs={siderBreakpoints.xs}
        className={styles.sider1} >
            <Paragraph>scroll down</Paragraph>
        </Col>
        
        <Col lg={centerBreakpoints.lg} md={centerBreakpoints.md}
            sm={centerBreakpoints.sm} xs={centerBreakpoints.xs}
        className={styles.center} >
            <main className={styles.content}>
                {children}
                {
                !onContact && <PromoSection />
                }
                <Footer />
            </main>
        </Col>
        
        <Col md={siderBreakpoints.md} lg={siderBreakpoints.lg} span={2}
            sm={siderBreakpoints.sm} xs={siderBreakpoints.xs}
        className={styles.sider2}>
            <nav className={styles.navbar} >
                <ul>
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/projects" >Projects</Link>
                    </li>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <li>
                        <Link href="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
        </Col>
    </Row>
}