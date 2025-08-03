export default function CalWidget() {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="rounded-xl bg-gray-900 p-6 text-center shadow-outer">
                <h3 className="text-2xl font-semibold mb-3">
                    Chcete si rovnou domluvit hovor?
                </h3>
                <p className="text-gray-400 mb-6">
                    Vyberte si čas, který vám vyhovuje. Spojíme se přes Zoom nebo Google Meet.
                </p>
                <a
                    href="https://cal.com/samsti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md bg-gradient-to-r from-[#645CFF] to-[#5149E8] px-6 py-3 text-white font-semibold shadow-xl hover:shadow-[0_0_25px_#645CFF] transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#645CFF]/50"
                >
                    Rezervovat hovor
                </a>
            </div>
        </div>
    );
}
