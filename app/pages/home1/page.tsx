"use client";
import styles from "./page.module.css";

export default function Home1() {
    return (
        <>
            <video
                id="video"
                className="fixed w-full h-full object-cover"
                src="videos/circuits42.mp4"
                autoPlay
                muted
                loop
            ></video>

            <main
                id="view1"
                className="pt-[calc(var(--navheight)+var(--space5))] sm:pt-[calc(var(--navheight)+var(--space22))] px-space5 sm:px-space2 pb-space5 min-w-screen min-h-screen flex flex-col justify-between items-center sm:items-start overflow-x-hidden"
            >
                <div className="w-full flex flex-col justify-center items-center text-5xl sm:text-4xl text-color7 text-center z-10">
                    <div className={styles.textWithBorder}>
                        Moderately Awesome Developers
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center text-2xl sm:text-xl text-color7 text-center z-20">
                    <div className={styles.textWithBorder}>
                        <span className="text-color8">42computing</span> is a
                        deep tech research and development company.
                    </div>
                    <div className={styles.textWithBorder}>
                        Our vision is to build superior solutions for real-world
                        problems using blockchain, distributed systems,
                        artificial intelligence, computer vision, and AR/VR.
                    </div>
                    <div className={styles.textWithBorder}>
                        We use cutting-edge knowledge to help organizations
                        augment and transform their business processes.
                    </div>
                </div>
            </main>
        </>
    );
}
