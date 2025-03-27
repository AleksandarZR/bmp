"use client";
import Image from "next/image";
import hamburger2 from "@/public/svg/hamburger.svg";

interface Props {
    onHamburgerClicked(): void;
}

const Hamburger = ({ onHamburgerClicked }: Props) => {
    return (
        <div
            className="min-h-12 min-w-12 cursor-pointer"
            onClick={onHamburgerClicked}
        >
            <Image
                src={hamburger2}
                alt="Logo"
                className="min-h-12 h-12 min-w-12 w-12 scale-125"
            />
        </div>
    );
};

export default Hamburger;
