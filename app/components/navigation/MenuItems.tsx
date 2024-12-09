import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";

const MenuItems = () => {
    const [submenuProjectsVisible, setSubmenuProjectsVisible] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.split("/")[1];

    const isActive = (href: string) => pathname === `/${lang}${href}`;
    const isLanguageActive = (language: string) => lang === language;

    const handleChangeLang = (newLanguage: string) => {
        if (lang !== newLanguage) {
            const newPathname = pathname.replace(`/${lang}`, `/${newLanguage}`);
            router.push(newPathname);
        }
    };

    const handleProjectsClicked = () =>
        setSubmenuProjectsVisible((prev) => !prev);

    const handleLinkClick = () => {
        setSubmenuProjectsVisible(false);
    };

    const renderLink = (href: string, label: string) => (
        <Link
            href={`/${lang}${href}`}
            onClick={handleLinkClick}
            className={
                isActive(href)
                    ? "block pl-3 pr-3 pb-0.5 pt-0 border-y-16 text-button-background-color font-extrabold scale-125"
                    : "block pl-3 pr-3 pb-0 pt-0 border-y-16 no-underline text-text-color-blue"
            }
        >
            {label}
        </Link>
    );

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-row justify-center items-center space-x-4 text-nowrap">
                {renderLink("/how-it-works", "aaa")}

                <div
                    className="relative pl-3 pr-3 pb-0 pt-0 border-y-16 cursor-pointer no-underline text-text-color-blue"
                    tabIndex={0}
                    
                    onBlur={(e) => {
                        if (
                            !e.currentTarget.contains(e.relatedTarget as Node)
                        ) {
                            setSubmenuProjectsVisible(false);
                        }
                    }}
                >
                    <div onClick={handleProjectsClicked}>
                        bbb
                    </div>
                    <div
                        className={
                            submenuProjectsVisible
                                ? "flex flex-col absolute pl-2 pr-2 bg-primary-color-transparent w-36"
                                : "hidden"
                        }
                        style={{ top: "53px" }}
                    >
                        {renderLink(
                            "/projects/solar-token",
                            "ccc"
                        )}
                    </div>
                </div>

                {renderLink("/about-us", "ddd")}
                {renderLink("/faq", "eee")}
                {renderLink("/contact", "fff")}
                {renderLink("/news", "ggg")}
            </div>
        </div>
    );
};

export default MenuItems;
