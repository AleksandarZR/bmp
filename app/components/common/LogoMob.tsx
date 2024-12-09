"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const LogoMob = ({ session }: any) => {
    return (
        <>
            <Link
                href={session?.user?.isAdmin ? "/admin" : "/"}
                className="min-h-12 min-w-12"
            >
                <Image
                    src={logo}
                    alt="Logo"
                    className="min-h-12 h-16 min-w-12 w-16"
                />
            </Link>
        </>
    );
};

export default LogoMob;
