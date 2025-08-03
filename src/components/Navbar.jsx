import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleScrollLink = (e, id) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        setIsOpen(false); // Zavře burger menu po kliknutí
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-sm">
            <nav className="flex items-center justify-between p-6 md:px-8" aria-label="Globální navigace">
                {/* Logo */}
                <div className="flex md:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <img
                            src="/Logo.png"
                            alt="Logo společnosti"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>

                {/* Tlačítko burger menu pro mobily */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none"
                    >
                        <span className="sr-only">Otevřít hlavní menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12" // ikona zavření
                                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // ikona burger
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigace pro desktop */}
                <div className="hidden md:flex md:gap-x-10">
                    <a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="text-lg font-semibold text-gray-300 hover:text-white">Služby</a>
                    <a href="#dashboard" onClick={(e) => handleScrollLink(e, 'dashboard')} className="text-lg font-semibold text-gray-300 hover:text-white">Funkce</a>
                    <a href="#testimonials" onClick={(e) => handleScrollLink(e, 'testimonials')} className="text-lg font-semibold text-gray-300 hover:text-white">Reference</a>
                    <a href="#pricing" onClick={(e) => handleScrollLink(e, 'pricing')} className="text-lg font-semibold text-gray-300 hover:text-white">Ceník</a>
                    <a href="#faq" onClick={(e) => handleScrollLink(e, 'faq')} className="text-lg font-semibold text-gray-300 hover:text-white">FAQ</a>
                    <a href="#contact" onClick={(e) => handleScrollLink(e, 'contact')} className="text-lg font-semibold text-gray-300 hover:text-white">Kontakt</a>
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-6 space-y-4">
                    <a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="block text-white text-base font-semibold">Služby</a>
                    <a href="#dashboard" onClick={(e) => handleScrollLink(e, 'dashboard')} className="block text-white text-base font-semibold">Funkce</a>
                    <a href="#testimonials" onClick={(e) => handleScrollLink(e, 'testimonials')} className="block text-white text-base font-semibold">Reference</a>
                    <a href="#pricing" onClick={(e) => handleScrollLink(e, 'pricing')} className="block text-white text-base font-semibold">Ceník</a>
                    <a href="#faq" onClick={(e) => handleScrollLink(e, 'faq')} className="block text-white text-base font-semibold">FAQ</a>
                    <a href="#contact" onClick={(e) => handleScrollLink(e, 'contact')} className="block text-white text-base font-semibold">Kontakt</a>
                </div>
            )}
        </header>
    );
}
