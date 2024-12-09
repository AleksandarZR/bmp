import Link from "next/link";
import arrow from "@/public/svg/arrow.svg";
import Image from "next/image";

interface Properties {
    text: string;
    link: string;
}

export default function ButtonLoginArrow(properties: Properties) {

    return (
        <Link href={properties.link} className="">
            <div className="bg-button-background-color text-button-text-color pt-1 pb-1 w-28 max-w-28 min-w-28 rounded-lg font-bold text-center cursor-pointer flex flex-row justify-around items-center">
                <Image src={arrow} alt="Logo" className="h-6 min-h-6 w-auto" />
                Login
            </div>
        </Link>
    );
}
