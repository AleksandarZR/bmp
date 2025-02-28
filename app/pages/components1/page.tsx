"use client";
import ProgressBarCircular from "@/app/components/common/ProgressBarCircular";
import CoveredImage from "@/app/components/common/CoveredImage";
import CoveredImageFlexible from "@/app/components/common/CoveredImageFlexible";
import ButtonLink from "@/app/components/common/ButtonLink";
import { ButtonState } from "@/app/enums/enums";
import ButtonClick from "@/app/components/common/ButtonClick";
import MessageWindow, {
    MessageType,
} from "@/app/components/common/MessageWindow";
import { useState } from "react";

export default function Components1() {
    const [messageWindowVisible, setMessageWindowVisible] = useState(false);

    const buttonClick = () => {
        //alert("Button clicked");
        setMessageWindowVisible(true);
    };

    const onClosingMessageWindow = () => {
        console.log("Closing...");
        setMessageWindowVisible(false);
    };

    return (
        <div className="px-space5 sm:px-space22 pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] pb-space5 sm:pb-space22 w-full min-h-screen flex flex-row flex-wrap justify-start items-start gap-space5 sm:gap-space22 bg-color10 text-color1">
            <ProgressBarCircular></ProgressBarCircular>

            <CoveredImageFlexible
                customStyle="min-w-[100px] min-h-[100px] w-[200px] h-[200px] bg-white"
                imagePath="/images/consulting.png"
            ></CoveredImageFlexible>

            <CoveredImage></CoveredImage>

            <CoveredImageFlexible
                customStyle="min-w-[256px] min-h-[256px] bg-white"
                imagePath="/images/consulting.png"
            ></CoveredImageFlexible>

            <ButtonLink text="Home" link="/"></ButtonLink>

            <ButtonClick
                text="Click me"
                handler={buttonClick}
                state={ButtonState.ENABLED}
                customStyle="bg-white"
            />

            {messageWindowVisible && (
                <MessageWindow
                    messageType={MessageType.INFO}
                    messageContent="aaaaaaaa"
                    onClose={onClosingMessageWindow}
                ></MessageWindow>
            )}
        </div>
    );
}
