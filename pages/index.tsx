import {HomeHero} from "../components/pages/index"
import {Footer,ProjectSection,PromoSection} from "../components/library/index"

export default function Index() {
    return <>
        <HomeHero />
        <main>
            <ProjectSection />
            <PromoSection />
        </main>
        <Footer />
    </>
}