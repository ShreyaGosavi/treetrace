"use client"
export default function Home() {
    return (
        <main className="min-h-screen p-10 space-y-8">
            {/* Title */}
            <h1 className="text-4xl font-bold">TreeTrace Design Test</h1>

            {/* Semantic colors */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Semantic colors</h2>

                <div className="p-4 bg-background border border-border rounded">
                    Background + border
                </div>

                <div className="p-4 bg-primary text-primary-foreground rounded">
                    Primary
                </div>

                <div className="p-4 bg-secondary text-secondary-foreground rounded">
                    Secondary
                </div>
            </section>

            {/* Brand colors */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Brand palette</h2>

                <div className="flex gap-4">
                    <div className="p-4 bg-brand-white text-brand-black rounded">
                        Brand White
                    </div>

                    <div className="p-4 bg-brand-green text-brand-black rounded">
                        Brand Green
                    </div>

                    <div className="p-4 bg-brand-darkGreen text-brand-white rounded">
                        Brand Dark Green
                    </div>
                </div>
            </section>

            {/* Font test */}
            <section className="space-y-2">
                <h2 className="text-xl font-semibold">Font test</h2>

                <p>Default font → Space Grotesk</p>

                <p className="font-code bg-muted p-3 rounded">
                    function insert(node) {"{"} return node {"}"}
                </p>
            </section>

            {/* Dark mode toggle */}
            <button
                onClick={() =>
                    document.documentElement.classList.toggle("dark")
                }
                className="px-4 py-2 bg-primary text-primary-foreground rounded"
            >
                Toggle Dark Mode
            </button>
        </main>
    );
}