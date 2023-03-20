"use client"

import styles from "./page.module.css"

export default function About() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>About Bobby Connolly</h1>
            <p className={styles.text}>
                Bobby is a passionate computer programmer with over 20 years of
                experience. He loves exploring new technologies and creating
                innovative solutions. Bobby runs a small software company
                specializing in medical billing services.
            </p>
        </section>
    )
}
