"use client"
import ProgressBarCircular from "@/app/components/common/ProgressBarCircular";
import CoveredImage from "@/app/components/common/CoveredImage";
import CoveredImageFlexible from "../../components/common/CoveredImageFlexible";
import ButtonLink from "@/app/components/common/ButtonLink";
import { ButtonState } from "@/app/enums/enums";
import ButtonClick from "@/app/components/common/ButtonClick";


export default function Components1() {

    const buttonClick = () => {
        alert("Button clicked");
    }

    return (
        <div className="px-space5 pt-space9 pb-space5 w-full min-h-screen flex flex-row flex-wrap justify-start items-start gap-space5 bg-color10 text-color1">
            <ProgressBarCircular></ProgressBarCircular>

            <CoveredImageFlexible customStyle="min-w-[100px] min-h-[100px] w-[200px] h-[200px] bg-white" imagePath="/images/consulting.png"></CoveredImageFlexible>

            <CoveredImage></CoveredImage>

            <CoveredImageFlexible customStyle="min-w-[256px] min-h-[256px] bg-white" imagePath="/images/consulting.png"></CoveredImageFlexible>

            <ButtonLink text="Home" link="/"></ButtonLink>

            <ButtonClick text="Click me" handler={buttonClick} state={ButtonState.ENABLED} customStyle="bg-white"/>
        </div>
    );
}