import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="relative bg-black border-t border-gray-800 px-6 py-16 sm:py-20 text-gray-300">
            <div className="absolute inset-0 overflow-hidden -z-10">
                <svg
                    className="absolute left-1/2 top-1/2 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-10"
                    viewBox="0 0 900 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="150" cy="150" r="150" fill="#645CFF" />
                    <circle cx="450" cy="150" r="150" fill="#7D70FF" />
                    <circle cx="750" cy="150" r="150" fill="#A99CFF" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
                {/* Logo & Popis */}
                <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                        <img src="/Logo.png" alt="Logo společnosti" className="h-10 w-auto shadow-xl" />
                    </div>
                    <p className="max-w-xs text-gray-400">
                        Pomáháme firmám automatizovat zákaznickou komunikaci pomocí AI hlasových agentů, zrychlit prodejní procesy a ušetřit náklady díky propojení chytrých nástrojů jako Vapi, n8n, ChatGPT nebo Airtable.
                    </p>
                    <div className="flex gap-4 mt-5 text-gray-400">
                        <a href="https://www.facebook.com/genstix" aria-label="Facebook" className="hover:text-[#645CFF] transition"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/gen.stix" aria-label="Instagram" className="hover:text-[#645CFF] transition"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-[#645CFF] transition"><FaXTwitter /></a>
                        <a href="#" aria-label="GitHub" className="hover:text-[#645CFF] transition"><FaGithub /></a>
                        <a href="#" aria-label="YouTube" className="hover:text-[#645CFF] transition"><FaYoutube /></a>
                    </div>
                </div>

                {/* Sloupce odkazů */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Případy použití</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-[#645CFF] transition">AI hlasoví asistenti</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Automatizace CRM</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Prodejní dashboardy</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Rezervační workflow</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-3">Podpora</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-[#645CFF] transition">Kontakt</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Dokumentace</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Návody</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-3">Právní</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-[#645CFF] transition">Zásady ochrany soukromí</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Obchodní podmínky</a></li>
                        <li><a href="#" className="hover:text-[#645CFF] transition">Licence</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} GenStix. Všechna práva vyhrazena.
            </div>
        </footer>
    );
}
