import styles from "./style.module.css"

//Column label
interface ColumnLabelProps {
    text: string;
}

function ColumnLabel({text}: ColumnLabelProps) {
    return <p className={styles["column-label"]} >{text}</p>
}

//Column
interface ColumnProps {
    link:string;
    label: string;
}

function Column({link, label}: ColumnProps) {
    return <a href={link} className="black" >
    <h3>{label}</h3>
</a>
}


export default function Footer() {
    return <footer className={`bg-white flex start-start pad-y ${styles.footer}`} >
        <div>
        <ColumnLabel text="social" />
        <Column link="#" label="LinkedIn" />
        <Column link="#" label="GitHub" />
        <Column link="#" label="Instagram" />
        </div>
        <div>
            <ColumnLabel text="contact" />
            <a href="mailto:singhvik071@gmail.com" className="text-mega black">singhvik071@gmail.com</a>
        </div>
    </footer>
}