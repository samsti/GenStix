import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VoiceImage from '../resources/images/voice-agent.png';
import ChatImage from '../resources/images/chat-agent.png';

export default function AIAgent() {
    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
            <Navbar />

            <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-[#645CFF] mb-6 text-center">AI Voice & Chat Agent</h1>
                <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto text-center">
                    AI agents that talk and type like your best employee. Book appointments, qualify leads, and answer inquiries — 24/7, naturally.
                </p>

                {/* Voice Agent Section */}
                <div className="mb-24 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Voice AI Agent</h2>
                        <p className="text-gray-300 mb-6">
                            Handles incoming calls, books appointments, answers FAQs, and never forgets a follow-up. Fully powered by voice AI through VAPI.
                        </p>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://example.com/receptionist-agent"
                                title="Voice Agent"
                                className="w-full h-full border-none"
                                allow="microphone; autoplay"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <img src={VoiceImage} alt="Voice AI Agent" className="rounded-2xl shadow-xl w-full" />
                    </div>
                </div>

                {/* Chat Agent Section */}
                <div className="mb-24 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Chat AI Agent</h2>
                        <p className="text-gray-300 mb-6">
                            Real-time conversations on your website or app — available 24/7 to support customers, generate leads, or drive conversions.
                        </p>
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://example.com/sales-agent"
                                title="Chat Agent"
                                className="w-full h-full border-none"
                                allow="microphone; autoplay"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <img src={ChatImage} alt="Chat AI Agent" className="rounded-2xl shadow-xl w-full" />
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Want a custom AI Agent for your business?</h2>
                    <p className="text-gray-400 mb-6">Book a free strategy call and let’s build your AI-powered team member.</p>
                    <a
                        href="#contact"
                        className="inline-block bg-[#645CFF] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#837cff] transition"
                    >
                        Book a Call
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}