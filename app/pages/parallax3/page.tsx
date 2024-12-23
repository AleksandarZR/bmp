'use client'
import styles from './page.module.css';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

/**
 * Prisluskuje dogadjaj "scroll" i dodeljuje vrednost globalnoj varijabli "--scroll"
 * 
 * The pageYOffset property returns the pixels a document has scrolled from the upper left corner of the window.
 * The pageYOffset property is equal to the scrollY property.
 * 
 * The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.
 * 
 * The innerHeight property returns the height of a window's content area.
 */
/*window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString()
        );
    },
    false
);*/

export default function Parallax3() {
    const [thorPosition, setThorPosition] = useState(0);
    // const onScroll = () => {
    //     console.log("onScroll called");
    //     document.body.style.setProperty("--scroll", (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
    // }

    function onResize() {
        console.log("onResize called");
        document.body.style.setProperty("--scroll", (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
    }

    function onScroll() {
        console.log("ON SCROLL CALLED");
        document.body.style.setProperty("--scroll", (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
        let position = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        setThorPosition(position);
    }

    useEffect(() => {
        // Add eventlistener to window
        window.addEventListener('scroll', onScroll); //, { passive: true }
        window.addEventListener('resize', onResize);

        // Remove event on unmount to prevent a memory leak with the cleanup
        // return () => {
        //     window.removeEventListener("scroll", onScroll);
        // }
    }, []);

    //id="page" classNamr="overflow-x-hidden... "
    return (
        <div id="page" className="w-full h-full  bg-color0-transparent text-color1">

            {/* <Image src="/images/thor2.png"
                alt="Thor"
                width={0}
                height={0}
                className={styles.thor}
                sizes="100vw"
                style={{ width: "75%", height: "auto" }}
            /> */}
            {/* "fixed top-[25%] left-[10%] animate-scaleAndTranslate z-80" */}

            <img className={styles.thor} src="/images/thor2.png"/>
            

            <video id="Video" className="w-full h-[70vh] object-cover"
                src="/videos/thunder3.mp4"
                autoPlay
                muted loop>
            </video>

            <div id="headlineContainer" className="h-[30vh] flex flex-col justify-center items-center bg-color1">
                <h1 id="headline animationTomahawk" className="px-[1rem] text-color0 text-center text-[10vw] font-serif font-extrabold overflow-hidden overflow-y-hidden drop-shadow-[3px_3px_10px_rgb(255,0,0)]">Thor</h1>
            </div>

            <h1 className={styles.test}>
                AAAAA
            </h1>

            <div id="overflow" className="pb-[20rem] w-full max-w-full bg-color1 text-color0 overflow-x-hidden text-center">
                <p id="text1 hidden" className="mt-[0rem] mb-[5rem] px-[10vw] py-0 leading-10 text-justify text-2xl" >Thor Odinson is a superhero appearing in American comic books published by Marvel Comics.
                    Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared
                    in Journey into Mystery #83 (1962) and first received his own title with Thor #126 (1966). Thor is an
                    adaptation of the deity of the same name from Norse mythology, and many aspects of Thor's character are
                    based on Norse myth. Comic books featuring Thor have been published across several volumes since the
                    character's introduction.</p>

                <p id="text2 hidden" className="mt-[10rem] mb-[5rem] px-[10vw] py-0 leading-10 text-justify text-2xl" >Thor is one of the gods of Asgard and the son of the Asgardian king Odin. In addition to
                    his Asgardian strength and extended lifespan, Thor wields control over the weather, including rain and
                    lightning. He also carries the enchanted hammer Mjolnir that enhances his abilities and grants him the
                    ability to fly. Thor was first introduced as the alter ego of surgeon Donald Blake who acquired Thor's
                    power, but this was later revealed to be a fabrication by Thor's father. Thor has since assumed other
                    human identities and at times ruled as king of Asgard.</p>

                <p id="text2 hidden" className="mt-[10rem] mb-[5rem] px-[10vw] py-0 leading-10 text-justify text-2xl" >Thor's cast of supporting characters includes his fellow Asgardians Odin, Sif, The Warriors
                    Three, and Balder the Brave, as well other allies such as Jane Foster, Beta Ray Bill, and Hercules.
                    Thor's arch-nemesis is the Asgardian Loki. Thor is a founding member of the superhero team the Avengers,
                    and he has played a major role in Marvel crossover events, including Avengers Disassembled (2004), Siege
                    (2010), and "The War of the Realms" (2019). Chris Hemsworth portrays the cinematic adaptation of Thor in
                    the Marvel Cinematic Universe, first appearing in Thor (2011).</p>
            </div>
        </div>
    );
}