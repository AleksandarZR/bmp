export default function Parallax4() {
    return (
        <div className="w-full h-full">
            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/DC.jpg')]"></div>
            <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8">DC</h1>
            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/Marvel.jpg')]"></div>
            <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8">Marvel</h1>
            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/Spawn.jpg')]"></div>
            <h1 className="px-0 py-space4 w-full text-center text-9xl bg-color8">Spawn</h1>
            <div className="relative min-w-full min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/images/He-Man.jpg')]"></div>
        </div>
    );
}