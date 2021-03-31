import styles from "./style.module.css"
import {Typography} from "antd"

const { Link } = Typography

export default function Footer() {
    return <footer className={styles.footer} >
        <Link href="https://www.linkedin.com/in/singhviky/">LinkedIn</Link>
        <Link href="https://www.github.com/vikysingh">GitHub</Link>
        <Link href="https://www.instagram.com/web.sia">Instagram</Link>
    </footer>
}