import styles from "../_styles/About.module.css"

const imgSrc: string = "https://cdn.sanity.io/images/8ou871uz/portfolio/08c41986c570182c6beb733f0ba5820ea67dc2b3-884x868.jpg"

export default function Hero() {
    return <section className={`white pad-y flex center-center ${styles.hero}`} >
        <img src={imgSrc} alt="Profile photo" />
        <h1>Who Am I?</h1>
        <div>
            <p className="text-mega">
                I’m a  FrontEnd developer and web designer based in Italy. 
                I started learning JavaScript back in 2019 and since then 
                I have made a lot of progress.
            </p>
            <br/>
            <p className="text-mega">
                Other than FrontEnd development, I’ve
                also had experience working with WordPress.
            </p>
        </div>
    </section>
}