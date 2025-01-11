"use client"
import Image from "next/image";
import logo from "@/public/images/logo.png";
import consulting from "@/public/images/consulting.png";
import rnd from "@/public/images/rnd.png";
import outsorcing from "@/public/images/outsorcing.png";
import { motion } from "framer-motion";

export default function Home() {
    return (
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
        <main className=" min-w-screen min-h-screen flex flex-col justify-start items-center sm:items-start bg-color1-transparent overflow-x-hidden">
            <div id="view1" className="pt-space9 w-screen max-w-full h-screen flex flex-col justify-between items-center overflow-x-hidden">
                <div id="imageContainer" className="h-[70%]">
                    <Image
                        src={logo}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    >
                    </Image>
                </div>
                <div className="w-full h-[30%] flex flex-col justify-center items-center text-2xl text-color0">
                    <div className="text-color7"><span className="text-color8">42computing</span> is a deep tech research and development company.</div>
                    <div className="text-color7">Our vision is to build superior solutions for real-world problems using blockchain, distributed systems, artificial intelligence, computer vision, and AR/VR.</div>
                    <div className="text-color7">We use cutting-edge knowledge to help organizations augment and transform their business processes.</div>
                </div>
            </div>

            <div id="grid" className="pt-space8 w-screen max-w-full h-screen max-h-full grid grid-rows-3 grid-cols-2 text-color7 text-2xl">
                <div id="11" className="p-space5 flex flex-col justify-center items-end">
                    <Image
                        src={consulting}
                        width={0}
                        height={0}
                        alt="Picture of the author"
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                    >
                    </Image>
                </div>

                <motion.div id="12" className="p-space5 flex flex-col justify-around items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-3xl text-color8">Consulting</h1>
                    <div className="pt-space3">We offer strategic architecting and consulting, as well as innovation workshops. We provide technical leadership and help to determine bounds of what’s currently technically possible.</div>
                </motion.div>

                <motion.div id="21" className="p-space5 flex flex-col justify-around items-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-3xl text-color8">Research & Development</h1>
                    <div className="text-end">We perform state-of-the-art research leading to feasibiity studies and rapid software prototype design and development.</div>
                </motion.div>

                <div id="22" className="p-space5 flex flex-col justify-center items-start">
                    <Image
                        src={rnd}
                        width={0}
                        height={0}
                        alt="Picture of the author"
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                    >
                    </Image>
                </div>

                <div id="31" className="p-space5 flex flex-col justify-center items-end">
                    <Image
                        src={outsorcing}
                        width={0}
                        height={0}
                        alt="Picture of the author"
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                    >
                    </Image>
                </div>

                <motion.div id="32" className="p-space5 flex flex-col justify-around items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}>
                    <h1 className="text-3xl text-color8">Outsourcing</h1>
                    <div>We build custom software solutions using blockchain, machine learning, and AR/VR and integrate them with client's existing IT systems.</div>
                </motion.div>
            </div>
        </main>

        // </div>
    );
}
