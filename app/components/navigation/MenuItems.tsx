import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";

const MenuItems = () => {
    const [submenuComponentsVisible, setSubmenuComponentsVisible] = useState(false);
    const [submenuParallaxVisible, setSubmenuParallaxVisible] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (href: string) => pathname === `/${href}`;

    const handleComponentsClicked = () =>
        setSubmenuComponentsVisible((prev) => !prev);

    const handleParallaxClicked = () =>
        setSubmenuParallaxVisible((prev) => !prev);

    const handleLinkClick = () => {
        setSubmenuComponentsVisible(false);
        setSubmenuParallaxVisible(false);
    };

    const renderLink = (href: string, label: string) => (
        <Link
            href={href}
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
                {/* Container for menu item with submenu items */}
                <div
                    className="relative pl-3 pr-3 pb-0 pt-0 border-y-16 cursor-pointer no-underline text-text-color-blue"
                    tabIndex={0}

                    onBlur={(e) => {
                        if (
                            !e.currentTarget.contains(e.relatedTarget as Node)
                        ) {
                            setSubmenuComponentsVisible(false);
                        }
                    }}
                >
                    {/* Menu Item */}
                    <div onClick={handleComponentsClicked}>
                        Components
                    </div>

                    {/* Submenu items */}
                    <div
                        className={
                            submenuComponentsVisible
                                ? "flex flex-col absolute pl-2 pr-2 bg-color1-transparent w-36"
                                : "hidden"
                        }
                        style={{ top: "53px" }}
                    >
                        {renderLink("/pages/components1", "Components 1")}
                        {renderLink("/pages/components2", "Components 2")}
                    </div>
                </div>


                {/* Container for menu item with submenu items */}
                <div
                    className="relative pl-3 pr-3 pb-0 pt-0 border-y-16 cursor-pointer no-underline text-text-color-blue"
                    tabIndex={0}

                    onBlur={(e) => {
                        if (
                            !e.currentTarget.contains(e.relatedTarget as Node)
                        ) {
                            setSubmenuParallaxVisible(false);
                        }
                    }}
                >
                    {/* Menu Item */}
                    <div onClick={handleParallaxClicked}>
                        Parallax
                    </div>

                    {/* Submenu items */}
                    <div
                        className={
                            submenuParallaxVisible
                                ? "flex flex-col absolute pl-2 pr-2 bg-color1-transparent w-36"
                                : "hidden"
                        }
                        style={{ top: "53px" }}
                    >
                        {renderLink("/pages/parallax1", "Parallax effect 1")}
                        {renderLink("/pages/parallax2", "Parallax effect 2")}
                    </div>
                </div>

                {renderLink("/technical-settings", "Settings")}
            </div>
        </div>
    );
};

export default MenuItems;
