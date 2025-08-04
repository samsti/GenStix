/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./dashboard/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                card: "hsl(var(--card) / <alpha-value>)",
                "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",
                input: "hsl(var(--input) / <alpha-value>)",
                ring: "hsl(var(--ring) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
                muted: "hsl(var(--muted) / <alpha-value>)",
                "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
                accent: "hsl(var(--accent) / <alpha-value>)",
                "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
                destructive: "hsl(var(--destructive) / <alpha-value>)",
                "destructive-foreground": "hsl(var(--destructive-foreground) / <alpha-value>)",
                success: "hsl(var(--success) / <alpha-value>)",
                "success-foreground": "hsl(var(--success-foreground) / <alpha-value>)",
                warning: "hsl(var(--warning) / <alpha-value>)",
                "warning-foreground": "hsl(var(--warning-foreground) / <alpha-value>)",
                // Add any other custom colors you use!
            },
            fontFamily: {
                unbounded: ['"Unbounded"', 'cursive'],
            },
        },
    },
    plugins: [],

    corePlugins: {
        preflight: true,
    },
}
