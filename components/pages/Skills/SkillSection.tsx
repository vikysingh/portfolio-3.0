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
        <div className="flex center-center wrap" >
            {
                skills.map(_skill => <Skill text={_skill} key={_skill} />)
            }
        </div>
        <h1 className="blue" >What can I do for you?</h1>
        <p className="blue" >
            I’m a  FrontEnd developer and web designer based in Italy.
            I started learning JavaScript back in 2019 and since then I have made a lot of progress.
        </p>
        <p className="blue" >
            Other than FrontEnd development, I’ve
            also had experience working with WordPress.
        </p>
    </section>
}