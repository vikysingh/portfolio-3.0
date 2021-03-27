import styles from "../_styles/Skills.module.css"

interface SkillProps {
    text: string;
}

function Skill({ text }: SkillProps) {
    return <p className={`text-mega ${styles.skill}`}>
         {text}
    </p>
}

interface SkillSectionProps {
    skills: Array<string>;
}

export default function SkillSection({skills}: SkillSectionProps) {
    return <section className="pad-y bg-white" >
        <div className="flex center-center wrap w-80 m-auto" >
            {
                skills.map(_skill => <Skill text={_skill} key={_skill} />)
            }
        </div>
    </section>
}