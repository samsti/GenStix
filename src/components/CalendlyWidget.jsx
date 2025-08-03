import { useEffect } from 'react';

export default function CalendlyWidget({ url }) {
    useEffect(() => {
        const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            document.body.appendChild(script);
        }

        const interval = setInterval(() => {
            if (window.Calendly && document.getElementById('calendly-inline-widget')) {
                window.Calendly.initInlineWidget({
                    url,
                    parentElement: document.getElementById('calendly-inline-widget'),
                    prefill: {},
                    utm: {}
                });
                clearInterval(interval);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [url]);

    return (
        <div
            id="calendly-inline-widget"
            style={{ minWidth: '100%', height: '950px' }}
        />
    );
}
