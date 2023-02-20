import Link from "next/link";
import React from "react";

const TopNavigation = () => {
    return (
        <nav>
            <button><Link href="/">Home</Link></button>
            <button><Link href="/about">ABOUT</Link></button>
        </nav>
    )
}

export default TopNavigation;