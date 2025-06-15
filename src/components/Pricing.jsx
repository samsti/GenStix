// src/components/Pricing.jsx
import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <motion.section
            id="pricing"
            className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-emerald-300 to-emerald-500 opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base font-semibold text-emerald-600">Pricing</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Choose the right plan for you
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                    Choose an affordable plan that’s packed with the best features for growing your brand.
                </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Launch Plan */}
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow sm:p-10">
                    <h3 className="text-base font-semibold text-emerald-600">Launch</h3>
                    <p className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">$997</p>
                    <p className="text-base text-gray-500">/setup</p>
                    <p className="mt-6 text-base text-gray-600">
                        Perfect for businesses ready to launch performance marketing.
                    </p>
                    <ul className="mt-8 space-y-3 text-sm text-gray-600">
                        <li>✓ Strategy Call</li>
                        <li>✓ Basic Tracking</li>
                        <li>✓ Monthly Report</li>
                    </ul>
                    <a
                        href="#"
                        className="mt-8 block rounded-md border border-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                    >
                        Get Started
                    </a>
                </div>

                {/* Scale Plan */}
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow sm:p-10">
                    <h3 className="text-base font-semibold text-emerald-600">Scale</h3>
                    <p className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">$2,500</p>
                    <p className="text-base text-gray-500">/month</p>
                    <p className="mt-6 text-base text-gray-600">
                        For growing brands ready to scale with confidence.
                    </p>
                    <ul className="mt-8 space-y-3 text-sm text-gray-600">
                        <li>✓ Advanced Optimization</li>
                        <li>✓ Full Funnel Setup</li>
                        <li>✓ Bi-weekly Reports</li>
                    </ul>
                    <a
                        href="#"
                        className="mt-8 block rounded-md border border-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                    >
                        Book Now
                    </a>
                </div>

                {/* Performance Plan */}
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow sm:p-10">
                    <h3 className="text-base font-semibold text-emerald-600">Performance</h3>
                    <p className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">$5,000+</p>
                    <p className="text-base text-gray-500">/custom</p>
                    <p className="mt-6 text-base text-gray-600">
                        Comprehensive support for ambitious growth and results.
                    </p>
                    <ul className="mt-8 space-y-3 text-sm text-gray-600">
                        <li>✓ Custom Strategy</li>
                        <li>✓ ROAS Guarantee</li>
                        <li>✓ Full Service</li>
                    </ul>
                    <a
                        href="#"
                        className="mt-8 block rounded-md border border-emerald-600 px-3.5 py-2.5 text-center text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                    >
                        Request Quote
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
