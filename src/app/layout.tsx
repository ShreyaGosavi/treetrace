import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-code",
    display: "swap",
});

export const metadata: Metadata = {
    title: "TreeTrace",
    description: "Binary Search Tree Visualizer",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
            suppressHydrationWarning
        >
        <body className="font-sans">{children}</body>
        </html>
    );
}