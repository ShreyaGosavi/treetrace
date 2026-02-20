import animate from "tailwindcss-animate";
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
            colors: {
                /* ===== YOUR TOKENS ===== */
                background: "oklch(var(--background))",
                foreground: "oklch(var(--foreground))",

                primary: "oklch(var(--primary))",
                "primary-foreground": "oklch(var(--primary-foreground))",

                secondary: "oklch(var(--secondary))",
                "secondary-foreground": "oklch(var(--secondary-foreground))",

                border: "oklch(var(--border))",
                muted: "oklch(var(--muted))",

                /* ===== BRAND ===== */
                brand: {
                    white: "#E3E2DA",
                    black: "#1F1F1C",
                    green: "#9ACD32",
                    darkGreen: "#738f52",
                },

                /* ===== SHADCN ===== */
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },

            fontFamily: {
                sans: ["var(--font-space)"],
                code: ["var(--font-code)"],
            },

            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [animate],
};