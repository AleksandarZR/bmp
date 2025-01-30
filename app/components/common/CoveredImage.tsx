"use client";
import Image from "next/image";
import image from "@/public/images/consulting.png";
import { motion, useScroll } from "framer-motion";
import { JSX } from "react";

const CoveredImage = (): JSX.Element => {
    return (
        <div id="image-container" className="relative bg-white">
            <motion.div className="absolute w-[256px] h-[512px] bg-color1-transparent"
                animate={{ scaleX: [1, 0], origin: "left" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: 0 }}
                viewport={{ once: true }}
                style={{originX: 0}}
            >
            </motion.div>

            <motion.div className="absolute left-[256px] w-[257px] h-[512px] bg-color1-transparent"
                animate={{ scaleX: [1, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: 0 }}
                viewport={{ once: true }}
                style={{originX: 1}}
            >
            </motion.div>

            <Image
                src={image}
                alt="Logo"
                className="h-auto w-auto"
            />
        </div>
    );
};

export default CoveredImage;
