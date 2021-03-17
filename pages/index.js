import {HomeHero, ProjectSection,SkillSection,PromoSection} from "../components/pages/index"

export default function Index() {
    return <>
        <HomeHero />
        <main>
            <ProjectSection />
            <SkillSection />
            <PromoSection />
        </main>
    </>
}