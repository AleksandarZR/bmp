import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import hamburger2 from "@/public/svg/hamburger.svg";
import { useClickOutside } from "@/app/hooks/useOutsideClick";
import LogoutButtonArrow from "@/app/components/common/ButtonLogoutArrow";
import { Session } from "next-auth";
import ButtonLoginArrow from "@/app/components/common/ButtonLoginArrow";
import Arrow from "../common/Arrow";

const DropDownMenu = ({ session }: { session: Session }) => {
    const [submenuParallaxVisible, setSubmenuParallaxVisible] = useState(false);
    const [submenuComponentsVisible, setSubmenuComponentsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.split("/")[1];
    const [dropDownVisible, setDropDownVisible] = useState(false);

    useClickOutside(dropdownRef, () => {
        setDropDownVisible(false);
        setSubmenuParallaxVisible(false);
        setSubmenuComponentsVisible(false);
    });

    const isActive = (href: string) => pathname === `${href}`;

    const handleParallaxClicked = () => {
        setSubmenuComponentsVisible(false);
        setSubmenuParallaxVisible((prev) => !prev);
    };

    const handleComponentsClicked = () => {
        setSubmenuComponentsVisible((prev) => !prev);
        setSubmenuParallaxVisible(false);
    };

    const handleLinkClick = () => {
        setDropDownVisible(false);
        setSubmenuParallaxVisible(false);
        setSubmenuComponentsVisible(false);
    };

    const renderLink = (href: string, label: string) => (
        <Link
            href={`${href}`}
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
                        ? "lg:hidden sm:flex flex-col justify-start fixed left-0 bg-color1-transparent w-60 pt-4 pb-5 top-20 font-3xl"
                        : "hidden"
                }
                style={{ fontSize: "1.5rem" }}
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="relative">
                        <div
                            className="pt-1 pb-1 font-3xl cursor-pointer text-text-color-blue"
                            onClick={handleComponentsClicked}
                        >
                            Components
                        </div>
                        <div
                            className={
                                submenuComponentsVisible
                                    ? "absolute top-0 left-[189px] flex flex-col pl-2 pr-2 bg-color1-transparent w-40"
                                    : "hidden"
                            }
                        >
                            {renderLink("/pages/components1", "Components1")}
                            {renderLink("/pages/components2", "Components2")}
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="pt-1 pb-1 font-3xl cursor-pointer text-text-color-blue"
                            onClick={handleParallaxClicked}
                        >
                            Parallax
                        </div>
                        <div
                            className={
                                submenuParallaxVisible
                                    ? "absolute top-0 left-[165px] flex flex-col pl-2 pr-2 bg-color1-transparent w-40"
                                    : "hidden"
                            }
                        >
                            {renderLink("/pages/parallax1", "Parallax effect1")}
                            {renderLink("/pages/parallax2", "Parallax effect2")}
                        </div>
                    </div>


                    {renderLink("/settings", "Settings")}
                    <div className="p-2">
                        {!session && (
                            <Arrow/>
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
