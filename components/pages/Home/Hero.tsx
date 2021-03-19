import styles from "../_styles/Home.module.css"

export default function Hero() {
    return <header className={`${styles["HOME-hero"]} flex center-center`} >
        <h1 className="red" >Web Designer ♡ FrontEnd Dev</h1>
        <p className="white" >Hi, my name is Vikram. I’m a Web Designer and a FrontEnd Developer.</p>
    </header>
}