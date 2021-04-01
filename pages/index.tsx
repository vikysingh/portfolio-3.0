/*"
import {Footer,ProjectSection,PromoSection} from "../components/library/index"*/
import { Layout } from "../components/library/index"
import {HomeHero, HomeMainContent} from "../components/pages/index"

import ProjectsData from "../content/projects.json"


export default function Index() {
    return <>
        <Layout>
            <HomeHero />
            <HomeMainContent projects={ProjectsData} />
        </Layout>
    </>
}