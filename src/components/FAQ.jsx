// src/components/FAQ.jsx
import { motion } from 'framer-motion';

export default function FAQ() {
    const questions = [
        'Do you offer eCom & B2B campaigns?',
        'Is there a minimum ad spend?',
        'Do I keep ad accounts & data?',
    ];

    const answers = [
        'Yes, we support both, including hybrid and multichannel funnels.',
        'For optimal results, we recommend $1K–$5K/mo minimum.',
        'Yes, you own all data, audiences, and ad assets. 100% yours.',
    ];

    return (
        <motion.section
            id="faq"
            className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(50rem_50rem_at_center,var(--tw-gradient-stops))] from-emerald-100 to-white opacity-40" />

            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-center text-gray-600">
                    Can’t find the answer you’re looking for? Reach out to our{' '}
                    <a href="#contact" className="font-semibold text-emerald-600 hover:underline">
                        customer support
                    </a>{' '}
                    team.
                </p>

                <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 sm:space-y-0">
                    {questions.map((q, i) => (
                        <div key={i} className="">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                {q}
                            </dt>
                            <dd className="mt-2 text-sm leading-6 text-gray-600">
                                {answers[i]}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </motion.section>
    );
}