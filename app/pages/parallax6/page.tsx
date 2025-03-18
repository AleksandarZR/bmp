"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./page.module.css";

export default function Parallax6() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
    });

    console.log(entry);

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50,
        },
    };
    return (
        <>
            <div
                id="layer1"
                className="bg-bottom bg-cover bg-no-repeat bg-[url('/images/spaceLayer01.png')] absolute top-0 right-0 bottom-0 left-0 z-20"
            >
                {/* Content sticked to first layer */}
                <div
                    className="absolute top-[99vh] w-full max-w-full overflow-x-hidden bg-color12 flex flex-col justify-center items-center left-[0px]"
                    id="content-sticked-to-first-layer"
                >
                    <div
                        className="w-full max-w-full bg-color12 overflow-x-hidden overflow-y-hidden text-center text-[15vw] font-bold"
                        id="headline"
                    >
                        <h1>Venom</h1>
                    </div>

                    <div
                        className="px-space5 sm:px-space22 w-[90%] h-auto self-center overflow-x-hidden overflow-y-hidden flex flex-col justify-start items-center text-[2rem] sm:text-[1rem]"
                        id="info"
                    >
                        <p
                            className="px-space8 sm:px-0 py-[3rem] max-w-full text-justify text-center overflow-x-hidden"
                            id="text1"
                        >
                            Venom is a character appearing in American comic
                            books published by Marvel Comics. The character is a
                            sentient alien symbiote with an amorphous,
                            liquid-like form, who survives by bonding with a
                            host, usually human. This dual-life form receives
                            enhanced powers and usually refers to itself as
                            "Venom". The symbiote was originally introduced as a
                            living alien costume in The Amazing Spider-Man #252
                            (May 1984), with a full first appearance as Venom in
                            The Amazing Spider-Man #300 (May 1988).
                        </p>

                        <p
                            className="px-space8 sm:px-0 py-[3rem] max-w-full text-justify text-center overflow-x-hidden"
                            id="text2"
                        >
                            The Venom symbiote's first human host was Spider-Man
                            himself, who eventually discovered its true
                            nefarious nature and separated himself from the
                            creature in The Amazing Spider-Man #258 (November
                            1984)[2]—with a brief rejoining five months later in
                            Web of Spider-Man #1.[3] The symbiote went on to
                            merge with other hosts, beginning with Eddie Brock,
                            its second and best-known host, with whom it first
                            became Venom
                        </p>

                        <p
                            className="px-space8 sm:px-0 py-[3rem] max-w-full text-justify text-center overflow-x-hidden"
                            id="text3"
                        >
                            A fan-favorite character and well-known figure in
                            popular culture, Venom (primarily the Eddie Brock
                            incarnation) is the most recognizable Spider-Man
                            antagonist not first introduced during the original
                            Lee/Ditko run. He has been featured in various media
                            adaptations of Spider-Man over the years, including
                            feature films, television series and video games.
                            The character was portrayed by Tobey Maguire and
                            Topher Grace in Spider-Man 3 (2007), with Tom Hardy
                            primarily portraying the character in the Sony's
                            Spider-Man Universe films Venom (2018) and Venom:
                            Let There Be Carnage (2021), as well as an
                            uncredited post-credit scene appearance in the
                            Marvel Cinematic Universe film Spider-Man: No Way
                            Home (2021).
                        </p>
                    </div>
                </div>
            </div>

            <motion.div
                className={styles.box}
                style={{ y: y1, x: -50, width: 100, height: 100 }}
            />

            <motion.div
                className={styles.box}
                style={{ y: y2, x: 50, background: "salmon" }}
            />

            <div style={{ height: 800 }} />

            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 2, ease: "easeOut" }}
                ref={ref}
                className={styles.magic}
            />

            <div
                id="layer-99"
                className="bg-top-center bg-cover bg-no-repeat bg-[url('/images/spaceLayer99.jpg')] bg-fixed absolute top-0 right-0 bottom-0 left-0 z-10"
            ></div>

            {/* <div
                id="buffer"
                className="h-[200vh] md:h-[300vh] sm:h-[350vh]"
            ></div> */}
        </>
    );
}
