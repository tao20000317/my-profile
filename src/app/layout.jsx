import clsx from "classnames"
import Logo from "@/components/logo"
import Navbar from "@/components/navbar"
import "./globals.css"

import styles from "./layout.module.css"

export const metadata = {
    title: "My Personal Website",
    description: "This is my personal website.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className={styles["grid-container"]}>
                    <div className={clsx(styles.logo, styles["grid-item"])}>
                        <Logo />
                    </div>
                    <div className={clsx(styles.navbar, styles["grid-item"])}>
                        <Navbar />
                    </div>
                    <main className={clsx(styles.main, styles["grid-item"])}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
