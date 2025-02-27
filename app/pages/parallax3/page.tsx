'use client'
import { motion, useScroll, useTransform, inView, useInView } from "framer-motion";
import { useState, useRef } from "react";
import executioner from "@/public/images/executioner.png";
import frostGiant from "@/public/images/frost-giant.png";
import thor from "@/public/images/thor2.png";

export default function Parallax3() {
    const { scrollYProgress, scrollY } = useScroll();
    const y = useTransform(scrollY, (value: any) => -3.5 * value)
    const scaleThor = useTransform(scrollYProgress, (value: any) => 1 + 5 * value)

    const battleContainerRef = useRef(null);
    const battleContainerInView: boolean = useInView(battleContainerRef);

    console.log("battleContainerInView", battleContainerInView);

    return (
        <div id="page" className="w-full h-full bg-color0-transparent text-color1">
            <motion.div
                id="thor"
                className="fixed w-full h-full z-[45] flex flex-col justify-center items-center pointer-events-none"
                style={{ translateY: y, scale: scaleThor }}
            >
                <img className="md:hidden sm:hidden fixed top-[25%] left-[10%] sm:left-[0%] w-[75%] sm:w-[200%] h-[auto] z-[50] pointer-events-none" src="/images/thor2.png" />
                <img className="lg:hidden fixed top-[10%] left-[10%] sm:left-[0%] w-[75%] sm:w-[200%] h-[auto] z-[50] pointer-events-none" src="/images/thor.png" />
            </motion.div>

            <video id="video" className="w-full h-[70vh] object-cover"
                src="/videos/thunder3.mp4"
                autoPlay
                muted loop>
            </video>

            <div id="headlineContainer" className="h-[30vh] flex flex-col justify-center items-center bg-color1">
                <h1 id="headline" className="px-[1rem] text-color0 text-center text-[10vw] font-serif font-extrabold overflow-hidden overflow-y-hidden drop-shadow-[3px_3px_10px_rgb(255,0,0)]">Thor</h1>
            </div>

            <div id="overflow" className="px-space10 sm:px-space22 pb-space10 w-full max-w-full bg-color1 text-color0 overflow-x-hidden text-center">
                <motion.p id="text1" className="mt-space8 mb-0 leading-10 text-justify text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.75, ease: "easeInOut" }}
                    viewport={{ once: false }}
                >
                    Thor Odinson is a superhero appearing in American comic books published by Marvel Comics.
                    Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared
                    in Journey into Mystery #83 (1962) and first received his own title with Thor #126 (1966). Thor is an
                    adaptation of the deity of the same name from Norse mythology, and many aspects of Thor's character are
                    based on Norse myth. Comic books featuring Thor have been published across several volumes since the
                    character's introduction.
                </motion.p>

                <motion.p id="text2" className="mt-space9 mb-0 leading-10 text-justify text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.75, ease: "easeInOut" }}
                >
                    Thor is one of the gods of Asgard and the son of the Asgardian king Odin. In addition to
                    his Asgardian strength and extended lifespan, Thor wields control over the weather, including rain and
                    lightning. He also carries the enchanted hammer Mjolnir that enhances his abilities and grants him the
                    ability to fly. Thor was first introduced as the alter ego of surgeon Donald Blake who acquired Thor's
                    power, but this was later revealed to be a fabrication by Thor's father. Thor has since assumed other
                    human identities and at times ruled as king of Asgard.
                </motion.p>

                <motion.p id="text2" className="mt-space9 mb-0 leading-10 text-justify text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.75, ease: "easeInOut" }}
                >
                    Thor's cast of supporting characters includes his fellow Asgardians Odin, Sif, The Warriors
                    Three, and Balder the Brave, as well other allies such as Jane Foster, Beta Ray Bill, and Hercules.
                    Thor's arch-nemesis is the Asgardian Loki. Thor is a founding member of the superhero team the Avengers,
                    and he has played a major role in Marvel crossover events, including Avengers Disassembled (2004), Siege
                    (2010), and "The War of the Realms" (2019). Chris Hemsworth portrays the cinematic adaptation of Thor in
                    the Marvel Cinematic Universe, first appearing in Thor (2011).
                </motion.p>

                <motion.div
                    ref={battleContainerRef}
                    id="battleContainer"
                    className="mt-space9 w-full min-h-[100px] flex flex-row justify-center items-center"
                >
                    <motion.div
                        className="flex flex-col justify-end items-center"
                        initial={{ x: -1500 }}
                        animate={
                            battleContainerInView ? {
                                x: 0,
                                transition: {
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 50,
                                    delay: 1.25
                                }
                            } : {
                                x: -1500,
                                transition: {
                                    duration: 2,
                                    type: "spring",
                                    stiffness: 50
                                }
                            }
                        }
                    >
                        <img
                            id="thorBattle"
                            className="h-[500px] w-[535px]"
                            src="/images/thor-attack.png"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col justify-start items-center"
                        initial={{ x: 1500 }}
                        animate={
                            battleContainerInView ? {
                                x: 0,
                                transition: {
                                    duration: 1,
                                    type: "spring",
                                    stiffness: 50,
                                    delay: 1.25
                                }
                            } : {
                                x: 1500,
                                transition: {
                                    duration: 2,
                                    type: "spring",
                                    stiffness: 50
                                }
                            }
                        }
                    >
                        <img
                            id="executionerBattle"
                            className="h-[500px] w-[auto]"
                            src="/images/executioner.png" />
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
}