// src/components/DashboardMock.jsx
export default function DashboardMock() {
    return (
        <section className="overflow-hidden bg-white py-24 sm:py-32" id="dashboard">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-sm font-semibold text-emerald-500">Meta Insight</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Your campaign control center</p>
                            <p className="mt-6 text-lg text-gray-600">
                                Quickly monitor performance, optimize ad sets, and make data-driven decisions in real-time with our custom Meta-style dashboard.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-6 text-base text-gray-600 lg:max-w-none">
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg className="absolute top-1 left-0 h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 5a2 2 0 012-2h3.5a2 2 0 012 2H18a1 1 0 011 1v9a2 2 0 01-2 2H3a1 1 0 01-1-1V5z" />
                                        </svg>
                                        Real-time metrics
                                    </dt>
                                    <dd className="inline">: Track clicks, ROAS, impressions and more in one glance.</dd>
                                </div>
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg className="absolute top-1 left-0 h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M4 3a1 1 0 011-1h10a1 1 0 011 1v2H4V3zm0 4h12v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" />
                                        </svg>
                                        Campaign optimization
                                    </dt>
                                    <dd className="inline">: Instantly pause, adjust budgets or duplicate winning ads.</dd>
                                </div>
                                <div className="relative pl-8">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg className="absolute top-1 left-0 h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 10.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 10 6.293 7.707a1 1 0 111.414-1.414L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293z" />
                                        </svg>
                                        Actionable clarity
                                    </dt>
                                    <dd className="inline">: Simple layout. Fast navigation. No guesswork.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative isolate bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="flex">
                                <aside className="w-64 bg-[#f0f2f5] p-6 space-y-6 border-r border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Meta logo" className="h-6 w-6" />
                                    </div>
                                    <nav className="space-y-3 text-sm pt-4">
                                        <a href="#" className="block text-emerald-600 font-semibold">Campaigns</a>
                                        <a href="#" className="block text-gray-700">Ad Sets</a>
                                        <a href="#" className="block text-gray-700">Ads</a>
                                        <a href="#" className="block text-gray-700">Audience</a>
                                        <a href="#" className="block text-gray-700">Performance</a>
                                        <a href="#" className="block text-gray-700">Billing</a>
                                    </nav>
                                    <div className="pt-8 border-t border-gray-300">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src="https://i.pravatar.cc/40?img=13"
                                                alt="User avatar"
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Samuel</p>
                                                <p className="text-xs text-gray-500">Founder</p>
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                <main className="flex-1 p-6 bg-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <h1 className="text-lg font-semibold text-gray-900">Campaign Overview</h1>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-left text-sm border border-gray-200 rounded-lg">
                                            <thead className="bg-[#e4e6eb] text-gray-700">
                                            <tr>
                                                <th className="py-2 px-4 font-medium">Campaign</th>
                                                <th className="py-2 px-4 font-medium">Status</th>
                                                <th className="py-2 px-4 font-medium">Reach</th>
                                                <th className="py-2 px-4 font-medium">Clicks</th>
                                                <th className="py-2 px-4 font-medium">CTR</th>
                                                <th className="py-2 px-4 font-medium">ROAS</th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-gray-800 divide-y divide-gray-200">
                                            <tr>
                                                <td className="py-2 px-4">Summer Promo</td>
                                                <td className="py-2 px-4 text-green-600">Active</td>
                                                <td className="py-2 px-4">28,500</td>
                                                <td className="py-2 px-4">3,210</td>
                                                <td className="py-2 px-4">11.3%</td>
                                                <td className="py-2 px-4">4.6x</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4">Black Friday</td>
                                                <td className="py-2 px-4 text-yellow-600">Paused</td>
                                                <td className="py-2 px-4">105,000</td>
                                                <td className="py-2 px-4">8,934</td>
                                                <td className="py-2 px-4">8.5%</td>
                                                <td className="py-2 px-4">3.1x</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4">Retargeting 2025</td>
                                                <td className="py-2 px-4 text-red-500">Inactive</td>
                                                <td className="py-2 px-4">7,800</td>
                                                <td className="py-2 px-4">721</td>
                                                <td className="py-2 px-4">9.2%</td>
                                                <td className="py-2 px-4">2.4x</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
