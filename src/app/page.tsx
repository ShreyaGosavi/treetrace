"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">shadcn test</h1>

            <Button>Primary button</Button>

            <Button variant="secondary">Secondary button</Button>

            <Button variant="outline">Outline button</Button>

            <Button
                onClick={() => document.documentElement.classList.toggle("dark")}
            >
                Toggle dark
            </Button>
        </main>
    );
}