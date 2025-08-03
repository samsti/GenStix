import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <motion.section
            id="pricing"
            className="relative isolate bg-black text-white px-6 py-28 sm:py-36 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base font-semibold text-[#645CFF]">Ceník</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight sm:text-6xl">
                    Plány pro váš AI hlasový agent a automatizace
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
                    Vyberte si balíček podle velikosti vašeho týmu a počtu hovorů – od základního nastavení až po plně
                    přizpůsobené řešení s prioritní podporou a pokročilou analytikou.
                </p>
            </div>

            {/* Card background container */}
            <div className="relative z-0 mt-16">
                {/* Glowing radial background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 overflow-hidden"
                >
                    <div className="absolute left-1/2 top-1/2 h-[420px] w-[1600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#645CFF] via-[#645CFF] to-transparent opacity-25 blur-3xl" />
                </div>

                {/* Pricing Cards */}
                <div className="relative grid max-w-6xl mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* Basic Plan */}
                    <div className="rounded-3xl bg-gray-900 p-8 ring-1 ring-[#645CFF]/10 shadow-md hover:shadow-lg transition-all sm:p-10">
                        <h3 className="text-base font-semibold text-[#645CFF]">Basic</h3>
                        <p className="mt-4 text-4xl font-semibold tracking-tight text-white">od 5 000 Kč / měsíc</p>
                        <p className="mt-6 text-base text-gray-300">
                            Pro malé firmy, které chtějí AI agenta k obsluze příchozích hovorů, odpovědím na časté dotazy
                            a rezervacím schůzek – vše napojené na Google Kalendář.
                        </p>
                        <ul className="mt-8 space-y-3 text-sm text-gray-300">
                            <li>✓ 1 telefonní číslo (Google Maps / web)</li>
                            <li>✓ Pokročilé call flow a odpovědi na FAQ</li>
                            <li>✓ Integrace s Google Kalendářem (rezervace + rušení)</li>
                        </ul>
                        <a
                            href="#contact"
                            className="mt-8 block rounded-md border border-[#645CFF] px-3.5 py-2.5 text-center text-sm font-semibold text-[#645CFF] hover:bg-[#eeeefe] hover:text-black transition"
                        >
                            Začít
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="rounded-3xl bg-gray-900 p-8 ring-1 ring-[#645CFF]/10 shadow-md hover:shadow-lg transition-all sm:p-10">
                        <h3 className="text-base font-semibold text-[#645CFF]">Pro</h3>
                        <p className="mt-4 text-4xl font-semibold tracking-tight text-white">od 7 000 Kč / měsíc</p>
                        <p className="mt-6 text-base text-gray-300">
                            Pro rostoucí firmy s více pobočkami nebo vyšším objemem hovorů – s prioritní podporou a
                            pravidelnou optimalizací pro maximální výkon.
                        </p>
                        <ul className="mt-8 space-y-3 text-sm text-gray-300">
                            <li>✓ Více telefonních čísel nebo poboček</li>
                            <li>✓ Pokročilé call flow a odpovědi na FAQ</li>
                            <li>✓ Integrace s Google Kalendářem + prioritní podpora a měsíční optimalizace</li>
                        </ul>
                        <a
                            href="#contact"
                            className="mt-8 block rounded-md border border-[#645CFF] px-3.5 py-2.5 text-center text-sm font-semibold text-[#645CFF] hover:bg-[#eeeefe] hover:text-black transition"
                        >
                            Začít
                        </a>
                    </div>

                    {/* Custom Plan */}
                    <div className="rounded-3xl bg-gray-900 p-8 ring-1 ring-[#645CFF]/10 shadow-md hover:shadow-lg transition-all sm:p-10">
                        <h3 className="text-base font-semibold text-[#645CFF]">Custom</h3>
                        <p className="mt-4 text-4xl font-semibold tracking-tight text-white">Individuální cena</p>
                        <p className="mt-6 text-base text-gray-300">
                            Pro podniky s vysokým objemem hovorů nebo speciálními požadavky – plně přizpůsobené workflow,
                            enterprise integrace a dedikovaný AI specialista.
                        </p>
                        <ul className="mt-8 space-y-3 text-sm text-gray-300">
                            <li>✓ Plně přizpůsobené workflow a reporting</li>
                            <li>✓ Podpora více jazyků a enterprise integrace</li>
                            <li>✓ Dedikovaný AI specialista a prémiová podpora</li>
                        </ul>
                        <a
                            href="#contact"
                            className="mt-8 block rounded-md border border-[#645CFF] px-3.5 py-2.5 text-center text-sm font-semibold text-[#645CFF] hover:bg-[#eeeefe] hover:text-black transition"
                        >
                            Požádat o nabídku
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
