import React, { JSX } from "react";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";
import MenuItemLink from "./MenuItemLink";
import SubMenuItemLink from "./SubMenuItemLink";

const MenuItems = (): JSX.Element => {
    return (
        <div className="w-full flex flex-row justify-center items-center space-x-4 text-nowrap">
            <MenuItemWithSubMenu menuItemName="Components">
                <SubMenuItemLink href="/pages/components1" label="Components 1" />
                <SubMenuItemLink href="/pages/components2" label="Components 2" />
            </MenuItemWithSubMenu>

            <MenuItemWithSubMenu menuItemName="Parallax">
                <SubMenuItemLink href={"/pages/parallax1"} label={"Parallax effect 1"} />
                <SubMenuItemLink href={"/pages/parallax2"} label={"Parallax effect 2"} />
            </MenuItemWithSubMenu>

            <MenuItemLink href={"/pages/settings"} label={"Settings"} />
        </div>
    );
};

export default MenuItems;
