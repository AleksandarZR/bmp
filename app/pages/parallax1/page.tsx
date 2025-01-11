import Image from "next/image";
import blockchain from "@/public/images/blockchain.jpg";
import nodejs from "@/public/images/nodejs.png";

export default function Parallax1() {
    return (
        <div className="w-full h-full">
            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-color1 flex flex-col justify-center items-center">
                <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-[url('/images/blockchain.png')]"></div>
            </div>

            {/* <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8 z-50">Backend</h1> */}

            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-color0 flex flex-col justify-center items-center">
                <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-[url('/images/node.png')]"></div>
            </div>

            {/* <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8">Frontend</h1> */}

            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-color1 flex flex-col justify-center items-center">
                <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-[url('/images/next.png')]"></div>
            </div>

            {/* <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8">Database</h1> */}

            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-color0 flex flex-col justify-center items-center">
                <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-[url('/images/MongoDB.png')]"></div>
            </div>
        </div>
    );
}