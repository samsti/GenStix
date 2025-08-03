/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
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
