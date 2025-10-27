"use client";

import Link from "next/link";
import logo from "../public/zuto-removebg-preview (1).png";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full z-20 fixed top-0 bg-white/30 backdrop-blur-sm shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between md:px-10 px-6 py-2">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="md:h-15 md:w-15 h-10 w-10"
                        height={20}
                        width={20}
                        unoptimized
                    />
                    <span className="md:text-4xl text-2xl font-bold text-shadow-zinc-950">
                        Zuto
                    </span>
                </Link>

                {/* Right: Admin Login Button */}
                <Link
                    href="/admin/login"
                    className="bg-zinc-950 text-white px-5 py-2 rounded-lg font-medium  hover:bg-zinc-800 transition-colors duration-200"
                >
                    Admin Login
                </Link>
            </nav>
        </header>
    );
}
