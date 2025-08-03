import { motion } from 'framer-motion';
import { useState } from 'react';
import CalWidget from './CalWidget';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        await fetch('https://script.google.com/macros/s/AKfycbwcwC7wEmHJDSSCKY1EZuIfItdNgVzm4MkSKpe3yCH-_PYryV8nMwjoEpaJcZroPZmKxw/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        setLoading(false);
        setSuccess(true);
        e.target.reset();
    }

    return (
        <motion.section
            id="contact"
            className="relative isolate bg-black text-white py-10 px-6 sm:py-32 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Svítící pozadí */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#645CFF] via-[#645CFF] to-transparent opacity-20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-2xl flex flex-col items-center space-y-12">

                {/* Formulář */}
                <div className="w-full">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Kontaktujte náš tým pro automatizaci
                    </h2>
                    <p className="text-lg text-center text-gray-300 mb-10">
                        Pojďme si popovídat o tom, jak vám AI hlasový asistent může ušetřit čas a přinést více zákazníků.
                    </p>

                    {success ? (
                        <div className="text-center text-[#00ffae] font-semibold">
                            ✅ Zpráva odeslána! Ozveme se vám brzy.
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Jméno</label>
                                    <input
                                        type="text"
                                        name="first"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3.5 py-2 shadow-sm focus:ring-[#645CFF]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300">Příjmení</label>
                                    <input
                                        type="text"
                                        name="last"
                                        required
                                        className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3.5 py-2 shadow-sm focus:ring-[#645CFF]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3.5 py-2 shadow-sm focus:ring-[#645CFF]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300">Zpráva</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3.5 py-2 shadow-sm focus:ring-[#645CFF]"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-md bg-gradient-to-r from-[#645CFF] to-[#5149E8] py-2.5 text-white font-semibold shadow-xl hover:shadow-[0_0_30px_#645CFF] transition duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#645CFF]/50"
                                >
                                    {loading ? 'Odesílám...' : 'Odeslat zprávu'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Kalendářní widget */}
                <div className="w-full rounded-xl p-6 shadow-outer bg-gray-900 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Chcete si rovnou domluvit hovor?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Vyberte si čas, který vám vyhovuje – potkáme se přes Zoom nebo Google Meet.
                    </p>
                    <CalWidget />
                </div>
            </div>
        </motion.section>
    );
}
