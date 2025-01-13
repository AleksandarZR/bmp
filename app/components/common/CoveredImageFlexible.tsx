"use client";
import Image from "next/image";
import image from "@/public/images/consulting.png";
import { motion, useScroll } from "framer-motion";

interface Properties {
    customStyle: string;
}

const CoveredImageFlexible = ({customStyle}: Properties) => {
    return (
        <div id="image-container" className={`relative bg-white ${customStyle}`}>
            <motion.div className="absolute w-[50%] h-[100%] bg-color2-transparent"
                animate={{ scaleX: [1, 0], origin: "left" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: 0 }}
                viewport={{ once: true }}
                style={{originX: 0}}
            >
            </motion.div>

            <motion.div className="absolute left-[50%] w-[50%] h-[100%] bg-color2-transparent"
                animate={{ scaleX: [1, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: 0 }}
                viewport={{ once: true }}
                style={{originX: "right"}}
            >
            </motion.div>

            <Image
                src={image}
                alt="image"
                className="h-full w-full"
            />
        </div>
    );
};

export default CoveredImageFlexible;
