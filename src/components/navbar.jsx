"use client"

import clsx from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import styles from "./navbar.module.css"

/*
    Unfortunately, with this implementation, you will have to update
    the positions/widths if you add/remove nav items.
    There's probably a way to do this dynamically...

    Desktop needs the x and y positions, mobile only needs the x position.
    That's why I introduced a tuple for desktop.
*/
const navItems = {
    "/": {
        name: "home",
        mobileX: 20,
        desktop: [19, 0],
        width: 61,
    },
    "/about": {
        name: "about",
        mobileX: 118,
        desktop: [19, 33],
        width: 61,
    },
}

export default function Navbar() {
    const pathname = usePathname() || "/" // short-circuit to home page if for some reason pathname is undefined

    return (
        <nav className={styles.nav}>
            <div className={styles["nav-items-container"]}>
                <NavItems pathname={pathname} />
                <NavIndicator pathname={pathname} />
            </div>
        </nav>
    )
}

function NavItems(props) {
    const { pathname } = props

    return Object.entries(navItems).map((navItem) => {
        const [path, { name }] = navItem
        const isActive = path === pathname

        return (
            <Link
                key={path}
                href={path}
                className={clsx(styles["nav-link"], {
                    [styles.active]: isActive,
                })}
            >
                {name}
            </Link>
        )
    })
}

function NavIndicator(props) {
    const { pathname } = props

    const {
        mobileX,
        desktop: [desktopX, desktopY],
        width,
    } = navItems[pathname]

    const transition = {
        type: "spring",
        stiffness: 500,
        damping: 50,
    }

    return (
        <>
            {/* Mobile version, hidden on desktop */}
            <div className={styles["visible-mobile"]}>
                <motion.div
                    className={styles["active-item-indicator"]}
                    layoutId="mobile-nav-layout"
                    initial={{
                        opacity: 0,
                        x: mobileX,
                    }}
                    animate={{
                        opacity: 1,
                        x: mobileX,
                        width,
                    }}
                    transition={transition}
                />
            </div>
            {/* Desktop version, hidden on mobile */}
            <div className={styles["visible-desktop"]}>
                <motion.div
                    className={styles["active-item-indicator"]}
                    layoutId="desktop-nav-layout"
                    initial={{
                        opacity: 0,
                        x: desktopX,
                        y: desktopY,
                    }}
                    animate={{
                        opacity: 1,
                        x: desktopX,
                        y: desktopY,
                        width,
                    }}
                    transition={transition}
                />
            </div>
        </>
    )
}
