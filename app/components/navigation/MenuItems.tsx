import React from "react";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";
import MenuItemLink from "./MenuItemLink";

const MenuItems = () => {

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-row justify-center items-center space-x-4 text-nowrap">
                <MenuItemWithSubMenu menuItemName="Components">
                    <MenuItemLink href="/pages/components1" label="Components 1" />
                    <MenuItemLink href="/pages/components2" label="Components 2" />
                </MenuItemWithSubMenu>

                <MenuItemWithSubMenu menuItemName="Parallax">
                    <MenuItemLink href={"/pages/parallax1"} label={"Parallax effect 1"} />
                    <MenuItemLink href={"/pages/parallax2"} label={"Parallax effect 2"} />
                </MenuItemWithSubMenu>

                <MenuItemLink href={"/pages/settings"} label={"Settings"} />
            </div>
        </div>
    );
};

export default MenuItems;
