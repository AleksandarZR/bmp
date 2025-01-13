"use client";
import Image from "next/image";
import image from "@/public/images/consulting.png";
import { motion, useScroll } from "framer-motion";
import { JSX } from "react";

interface Properties {
    customStyle: string;
    imagePath: string;
}

const CoveredImageFlexible = ({customStyle, imagePath}: Properties): JSX.Element => {
    return (
        <div id="image-container" className={`relative ${customStyle}`}>
            <motion.div className="absolute w-[50%] min-h-[100%] bg-color2-transparent"
                // animate={{ scaleX: [1, 0] }}
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                transition={{ duration: 3, delay: 0.75, ease: "easeInOut" }}
                viewport={{ once: false }}
                style={{originX: 0}}
            >
            </motion.div>

            <motion.div className="absolute right-0 w-[50%] min-h-[100%] bg-color2-transparent"
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
                className="max-h-full max-w-full"
            />
        </div>
    );
};

export default CoveredImageFlexible;
