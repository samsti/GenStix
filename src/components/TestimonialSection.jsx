export default function TestimonialSection() {
    return (
        <section className="relative bg-black text-white py-20 px-6 lg:px-8 text-center overflow-hidden">
            {/* Background efekt */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full bg-[#645CFF] opacity-30 blur-[180px] z-0" />

            {/* Obsah */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Nadpis a úvodní text */}
                <h2 className="text-3xl font-bold font-unbounded sm:text-4xl">
                    Podívejte se, jak náš AI hlasový agent funguje v praxi
                </h2>
                <p className="mt-4 text-gray-300 text-lg">
                    Níže je ukázka reálného hovoru – AI agent odpovídá na dotazy zákazníka,
                    domlouvá termíny a vede přirozený rozhovor úplně automaticky.
                </p>

                {/* Video - 16:9 */}
                <div className="mt-10 relative w-full" style={{ paddingTop: '56.25%' /* 16:9 poměr */ }}>
                    <video
                        className="absolute inset-0 w-full h-full rounded-lg shadow-xl object-cover"
                        src="/videos/testimonial.mp4" // nahraď cestou k tvému videu
                        controls
                        playsInline
                    />
                </div>

                {/* Text pod videem */}
                <h3 className="mt-12 text-3xl font-semibold font-unbounded">
                    Líbilo se vám to?
                </h3>

                {/* CTA tlačítko */}
                <div className="mt-5">
                    <a
                        href="#contact"
                        className="inline-block rounded-md bg-gradient-to-r from-[#645CFF] to-[#7F5CFF] px-8 py-2 text-md font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_6px_rgba(100,92,255,0.6)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#645CFF]"
                    >
                        Zarezervujte si hovor
                    </a>
                </div>
            </div>
        </section>
    );
}
