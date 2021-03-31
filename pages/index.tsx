/*"
import {Footer,ProjectSection,PromoSection} from "../components/library/index"*/
import { Layout } from "../components/library/index"
import {HomeHero, HomeMainContent} from "../components/pages/index"


export default function Index() {
    return <>
        <Layout>
            <HomeHero />
            <HomeMainContent />
        </Layout>
    </>
}