export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                <div className="absolute left-1/4 top-[-10rem] aspect-[1155/678] w-[50rem] rotate-[15deg] bg-gradient-to-tr from-emerald-200 to-emerald-400 opacity-30" style={{ clipPath: 'polygon(30% 10%, 80% 0%, 100% 50%, 70% 100%, 20% 90%, 0% 30%)' }} />
                <div className="absolute left-[60%] top-[3rem] aspect-[1155/678] w-[60rem] rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-emerald-500 opacity-25" style={{ clipPath: 'polygon(25% 0%, 85% 20%, 100% 80%, 60% 100%, 10% 80%, 0% 30%)' }} />
                <div className="absolute left-0 bottom-[15rem] aspect-[1155/678] w-[60rem] rotate-[-20deg] bg-gradient-to-br from-emerald-100 to-emerald-300 opacity-20" style={{ clipPath: 'polygon(0% 0%, 100% 20%, 90% 90%, 20% 100%, 0% 80%)' }} />
                <div className="absolute left-[12%] top-[10rem] aspect-[1155/678] w-[45rem] rotate-[25deg] bg-gradient-to-bl from-emerald-200 to-emerald-400 opacity-25" style={{ clipPath: 'polygon(30% 0%, 85% 15%, 100% 70%, 60% 100%, 10% 90%, 0% 30%)' }} />
                <div className="absolute left-[75%] top-[1rem] aspect-[1155/678] w-[55rem] rotate-[5deg] bg-gradient-to-tl from-emerald-300 to-emerald-600 opacity-20" style={{ clipPath: 'polygon(20% 10%, 90% 0%, 100% 60%, 70% 90%, 30% 80%, 0% 40%)' }} />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Scale with profitable <br className="hidden sm:inline" /> Meta ads
                    </h1>
                    <p className="mt-8 text-lg text-gray-600 sm:text-xl">
                        Not budgets. We grow revenue, cut waste, and drive full-funnel performance.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#contact"
                            className="rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                        >
                            Get started
                        </a>
                        <a href="#services" className="text-sm font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}