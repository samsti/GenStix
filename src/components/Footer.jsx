// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-600">
                {/* Logo & Description */}
                <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-bold text-emerald-600">MetaX</span>
                    </div>
                    <p className="max-w-xs">Helping you scale Meta ads profitably through clear, data-driven strategy.</p>
                    <div className="flex gap-4 mt-4 text-gray-500">
                        <FaFacebookF className="hover:text-emerald-500 transition" />
                        <FaInstagram className="hover:text-emerald-500 transition" />
                        <FaXTwitter className="hover:text-emerald-500 transition" />
                        <FaGithub className="hover:text-emerald-500 transition" />
                        <FaYoutube className="hover:text-emerald-500 transition" />
                    </div>
                </div>

                {/* Column Links */}
                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solutions</h4>
                    <ul className="space-y-1">
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Automation</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                    <ul className="space-y-1">
                        <li>Contact</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
                    <ul className="space-y-1">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>License</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-xs text-gray-400">&copy; {new Date().getFullYear()} MetaX. All rights reserved.</div>
        </footer>
    );
}