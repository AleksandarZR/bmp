import Link from "next/link";
import { JSX } from "react";

interface Properties {
    text: string;
    link: string;
}

const ButtonLink = ({text="Jump to", link="/"}: Properties): JSX.Element => {
    return (
        <div className="bg-color7 text-color1 pt-1 pb-1 pl-8 pr-8 rounded-lg font-bold text-center cursor-pointer">
            <Link href={link} className="">
                {text}
            </Link>
        </div>
    );
}

export default ButtonLink;