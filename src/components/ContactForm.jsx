// src/components/ContactForm.jsx
import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <motion.section
            id="contact"
            className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_50rem_at_top,var(--tw-gradient-stops))] from-emerald-100 to-white opacity-40" />

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">
                    Contact sales
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Get actionable Meta ad advice, fast.
                </p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-600" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-600" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-600" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea name="message" id="message" rows="4" className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-emerald-600"></textarea>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="block w-full rounded-md bg-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                        Let's talk
                    </button>
                </div>
            </form>
        </motion.section>
    );
}
