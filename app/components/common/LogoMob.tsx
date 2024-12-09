"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/svg/logo-mob.svg";

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
                    className="min-h-12 h-12 min-w-12 w-12"
                />
            </Link>
        </>
    );
};

export default LogoMob;
