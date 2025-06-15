// src/components/Navbar.jsx
export default function Navbar() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">MetaX</span>
                        <span className="font-bold text-2xl text-gray-900">
              MetaX<sup className="text-s align-center">®</sup>
            </span>
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-10">
                    <a href="#services" className="text-lg font-semibold text-gray-900">Services</a>
                    <a href="#dashboard" className="text-lg font-semibold text-gray-900">Features</a>
                    <a href="#testimonials" className="text-lg font-semibold text-gray-900">Testimonials</a>
                    <a href="#pricing" className="text-lg font-semibold text-gray-900">Pricing</a>
                    <a href="#faq" className="text-lg font-semibold text-gray-900">FAQ</a>
                    <a href="#contact" className="text-lg font-semibold text-gray-900">Contact</a>
                </div>
            </nav>
        </header>
    );
}
