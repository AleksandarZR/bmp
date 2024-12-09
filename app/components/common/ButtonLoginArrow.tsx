import Link from "next/link";
import arrow from "@/public/images/arrow-left-black-transparent.png";
import Image from "next/image";

interface Properties {
    text: string;
    link: string;
}

export default function ButtonLoginArrow(properties: Properties) {

    return (
        <Link href={properties.link} className="">
            <div className="bg-color7 text-color1 pt-1 pb-1 w-28 max-w-28 min-w-28 rounded-lg font-bold text-center cursor-pointer flex flex-row justify-around items-center">
                <Image src={arrow} alt="Logo" className="h-6 min-h-6 w-auto" />
                Login
            </div>
        </Link>
    );
}
