import { Typography, Layout } from "antd"
import styles from "./style.module.css"
import { Footer, PromoSection } from "../index"

const { Paragraph, Link } = Typography
const { Sider, Content } = Layout

interface HOCLayoutProps {
    children: any;
    onContact?: Boolean;
}

export default function HOCLayout({ children, onContact }: HOCLayoutProps) {
    return <Layout className={styles.layout} >
        <Sider className={`${styles.sider} ${styles.sider1}`} width={50}>
            <Paragraph>scroll down</Paragraph>
        </Sider>
        
        <Content  >
            <main className={styles.content}>
                {children}
            </main>
            {
                !onContact && <PromoSection />
            }
            <Footer />
        </Content>

        <Sider className={`${styles.sider} ${styles.sider2}`} width={40}>
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
        </Sider>
    </Layout>
}