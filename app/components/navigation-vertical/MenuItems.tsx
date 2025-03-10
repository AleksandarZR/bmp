import React, { JSX } from "react";
import MenuItemWithSubMenu from "./MenuItemWithSubMenu";
import MenuItemLinkWithIcon from "./MenuItemLinkWithIcon";
import SubMenuItemLink from "./SubMenuItemLink";
import dashboardIcon from "@/public/svgbforeai/dashboard.svg";
import myBrandIcon from "@/public/svgbforeai/mybrand.svg";
import threatsIcon from "@/public/svgbforeai/threats.svg";
import activeDefenseIcon from "@/public/svgbforeai/activedefense.svg";
import usersIcon from "@/public/svgbforeai/users.svg";

const MenuItems = (): JSX.Element => {
    return (
        <div className="pt-space5 flex flex-col justify-start items-start text-nowrap text-color2">
            <MenuItemLinkWithIcon href={"/"} label={"Dashboard"} iconPath={dashboardIcon} />
            <MenuItemLinkWithIcon href={"/pages/mybrand"} label={"My Brand"} iconPath={myBrandIcon} />
            <MenuItemLinkWithIcon href={"/pages/threats"} label={"Threats"} iconPath={threatsIcon} />
            <MenuItemLinkWithIcon href={"/pages/activedefense"} label={"Active Defense"} iconPath={activeDefenseIcon} />
            <MenuItemLinkWithIcon href={"/pages/users"} label={"Users"} iconPath={usersIcon} />
        </div>
    );
};

export default MenuItems;
