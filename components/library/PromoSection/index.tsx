import { Typography } from "antd"

const { Title, Link } = Typography

export default function PromoSection() {
    return <section style={{ textAlign: "center", paddingTop: "5%" }} >
        <Title className="serif" level={2}>Have something in mind?</Title>
        <Link href="/contact">Just say hello</Link>
    </section>
}