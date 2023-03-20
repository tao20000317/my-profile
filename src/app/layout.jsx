"use client"

import clsx from "classnames"
import localFont from "@next/font/local"

import Logo from "@/components/logo"
import Navbar from "@/components/navbar"
import "./globals.css"

import styles from "./layout.module.css"

const kaisei = localFont({
    src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
    weight: "700",
    variable: "--font-kaisei",
    display: "swap",
})

export const metadata = {
    title: "My Personal Website",
    description: "This is my personal website.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={kaisei.className}>
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
