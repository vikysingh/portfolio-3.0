import styles from "../_styles/Skills.module.css"

export default function Hero() {
    return <header className="pad-y" >
        <h1 className="white">What skills do I have?</h1>
        <p className={`white ${styles["hero-paragraph"]}`}>
            I’m a  FrontEnd developer and web designer based in Italy.
            I started learning JavaScript back in 2019 and since then I have made a lot of progress.
        </p>
    </header>
}