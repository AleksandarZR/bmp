import Link from "next/link";
import arrow from "@/public/images/arrow-left-black-transparent.png";
import Image from "next/image";
import { JSX } from "react";

interface Properties {
    text: string;
    link: string;
}

const ButtonLoginArrow = (properties: Properties): JSX.Element => {
    return (
        <Link href={properties.link} className="">
            <div className="bg-color7 text-color1 pt-1 pb-1 w-28 max-w-28 min-w-28 rounded-lg font-bold text-center cursor-pointer flex flex-row justify-around items-center">
                <Image src={arrow} alt="Logo" className="h-6 min-h-6 w-auto" />
                Login
            </div>
        </Link>
    );
}

export default ButtonLoginArrow;