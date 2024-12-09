import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import hamburger2 from "@/public/svg/hamburger.svg";
///import { useClickOutside } from "@/app/hooks/useOutsideClick";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
import { Session } from "next-auth";
import ButtonLoginArrow from "@/app/components/common/ButtonLoginArrow";

const DropDownMenu = ({ session }: { session: Session }) => {
    const [submenuProjectsVisible, setSubmenuProjectsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.split("/")[1];
    const [dropDownVisible, setDropDownVisible] = useState(false);

    /* useClickOutside(dropdownRef, () => {
        setDropDownVisible(false);
        setSubmenuProjectsVisible(false);
    }); */

    const isActive = (href: string) => pathname === `/${lang}${href}`;
    const isLanguageActive = (language: string) => lang === language;

    const handleProjectsClicked = () => {
        setSubmenuProjectsVisible((prev) => !prev);
    };

    const handleLinkClick = () => {
        setDropDownVisible(false);
        setSubmenuProjectsVisible(false);
    };

    const handleChangeLang = (newLanguage: string) => {
        if (lang !== newLanguage) {
            const newPathname = pathname.replace(`/${lang}`, `/${newLanguage}`);
            router.push(newPathname);
        }
    };

    const renderLink = (href: string, label: string) => (
        <Link
            href={`/${lang}${href}`}
            className={
                isActive(href)
                    ? "pt-1 pb-1 font-extrabold text-button-background-color"
                    : "pt-1 pb-1 decoration-0 font-xl text-text-color-blue"
            }
            onClick={handleLinkClick}
        >
            {label}
        </Link>
    );

    return (
        <div ref={dropdownRef}>
            <div
                className="min-h-12 min-w-12 cursor-pointer"
                onClick={() => setDropDownVisible((prev) => !prev)}
            >
                <Image
                    src={hamburger2}
                    alt="Logo"
                    className="min-h-12 h-12 min-w-12 w-12 scale-[115%]"
                />
            </div>
            <div
                className={
                    dropDownVisible
                        ? "lg:hidden sm:flex flex-col justify-start fixed left-0 bg-primary-color-transparent w-60 pt-4 pb-5 top-20 font-3xl"
                        : "hidden"
                }
                style={{ fontSize: "1.5rem" }}
            >
                <div className="flex flex-col justify-center items-center w-full">
                    {renderLink(
                        "/how-it-works",
                        "aaa"
                    )}
                    <div className="relative">
                        <div
                            className="pt-1 pb-1 font-3xl cursor-pointer text-text-color-blue"
                            onClick={handleProjectsClicked}
                        >
                            bbb
                        </div>
                        <div
                            className={
                                submenuProjectsVisible
                                    ? "absolute top-0 left-[165px] flex flex-col pl-2 pr-2 bg-primary-color-transparent w-40"
                                    : "hidden"
                            }
                        >
                            {renderLink(
                                "/projects/solar-token",
                                "ccc"
                            )}
                        </div>
                    </div>

                    {renderLink("/about-us", "ddd")}
                    {renderLink("/investing", "eee")}
                    {renderLink("/faq", "fff")}
                    {renderLink("/contact", "ggg")}
                    {renderLink("/news", "hhh")}
                    <div className="p-2">
                        {!session && (
                            <ButtonLoginArrow text={"Login"} link={"/login"} />
                        )}
                        {session && <LogoutButtonArrow />}
                    </div>
                    <div className="pb-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownMenu;
