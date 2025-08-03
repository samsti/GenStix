import { useEffect } from "react";

export default function VapiEmbed() {
    useEffect(() => {
        // Check if already loaded (cached)
        if (!window.vapiWidgetLoaded) {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
            script.async = true;

            script.onload = () => {
                window.vapiWidgetLoaded = true; // Mark as loaded
            };

            document.body.appendChild(script);
        }
    }, []);


    return (
        <vapi-widget
            assistant-id="ebbe818b-0ad2-4bd3-a936-011df9f7dd1d"
            public-key="cc53c677-9c70-42b2-9002-6fc48d705ecf"
            mode="chat"
            theme="dark"
            base-bg-color="#000000"
            accent-color="#645CFF"
            cta-button-color="#000000"
            cta-button-text-color="#ffffff"
            border-radius="large"
            size="compact"
            position="bottom-right"
            title="TALK WITH AI"
            start-button-text="Start"
            end-button-text="End Call"
            chat-first-message="Hi, this is James from GenStix. How can I help you?"
            chat-placeholder="Type your message..."
            voice-show-transcript="true"
            consent-required="true"
            consent-title="Terms and conditions"
            consent-content="By clicking 'Agree,' you consent to recording, storage, and sharing as per Terms of Service."
            consent-storage-key="vapi_widget_consent"
        ></vapi-widget>
    );
}
