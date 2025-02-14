"use client"
import Image from "next/image";
import logo from "@/public/images/logo21.png";
import logo3 from "@/public/images/logo22.png";
import logo2 from "@/public/images/logo23.png";
import consulting from "@/public/images/consulting.png";
import rnd from "@/public/images/rnd.png";
import outsorcing from "@/public/images/outsorcing.png";
import { motion } from "framer-motion";
import CoveredImageFlexible from "./components/common/CoveredImageFlexible";
import { useEffect, useState } from "react";

export default function Home() {
    const [activeLogo, setActiveLogo] = useState(logo);
    const [count, setCount] = useState(1);
    const logos = [logo3, logo2, logo];

    useEffect(() => {
        let timer = setTimeout(() => {
            if (count === 1) {
                setActiveLogo(logo3);
            }
            if (count === 2) {
                setActiveLogo(logo2);
            }
            if (count === 3) {
                setActiveLogo(logo);
            }
            if (count > 5) {
                setCount(0);
            } else {
                setCount((count) => count + 1);
            }
        }, 1000);

        // Some effects require cleanup to reduce memory leaks. Timeouts, subscriptions, event listeners
        return () => clearTimeout(timer)
    }, [count, activeLogo]);

    return (
        <main className="pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] px-space5 pb-space5 min-w-screen min-h-screen flex flex-col justify-start items-center sm:items-start bg-color10 overflow-x-hidden">
            <div id="view1" className="w-screen max-w-full h-screen flex flex-col justify-around items-center overflow-x-hidden">
                <motion.div id="imageContainer" className="lg:h-[auto]  w-[auto] bg-color1 shadow-[8px_8px_8px_8px_rgba(0,0,0,0.2)]">
                    <Image
                        src={activeLogo}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    >
                    </Image>
                </motion.div>

                <div className="w-full lg:h-[30%] md:h-[30%] flex flex-col justify-center items-center text-2xl text-color0 text-center">
                    <div className="text-color7"><span className="text-color8">42computing</span> is a deep tech research and development company.</div>
                    <div className="text-color7">Our vision is to build superior solutions for real-world problems using blockchain, distributed systems, artificial intelligence, computer vision, and AR/VR.</div>
                    <div className="text-color7">We use cutting-edge knowledge to help organizations augment and transform their business processes.</div>
                </div>
            </div>

            <div id="view2" className="pt-[calc(var(--navheight)+2*var(--space5))] w-screen max-w-full lg:h-screen grid grid-rows-3 grid-cols-2 gap-space5 text-color7 text-2xl sm:text-xl">
                <div id="11" className="flex flex-col justify-center items-end">
                    <CoveredImageFlexible customStyle="max-h-[100%] bg-white" imagePath="/images/consulting.png" />
                </div>

                <motion.div id="12" className="flex flex-col justify-around items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-3xl text-color8 font-bold">Consulting</h1>
                    <div className="pt-space3">We offer strategic architecting and consulting, as well as innovation workshops. We provide technical leadership and help to determine bounds of what’s currently technically possible.</div>
                </motion.div>

                <motion.div id="21" className="flex flex-col justify-around items-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-3xl text-color8 font-bold">Research & Development</h1>
                    <div className="text-end">We perform state-of-the-art research leading to feasibility studies and rapid software prototype design and development.</div>
                </motion.div>

                <div id="22" className="flex flex-col justify-center items-start">
                    <CoveredImageFlexible customStyle="max-h-[100%] bg-color0" imagePath="/images/rnd.png" />
                </div>

                <div id="31" className="flex flex-col justify-center items-end">
                    <CoveredImageFlexible customStyle="max-h-[100%] w-[auto] bg-white" imagePath="/images/outsorcing.png" />
                </div>

                <motion.div id="32" className="flex flex-col justify-around items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}>
                    <h1 className="text-3xl text-color8 font-bold">Outsourcing</h1>
                    <div>We build custom software solutions using blockchain, machine learning, and AR/VR and integrate them with client's existing IT systems.</div>
                </motion.div>
            </div>
        </main>
    );
}
