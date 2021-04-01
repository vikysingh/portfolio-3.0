import { Layout } from "../components/library/index"
import { ContactContent } from "../components/pages/index"

export default function Contact() {
    return <Layout onContact={true}>
        <ContactContent/>
    </Layout>
}