"use client"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ProgressBarcircular() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className="w-auto h-[300px] flex flex-row justify-start items-start bg-color0-transparent text-color1">
            <svg className="rotate-270" width="300" height="300" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-color1 stroke-[15%] fill-none" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="stroke-color7 stroke-[15%] fill-none"
                    style={{ pathLength: scrollXProgress, strokeDashoffset: 0 }}
                />
            </svg>

            <ul ref={ref} className="flex w-[600px] h-[300px] overflow-x-scroll px-[0px] py-[20px] mx-0 my-0">
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="mr-[20px] grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
                <li className="m-0 grow-0 shrink-0 basis-[200px] bg-yellow-200"></li>
            </ul>
        </div>
    );
}