import{ AboutHero, AboutSkills } from "../components/pages/index"
import { Layout } from "../components/library/index"

export default function About() {
    return <>
    <Layout>
        <AboutHero />
        <AboutSkills/>
    </Layout>
    </>
}