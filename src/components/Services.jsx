import {
    UserCircleIcon,
    ArrowsRightLeftIcon,
    MegaphoneIcon,
} from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <section
            id="services"
            className="relative py-24 sm:py-32 overflow-hidden isolate bg-black text-white"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#645CFF]">
                        Co nabízíme
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Vše pro vaši moderní komunikaci
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Poskytujeme firmám 24/7 AI recepční, chytré automatizace a správu sociálních sítí.
                        Pomáháme zvyšovat rezervace, šetřit čas a eliminovat ruční práci.
                    </p>
                </div>

                <div className="mt-20 grid gap-12 sm:grid-cols-3 items-start">
                    {/* Karta 1: Chatbot */}
                    <Link
                        to="/services/Automations"
                        className="flex flex-col items-start rounded-xl bg-gray-900 p-8 shadow hover:shadow-lg transition hover:bg-gray-800"
                    >
                        <div className="rounded-md bg-[#e0deff] p-2 ring-1 ring-inset ring-[#b6b1ff]">
                            <ArrowsRightLeftIcon className="h-6 w-6 text-[#645CFF]" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-white">AI Chatbot</h3>
                        <p className="mt-2 text-base leading-7 text-gray-400">
                            Inteligentní chatbot pro vaše webové stránky a sociální sítě. Odpovídá okamžitě na dotazy zákazníků a pomáhá získat více konverzí.
                        </p>
                    </Link>

                    {/* Karta 2: AI Voice Agent – zvýrazněná barevně */}
                    <Link
                        to="/services/AIAgent"
                        className="flex flex-col items-start rounded-2xl p-10 bg-gradient-to-r from-[#645CFF] to-[#7F5CFF] shadow-xl transform hover:scale-105 transition"
                    >
                        <div className="rounded-md bg-white/20 p-2 ring-1 ring-inset ring-white/30">
                            <UserCircleIcon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-white">AI Hlasový Agent</h3>
                        <p className="mt-2 text-base leading-7 text-white/90">
                            Naše hlavní služba: 24/7 AI recepční, která vyřizuje hovory, rezervace i následné dotazy – přirozeně a bez čekání.
                        </p>
                    </Link>

                    {/* Karta 3: Social Media Management */}
                    <Link
                        to="/services/MetaAds"
                        className="flex flex-col items-start rounded-xl bg-gray-900 p-8 shadow hover:shadow-lg transition hover:bg-gray-800"
                    >
                        <div className="rounded-md bg-[#e0deff] p-2 ring-1 ring-inset ring-[#b6b1ff]">
                            <MegaphoneIcon className="h-6 w-6 text-[#645CFF]" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-white">Správa sociálních sítí</h3>
                        <p className="mt-2 text-base leading-7 text-gray-400">
                            Kompletní správa obsahu a reklamy na sociálních sítích. Pomůžeme vám přivést návštěvnost a proměnit ji v nové zákazníky.
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
