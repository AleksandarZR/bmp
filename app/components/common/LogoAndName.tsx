"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/svg/logo2.svg";
import tokenInvest from "@/public/svg/token-invest.svg";

const LogoAndName = ({ session }: any) => {
    return (
        <>
            <Link
                href={session?.user?.isAdmin ? "/admin" : "/"}
                className="relative min-h-12 min-w-32 flex flex-row justify-start items-center content-start"
            >
                <Image src={logo} alt="Logo" className="pr-2 h-12 w-auto" />
                <Image src={tokenInvest} alt="Logo" className="h-10 w-auto" />
            </Link>
        </>
    );
};

export default LogoAndName;
