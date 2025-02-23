"use client";
import Image from "next/image";
import logo from "@/public/images/logo21.png";
import logo3 from "@/public/images/logo22.png";
import logo2 from "@/public/images/logo23.png";
import consulting from "@/public/images/consulting.png";
import rnd from "@/public/images/rnd.png";
import outsorcing from "@/public/images/outsorcing.png";
import { motion } from "framer-motion";
import CoveredImageFlexible from "@/app/components/common/CoveredImageFlexible";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <video
                id="video"
                className="fixed w-full h-full object-cover"
                src="/videos/circuits42.mp4"
                autoPlay
                muted
                loop
            ></video>

            <main className="w-screen max-w-full min-h-screen flex flex-col justify-start items-center overflow-x-hidden">
                <div
                    id="view1"
                    className="pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] px-space5 pb-space5 min-w-screen min-h-screen flex flex-col justify-between items-center sm:items-start overflow-x-hidden"
                >
                    <div className="w-full flex flex-col justify-center items-center text-5xl text-color7 text-center z-20">
                        <div className={styles.textWithBorder}>
                            Moderately Awesome Developers
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center text-2xl text-color7 text-center z-20">
                        <div className={styles.textWithBorder}>
                            <span className="text-color8">42computing</span> is
                            a deep tech research and development company.
                        </div>
                        <div className={styles.textWithBorder}>
                            Our vision is to build superior solutions for
                            real-world problems using blockchain, distributed
                            systems, artificial intelligence, computer vision,
                            and AR/VR.
                        </div>
                        <div className={styles.textWithBorder}>
                            We use cutting-edge knowledge to help organizations
                            augment and transform their business processes.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
