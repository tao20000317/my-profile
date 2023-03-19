import Image from "next/image"
import styles from "./page.module.css"

const techStack = [
    {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        url: "https://reactjs.org/",
        svg: "react.svg",
    },
    {
        name: "Next.js",
        description:
            "A React framework for building production-ready websites and applications",
        url: "https://nextjs.org/",
        svg: "next.svg",
    },
]

export default function MyTechStack() {
    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                {techStack.map((tech) => (
                    <a href={tech.url} target="_blank" rel="noreferrer">
                        <li className={styles.listItem} key={tech.name}>
                            <a className={styles.link}>{tech.name}</a>
                            <p className={styles.description}>
                                {tech.description}
                            </p>
                            <div className={styles.imageWrapper}>
                                <Image
                                    className={styles.logo}
                                    src={`/${tech.svg}`}
                                    alt={`${tech.name} Logo`}
                                    width={100}
                                    height={50}
                                    priority
                                />
                            </div>
                        </li>
                    </a>
                ))}
            </ul>
        </section>
    )
}
