import styles from "./style.module.css"
import {Typography} from "antd"

import AboutData from "../../../content/about.json"

const { Link } = Typography

export default function Footer() {
    return <footer className={styles.footer} >
        <Link href={AboutData.about.links.linkedin}>LinkedIn</Link>
        <Link href={AboutData.about.links.github}>GitHub</Link>
        <Link href={AboutData.about.links.instagram}>Instagram</Link>
    </footer>
}