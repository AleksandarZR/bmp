"use client"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProgressBarCircular from "@/app/components/common/ProgressBarCircular";
import CoveredImage from "@/app/components/common/CoveredImage";
import CoveredImageFlexible from "../../components/common/CoveredImageFlexible";


export default function Components1() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className="px-space5 pt-space9 w-full h-full flex flex-col justify-start items-start bg-color12 text-color1">
            <ProgressBarCircular></ProgressBarCircular>
            {/* <CoveredImage></CoveredImage> */}
            <CoveredImageFlexible customStyle="w-[200px] h-[200px] bg-white" imagePath="/images/consulting.png"></CoveredImageFlexible>

            <CoveredImage></CoveredImage>

            <CoveredImageFlexible customStyle="w-[128px] h-[256px] bg-white" imagePath="/images/consulting.png"></CoveredImageFlexible>
        </div>
    );
}