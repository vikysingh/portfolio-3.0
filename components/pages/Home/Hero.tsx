import styles from "../_styles/Home.module.css"
import { Typography } from "antd"

const { Title } = Typography

export default function Hero() {
    return <header className={`${styles["HOME-hero"]} flex center-center`} >
        <Title level={1} className="serif" >FrontEnd Developer &amp; Designer</Title>
    </header>
}