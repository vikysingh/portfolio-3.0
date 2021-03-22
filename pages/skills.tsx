import {SkillsHero,SkillSection} from "../components/pages/index"
import { Footer, PromoSection } from "../components/library/index"

const skills: Array<string> = [
    "HTML5", "CSS3", "JavaScript(ES6+)", "Bootstrap",
    "Sass", "NPM", "ReactJS", "Ant Design", "Axios",
    "Git", "Redux(React-Redux)", "GitHub", "VSCode",
    "Figma", "Jest", "React Testing Library", "NextJS",
    "TypeScript"
]

export default function Skills() {
    return <>
        <main>
            <SkillsHero />
            <SkillSection skills={skills} />
            <PromoSection/>
        </main>
        <Footer/>
    </>
}