"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/svg/logo.svg";

const Logo = () => {
    return (
        <>
            <Link href="/" className="block min-w-38">
                <Image
                    src={logo}
                    alt="Logo"
                    width="153"
                    height="52"
                    className="relative min-w-32"
                />
            </Link>
        </>
    );
};

export default Logo;
