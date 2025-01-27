"use client";
import Image from "next/image";
import image from "@/public/images/consulting.png";
import { motion, useScroll } from "framer-motion";
import { JSX } from "react";

interface Properties {
    customStyle: string;
    imagePath: string
}

const CoveredImageFlexible = ({customStyle, imagePath}: Properties): JSX.Element => {
    return (
        <div id="image-container" className={`relative ${customStyle}`}>
            <motion.div className="absolute left-0 min-w-[50%] min-h-[100%] bg-color2-transparent"
                // animate={{ scaleX: [1, 0] }}
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                viewport={{ once: false }}
                style={{originX: "left"}}
            >
            </motion.div>

            <motion.div className="absolute right-0 min-w-[50%] min-h-[100%] bg-color2-transparent"
                // animate={{ scaleX: [1, 0] }}
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                viewport={{ once: false }}
                style={{originX: "right"}}
            >
            </motion.div>

            <img
                src={imagePath}
                alt="image"
                className="h-full w-auto"
            />
        </div>
    );
};

export default CoveredImageFlexible;
