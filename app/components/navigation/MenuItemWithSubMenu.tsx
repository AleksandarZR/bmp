import React, { JSX, useState } from "react";

interface Properties {
    children: JSX.Element | JSX.Element[];
    menuItemName: string;
}

const MenuItemWithSubMenu = ({ children, menuItemName }: Properties): JSX.Element => {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMenuItemClicked = () => {
        setSubmenuVisible(!submenuVisible);
    }

    const handleSubMenuClicked = () => {
        setSubmenuVisible(!submenuVisible);
    }

    return (
        <div
            className="relative pl-3 pr-3 pb-0 pt-0 border-y-16 cursor-pointer no-underline"
            tabIndex={0}

            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setSubmenuVisible(false);
                }
            }}
        >
            {/* Menu Item */}
            <div onClick={handleMenuItemClicked} className="text-xl">
                {menuItemName}
            </div>

            {/* Submenu Items Container*/}
            <div
                className={
                    submenuVisible
                        ? "flex flex-col justify-start items-start absolute pl-2 pr-2 bg-color1-transparent w-52"
                        : "hidden"
                }
                style={{ top: "55px" }}
                onClick={handleSubMenuClicked}
            >
                {children}
            </div>
        </div>
    );
}

export default MenuItemWithSubMenu;