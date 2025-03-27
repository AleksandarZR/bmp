"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

/** Flag that is used to prevent any actions in case hamburger menu is clicked and animation for openning or closing (showing dropdown menu) is started*/
var animationON = false;

enum HamburgerState {
    OPEN = "open",
    CLOSED = "closed",
}

var hamburgerState: HamburgerState = HamburgerState.CLOSED;

interface Props {
    onHamburgerClicked(isDropDownVisible: boolean): void;
}

const HamburgerMenu = (props: Props) => {
    const [dropDownVisible, setDropDownVisible] = useState(false);

    const hamburgerClicked = () => {
        setDropDownVisible(!dropDownVisible);
        props.onHamburgerClicked(!dropDownVisible);
    };

    /**Handles the onclick event */
    const hamburgerClickedEventHandler = () => {
        if (animationON) {
            console.log("RETURN !");
            return;
        }

        let hamburger = document.getElementById(
            "hamburgerContainerId"
        ) as HTMLElement;

        if (hamburgerState === HamburgerState.CLOSED) {
            translateBarsOnOpen();
            setTimeout(rotateBarsOnOpen, 400);
            animationON = true;
        } else if (hamburgerState === HamburgerState.OPEN) {
            rotateBarsOnClosed();
            setTimeout(translateBarsOnClosed, 400);
            animationON = true;
        } else {
            console.log("Error. Hamburger contains neither open nor closed");
        }
    };

    /** Translate bars on opening the menu. The 1st and the 4th bar are going to the middle to line in with thw 2nd and the 3rd bar that are already there*/
    const translateBarsOnOpen = () => {
        (document.getElementById("bar1") as HTMLElement).style.top = "14px";
        (document.getElementById("bar4") as HTMLElement).style.top = "14px";
    };

    /** Translate bars on closing the menu. The 1st bar is going up. The 4th bar is going down, thus forming the hamburger icon*/
    const translateBarsOnClosed = () => {
        (document.getElementById("bar1") as HTMLElement).style.top = "0px";
        (document.getElementById("bar4") as HTMLElement).style.top = "28px";

        hamburgerState = HamburgerState.CLOSED;
        animationON = false;
    };

    /** All 4 bars are rotating thus forming the X icon */
    const rotateBarsOnOpen = () => {
        console.log("Rotate bars!");

        (document.getElementById("bar1") as HTMLElement).style.transform =
            "rotate(45deg)";
        (document.getElementById("bar2") as HTMLElement).style.transform =
            "rotate(45deg)";
        (document.getElementById("bar3") as HTMLElement).style.transform =
            "rotate(-45deg)";
        (document.getElementById("bar4") as HTMLElement).style.transform =
            "rotate(-45deg)";

        hamburgerState = HamburgerState.OPEN;
        animationON = false;
    };

    /** All bars are rotating to be lined in the middle, making only one bar visible */
    const rotateBarsOnClosed = () => {
        console.log("Rotate bars!");

        (document.getElementById("bar1") as HTMLElement).style.transform =
            "rotate(0deg)";
        (document.getElementById("bar2") as HTMLElement).style.transform =
            "rotate(0deg)";
        (document.getElementById("bar3") as HTMLElement).style.transform =
            "rotate(0deg)";
        (document.getElementById("bar4") as HTMLElement).style.transform =
            "rotate(0deg)";
    };

    return (
        <>
            <div className="relative flex justify-center items-center text-center">
                <div
                    className="border-none flex justify-center items-center pr-2"
                    onClick={hamburgerClicked}
                >
                    <div
                        className="relative m-0 w-8 h-8 cursor-pointer"
                        id="hamburgerContainerId"
                        onClick={hamburgerClickedEventHandler}
                    >
                        <span
                            className="absolute left-0 top-0 inline-block w-10 h-1 bg-white rounded transition-all duration-200 ease-in-out"
                            id="bar1"
                        ></span>
                        <span
                            className="absolute left-0 top-3.5 inline-block w-10 h-1 bg-white rounded transition-all duration-200 ease-in-out"
                            id="bar2"
                        ></span>
                        <span
                            className="absolute left-0 top-3.5 inline-block w-10 h-1 bg-white rounded transition-all duration-200 ease-in-out"
                            id="bar3"
                        ></span>
                        <span
                            className="absolute left-0 top-7 inline-block w-10 h-1 bg-white rounded transition-all duration-200 ease-in-out"
                            id="bar4"
                        ></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
