import{ AboutHero, AboutSkills } from "../components/pages/index"
import { Layout } from "../components/library/index"

import AboutContent from "../content/about.json"

export default function About() {

    const { imgSrc, description } = AboutContent.about
    const { skills, description: skillsDescription } = AboutContent.skills

    return <>
    <Layout>
        <AboutHero description={description} imgSrc={imgSrc} />
        <AboutSkills skills={skills} description={skillsDescription}/>
    </Layout>
    </> 
}