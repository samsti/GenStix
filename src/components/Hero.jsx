export default function Hero() {
    return (
        <div className="relative min-h-screen px-6 pt-14 lg:px-8 bg-black text-white overflow-hidden">
            {/* Svítící pozadí */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] rounded-half bg-[#645CFF] opacity-40 blur-[180px] z-0" />

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center text-center">
                <div>
                    <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white font-unbounded leading-tight max-w-[1000px] mx-auto">
                        Nepřicházejte o klienty kvůli zmeškaným hovorům
                    </h1>
                    <p className="mt-8 text-lg text-gray-300 sm:text-xl">
                        Vaše 24/7 AI recepční za vás vyřídí rezervace i hovory.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="relative inline-block rounded-md bg-gradient-to-r from-[#645CFF] to-[#7F5CFF] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(100,92,255,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#645CFF]"
                        >
                            Vyzkoušejte demo hovor
                        </a>

                        <a href="#services" className="text-sm font-semibold text-gray-300 hover:text-white">
                            Jak to funguje <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
