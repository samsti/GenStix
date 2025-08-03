import React from "react";

export default function DashboardMock() {
    return (
        <section
            id="dashboard"
            className="relative isolate overflow-hidden py-24 sm:py-32 bg-black text-white"
        >
            {/* Radial glowing background s animací */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 overflow-hidden animate-pulse-slow"
            >
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#645CFF] via-[#645CFF] to-transparent opacity-30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:gap-x-16 items-stretch">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center lg:pr-8">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-semibold text-[#645CFF]">
                                Živý klientský dashboard
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Spravujte všechny své AI rezervace a workflow na jednom
                                dashboardu
                            </p>
                            <p className="mt-6 text-lg text-gray-300">
                                Sledujte všechny rezervace, leady a úkoly v reálném čase – a
                                přesně víte, co funguje.
                            </p>

                            <dl className="mt-10 space-y-6 text-base text-gray-400">
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-white">
                                        <svg
                                            className="absolute top-1 left-0 h-5 w-5 text-[#645CFF]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2 5a2 2 0 012-2h3.5a2 2 0 012 2H18a1 1 0 011 1v9a2 2 0 01-2 2H3a1 1 0 01-1-1V5z" />
                                        </svg>
                                        24/7 Monitoring automatizací
                                    </dt>
                                    <dd className="inline">
                                        : Sledujte průběh úloh, spouštěče leadů a logy chyb v
                                        reálném čase.
                                    </dd>
                                </div>
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-white">
                                        <svg
                                            className="absolute top-1 left-0 h-5 w-5 text-[#645CFF]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M4 3a1 1 0 011-1h10a1 1 0 011 1v2H4V3zm0 4h12v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" />
                                        </svg>
                                        Optimalizace AI workflow
                                    </dt>
                                    <dd className="inline">
                                        : Zjistěte, co funguje, co nefunguje a jak se výsledky
                                        zlepšují každý týden.
                                    </dd>
                                </div>
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-white">
                                        <svg
                                            className="absolute top-1 left-0 h-5 w-5 text-[#645CFF]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 10.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 10 6.293 7.707a1 1 0 111.414-1.414L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293z" />
                                        </svg>
                                        Jednoduchost bez kódu
                                    </dt>
                                    <dd className="inline">
                                        : Vše je připravené – žádné technické znalosti ani
                                        nastavování nástrojů na vaší straně.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Dashboard Screenshot */}
                    <div className="w-full flex justify-center">
                        <div className="relative w-full max-w-5xl h-[500px] sm:h-[550px] md:h-[600px]">
                            <img
                                src="/dashboard.png"
                                alt="Náhled dashboardu"
                                className="w-full h-auto object-contain rounded-xl"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
