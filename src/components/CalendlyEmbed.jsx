// src/components/CalendlyEmbed.jsx
import { useEffect } from 'react';

export default function CalendlyEmbed() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="py-24 bg-white px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
                    Book your free automation consultation
                </h2>
                <div
                    className="min-h-[750px]"
                    id="calendly-inline-widget"
                    data-url="https://calendly.com/samuel-genstix"
                    style={{ minWidth: '320px', height: '750px' }}
                />
            </div>
        </section>
    );
}
