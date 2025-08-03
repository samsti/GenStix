import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const testimonials = [
    {
        quote: "Automatizovali jsme onboarding klientů pomocí Zapieru a Airtable — teď je to o 90 % rychlejší. Naprostá změna hry!",
        author: "Alex R.",
        role: "Vedoucí provozu",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "ChatGPT + Make.com toky nám transformovaly proces zákaznické podpory. Už žádné ruční odpovědi!",
        author: "Maria G.",
        role: "Zakladatelka SaaS",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "Tým propojil náš CRM, Google Sheets a ManyChat do bezproblémové automatizace. Skvělá práce!",
        author: "Tom H.",
        role: "Marketingový ředitel",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
    const next = () => setIndex((index + 1) % testimonials.length);
    const testimonial = testimonials[index];

    return (
        <section
            id="testimonials"
            className="relative isolate overflow-hidden px-6 py-28 sm:py-36 lg:px-8 bg-black text-white"
        >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20"></div>

            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-sm font-semibold text-[#645CFF]">Co říkají naši klienti</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                    Důvěřují nám moderní týmy
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-xl text-center">
                <figure className="relative rounded-2xl bg-gray-900 p-8 shadow-xl ring-1 ring-[#645CFF]/10">
                    {/* Číslo boxu */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#645CFF] text-white text-sm font-bold shadow-md">
                        {index + 1}
                    </div>

                    <blockquote className="text-lg font-medium text-white sm:text-xl mt-4">
                        <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center gap-x-4">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={testimonial.image}
                            alt={testimonial.author}
                        />
                        <div className="text-left">
                            <div className="text-base font-semibold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.role}</div>
                        </div>
                    </figcaption>
                </figure>

                {/* Ovládací tlačítka */}
                <div className="mt-10 flex justify-center gap-4">
                    <button
                        onClick={prev}
                        className="rounded-full border border-[#bcb8ff] bg-gray-900 p-2 shadow-sm hover:bg-[#eeeefe] hover:text-black transition"
                    >
                        <ChevronLeftIcon className="h-5 w-5 text-[#645CFF]" />
                    </button>
                    <button
                        onClick={next}
                        className="rounded-full border border-[#bcb8ff] bg-gray-900 p-2 shadow-sm hover:bg-[#eeeefe] hover:text-black transition"
                    >
                        <ChevronRightIcon className="h-5 w-5 text-[#645CFF]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
