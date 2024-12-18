import Image from 'next/image';

export default function Parallax3() {
    return (
        <div id="page" className="w-full h-full overflow-x-hidden bg-color0-transparent text-color1">

            <Image src="/images/thor2.png"
                alt="Thor"
                width={500}
                height={500}
                className="fixed top-[25%] left-[10%] h-[75%] w-[auto]"
                style={{ width: "75%", height: "auto" }}
            />

            <video id="Video" className="w-full h-[70vh] object-cover"
                src="videos/thunder3.mp4"
                autoPlay
                muted loop>
            </video>

            <div id="headlineContainer" className="h-[30vh] flex flex-col justify-center items-center bg-color1">
                <h1 id="headline animationTomahawk" className="px-[1rem] text-color0 text-center text-[30vw] font-serif font-extrabold">Thor</h1>
            </div>

            <div className="overflow">
                <p className="hidden" id="text1">Thor Odinson is a superhero appearing in American comic books published by Marvel Comics.
                    Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared
                    in Journey into Mystery #83 (1962) and first received his own title with Thor #126 (1966). Thor is an
                    adaptation of the deity of the same name from Norse mythology, and many aspects of Thor's character are
                    based on Norse myth. Comic books featuring Thor have been published across several volumes since the
                    character's introduction.</p>

                <p className="hidden" id="text2">Thor is one of the gods of Asgard and the son of the Asgardian king Odin. In addition to
                    his Asgardian strength and extended lifespan, Thor wields control over the weather, including rain and
                    lightning. He also carries the enchanted hammer Mjolnir that enhances his abilities and grants him the
                    ability to fly. Thor was first introduced as the alter ego of surgeon Donald Blake who acquired Thor's
                    power, but this was later revealed to be a fabrication by Thor's father. Thor has since assumed other
                    human identities and at times ruled as king of Asgard.</p>

                <p className="hidden" id="text2">Thor's cast of supporting characters includes his fellow Asgardians Odin, Sif, The Warriors
                    Three, and Balder the Brave, as well other allies such as Jane Foster, Beta Ray Bill, and Hercules.
                    Thor's arch-nemesis is the Asgardian Loki. Thor is a founding member of the superhero team the Avengers,
                    and he has played a major role in Marvel crossover events, including Avengers Disassembled (2004), Siege
                    (2010), and "The War of the Realms" (2019). Chris Hemsworth portrays the cinematic adaptation of Thor in
                    the Marvel Cinematic Universe, first appearing in Thor (2011).</p>
            </div>
        </div>
    );
}