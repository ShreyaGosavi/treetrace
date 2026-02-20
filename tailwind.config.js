/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/features/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            /* ================= SEMANTIC TOKENS ================= */

            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",

                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",

                border: "var(--border)",
                muted: "var(--muted)",

                /* ================= BRAND PALETTE ================= */

                brand: {
                    white: "#E3E2DA",
                    black: "#1F1F1C",
                    green: "#9ACD32",
                    darkGreen: "#738f52",
                },
            },

            /* ================= FONTS ================= */

            fontFamily: {
                sans: ["var(--font-space)"],
                code: ["var(--font-code)"],
            },
        },
    },
    plugins: [],
};