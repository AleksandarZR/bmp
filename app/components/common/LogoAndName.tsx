"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const LogoAndName = ({ session }: any) => {
    return (
        <>
            <Link
                href={session?.user?.isAdmin ? "/admin" : "/"}
                className="relative min-h-12 min-w-12 flex flex-row justify-start items-center content-start"
            >
                <Image src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>
        </>
    );
};

export default LogoAndName;
