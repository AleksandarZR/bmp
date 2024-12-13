export default function Parallax2() {
    return (
        <div className="relative w-full max-w-full h-screen perspective-[1px] perspective-origin-center-center overflow-x-hidden bg-color12 text-color0"
            style={{
                fontFamily: "Helvetica, Sans-serif"
            }}
        >
            <div className="transform-style-3d h-screen" id="parallax">
                <div
                    id="layer-1"
                    className="bg-bottom bg-cover bg-no-repeat bg-[url('/images/spaceLayer01.png')] absolute top-0 right-0 bottom-0 left-0"
                    style={{
                        transform: "translate3d(0, -20px, .6px) scale(.5)",
                    }}
                >
                    {/* Content sticked to first layer */}
                    <div className="absolute top-[99vh] w-full max-w-full overflow-x-hidden bg-color12 flex flex-col justify-center items-center left-[0px]" id="content-sticked-to-first-layer">
                        <div className="w-full max-w-full bg-color12 overflow-x-hidden overflow-y-hidden text-center text-[15vw] font-bold" id="headline">
                            <h1>Venom</h1>
                        </div>

                        <div className="w-[90%] h-auto self-center overflow-x-hidden overflow-y-hidden flex flex-col justify-start items-center text-[2rem]" id="info">

                            <p className="px-space8 py-[3rem] max-w-full text-justify text-center overflow-x-hidden" id="text1">
                                Venom is a character appearing in American comic books published by
                                Marvel
                                Comics. The character is a sentient alien symbiote with an amorphous, liquid-like form, who
                                survives by
                                bonding with a host, usually human. This dual-life form receives enhanced powers and usually
                                refers to
                                itself as "Venom". The symbiote was originally introduced as a living alien costume in The
                                Amazing
                                Spider-Man #252 (May 1984), with a full first appearance as Venom in The Amazing Spider-Man
                                #300 (May
                                1988).
                            </p>

                            <p className="px-space8 py-[3rem] max-w-full text-justify text-center overflow-x-hidden" id="text2">
                                The Venom symbiote's first human host was Spider-Man himself, who
                                eventually
                                discovered its true nefarious nature and separated himself from the creature in The Amazing
                                Spider-Man
                                #258 (November 1984)[2]—with a brief rejoining five months later in Web of Spider-Man #1.[3]
                                The
                                symbiote went on to merge with other hosts, beginning with Eddie Brock, its second and
                                best-known host,
                                with whom it first became Venom
                            </p>

                            <p className="px-space8 py-[3rem] max-w-full text-justify text-center overflow-x-hidden" id="text3">
                                A fan-favorite character and well-known figure in popular culture,
                                Venom
                                (primarily the Eddie Brock incarnation) is the most recognizable Spider-Man antagonist not
                                first
                                introduced during the original Lee/Ditko run. He has been featured in various media
                                adaptations of
                                Spider-Man over the years, including feature films, television series and video games. The
                                character was
                                portrayed by Tobey Maguire and Topher Grace in Spider-Man 3 (2007), with Tom Hardy primarily
                                portraying
                                the character in the Sony's Spider-Man Universe films Venom (2018) and Venom: Let There Be
                                Carnage
                                (2021), as well as an uncredited post-credit scene appearance in the Marvel Cinematic
                                Universe film
                                Spider-Man: No Way Home (2021).
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    id="layer-2"
                    className="bg-left bg-auto bg-no-repeat bg-[url('/images/spaceLayer02.png')] absolute top-0 right-0 bottom-0 left-0"
                    style={{
                        transform: "translate3d(-50px, -5px, .2px) scale(.5)",
                    }}>
                </div>

                <div
                    id="layer-3"
                    className="bg-right bg-auto bg-no-repeat bg-[url('/images/spaceLayer03.png')] absolute top-0 right-[100px] bottom-0 left-0"
                    style={{
                        transform: "translate3d(0, 70px, .18px) scale(.8)",
                    }}>
                </div>

                <div
                    id="layer-4"
                    className="bg-right bg-auto bg-no-repeat bg-[url('/images/spaceLayer04.png')] absolute top-0 right-[70px] bottom-0 left-0"
                    style={{
                        transform: "translate3d(0, -110px, .20px) scale(.5)",
                    }}>
                </div>

                <div
                    id="layer-5"
                    className="bg-right bg-auto bg-no-repeat bg-[url('/images/spaceLayer05.png')] absolute top-0 right-0 bottom-0 left-0"
                    style={{
                        transform: "translate3d(0, 150px, .13px) scale(.2)",
                    }}>
                </div>

                <div
                    id="layer-99"
                    className="bg-top-center bg-cover bg-no-repeat bg-[url('/images/spaceLayer99.jpg')] bg-fixed absolute top-0 right-0 bottom-0 left-0"
                >
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[100px] left-[180px]" id="star1">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[150px] left-[800px]" id="star2">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[350px] left-[200px]" id="star3">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[700px]" id="star4">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[400px] right-[300px]" id="star5">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[250px] left-[500px]" id="star6">﹡</div>

                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                    <div className="absolute animate-pulseStar origin-center text-[1.5rem] text-color0 top-[500px] right-[450px]" id="star7">﹡</div>
                </div>

                <div className="h-[200vh] md:h-[300vh] sm:h-[350vh]" id="buffer">

                </div>
            </div>
        </div >
    );
}