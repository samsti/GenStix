// src/components/Services.jsx
export default function Services() {
    return (
        <section id="services" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-emerald-500">What We Offer</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Full-funnel Meta advertising services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From strategy to execution, our services are tailored to deliver results at every stage of your customer journey.
                    </p>
                </div>

                <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-start rounded-xl bg-gray-50 p-8 shadow hover:shadow-lg transition">
                        <div className="rounded-md bg-emerald-100 p-2 ring-1 ring-inset ring-emerald-300">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-4-4v8m8-4a8 8 0 11-16 0 8 8 0 0116 0z" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">Ad Strategy & Setup</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                            Campaign planning and structure tailored to your business goals.
                        </p>
                    </div>

                    <div className="flex flex-col items-start rounded-xl bg-gray-50 p-8 shadow hover:shadow-lg transition">
                        <div className="rounded-md bg-emerald-100 p-2 ring-1 ring-inset ring-emerald-300">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.384v5.232a1 1 0 001.166.966l4.586-2.65a1 1 0 000-1.732z" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">Creative Production</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                            Engaging ad visuals and copy that convert attention into results.
                        </p>
                    </div>

                    <div className="flex flex-col items-start rounded-xl bg-gray-50 p-8 shadow hover:shadow-lg transition">
                        <div className="rounded-md bg-emerald-100 p-2 ring-1 ring-inset ring-emerald-300">
                            <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">Performance Optimization</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                            Continuous testing, learning, and scaling of effective ads.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
