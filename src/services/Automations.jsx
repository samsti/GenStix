// pages/services/Automations.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AutomationsPage() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <div className="py-24 px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-[#645CFF] mb-6">Smart Automations</h1>
                <p className="text-lg text-gray-300 mb-4">
                    Save time and reduce human error by automating your business tasks — from lead follow-ups to CRM updates, booking confirmations, and more.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                    We use tools like VAPI, n8n, Zapier, and GPT-based flows to streamline your operations and boost efficiency.
                </p>
            </div>
            <Footer />
        </div>
    );
}