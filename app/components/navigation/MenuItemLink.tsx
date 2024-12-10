import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Properties {
    href: string;
    label: string;
    onClicked?: () => void;
}

const MenuItemLink = ({ href, label, onClicked }: Properties): JSX.Element => {
    const pathname = usePathname();

    const handleLinkClick = () => {
        onClicked;
    };

    const isActive = (href: string) => pathname === `${href}`;

    return (
        <Link
            href={href}
            onClick={handleLinkClick}
            className={
                isActive(href)
                    ? "block p-4 border-y-16 text-xl text-color7 scale-125 font-extrabold"
                    : "block p-4 border-y-16 text-xl no-underline"
            }
        >
            {label}
        </Link>
    );
}

export default MenuItemLink;