import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Hello!</h1>
            <p className={styles.text}>
                Welcome to my personal website! I'm passionate about programming
                and enjoy creating innovative solutions to complex problems.
                Here, you'll find my portfolio, blog, and ways to connect with
                me. Feel free to explore and get in touch!
            </p>
        </section>
    )
}
