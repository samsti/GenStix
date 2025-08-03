import { useEffect, useRef } from 'react';

export default function VapiWidget() {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (window.customElements && widgetRef.current && !widgetRef.current.hasChildNodes()) {
            const widget = document.createElement('vapi-widget');
            widget.setAttribute('assistant-id', '25e1a4b0-831f-4606-9142-aee3720a477d');
            widget.setAttribute('public-key', 'cc53c677-9c70-42b2-9002-6fc48d705ecf');
            widgetRef.current.appendChild(widget);
        }
    }, []);

    return <div ref={widgetRef} />;
}
