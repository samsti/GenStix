// src/components/Testimonials.jsx
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const testimonials = [
    {
        quote: "MetaAds helped us 4x our ROAS in just 2 months. Their targeting and creative work is exceptional.",
        author: "Alex R.",
        role: "eCommerce Owner",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "Their optimization strategies made a huge impact on our leads. Highly recommended!",
        author: "Maria G.",
        role: "SaaS Founder",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "Exceptional service and results. The MetaAds team is our go-to partner for performance marketing.",
        author: "Tom H.",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);
    const next = () => setIndex((index + 1) % testimonials.length);
    const testimonial = testimonials[index];

    return (
        <section id="testimonials" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--tw-gradient-stops))] from-emerald-100 to-white opacity-30" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-emerald-600/10 ring-emerald-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img className="mx-auto size-10 rounded-full" src={testimonial.image} alt={testimonial.author} />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">{testimonial.author}</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                    </figcaption>
                </figure>
                <div className="mt-8 flex justify-center gap-4">
                    <button onClick={prev} className="rounded-full bg-emerald-100 p-2 hover:bg-emerald-200">
                        <ChevronLeftIcon className="h-5 w-5 text-emerald-600" />
                    </button>
                    <button onClick={next} className="rounded-full bg-emerald-100 p-2 hover:bg-emerald-200">
                        <ChevronRightIcon className="h-5 w-5 text-emerald-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}
