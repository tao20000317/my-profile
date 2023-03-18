"use client"

import Link from "next/link"
import Image from "next/image"
import { MY_NAME } from "@/globals"

export default function Logo() {
    return (
        <Link aria-label={MY_NAME} href="/">
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>
    )
}
