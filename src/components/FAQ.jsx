import { motion } from 'framer-motion';

export default function FAQ() {
    const questions = [
        'Jak funguje AI hlasový agent?',
        'Můžete napojit agenta na můj rezervační systém nebo CRM?',
        'Jak rychle můžeme začít používat agenta?',
        'Kolik volání zvládne AI agent současně?',
        'Kolik stojí provoz hlasového agenta měsíčně?',
        'Budeme mít plnou kontrolu nad daty a hovory?',
    ];

    const answers = [
        'AI hlasový agent přijímá příchozí hovory, odpovídá na dotazy zákazníků, dokáže domluvit schůzky a předávat kvalifikované leady vašemu týmu. Vše funguje 24/7.',
        'Ano, můžeme ho propojit s vaším CRM, rezervačním kalendářem nebo jinými systémy přes API – například Google Kalendář, HubSpot nebo vlastní řešení.',
        'Základní nasazení zvládneme během 5–10 dní. U složitějších projektů s více integracemi to může trvat 2–4 týdny.',
        'AI agent zvládá vícero hovorů najednou – každý zákazník má pocit, že s ním mluvíte osobně, bez čekání na lince.',
        'Základní plán začíná od 5 000 Kč měsíčně. Cena se odvíjí od počtu volání, integrací a pokročilých funkcí.',
        'Ano, všechny hovory i data zůstávají ve vašem vlastnictví. Máte přístup ke statistikám, záznamům a přehledům kdykoliv.',
    ];

    return (
        <motion.section
            id="faq"
            className="relative isolate overflow-hidden bg-black text-white py-24 px-6 sm:py-32 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Dekorativní pozadí */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[50%] -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[#645CFF]/10 blur-2xl"
            />

            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                    Často kladené dotazy
                </h2>
                <p className="mt-4 text-center text-gray-400">
                    Nenašli jste odpověď, kterou hledáte? Kontaktujte náš{' '}
                    <a href="#contact" className="font-semibold text-[#645CFF] hover:underline">
                        tým podpory
                    </a>.
                </p>

                <dl className="mt-16 space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:space-y-0">
                    {questions.map((q, i) => (
                        <div
                            key={i}
                            className="relative rounded-2xl bg-gray-900 p-6 shadow-md ring-1 ring-[#645CFF]/10 hover:ring-[#645CFF]/30 transition"
                        >
                            {/* Číslo otázky */}
                            <div className="absolute -top-4 left-6 flex items-center justify-center w-8 h-8 rounded-full bg-[#645CFF] text-white text-xs font-bold shadow-md">
                                {i + 1}
                            </div>

                            <dt className="text-base font-semibold leading-7 text-white mt-2">
                                {q}
                            </dt>
                            <dd className="mt-2 text-sm leading-6 text-gray-400">
                                {answers[i]}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </motion.section>
    );
}
