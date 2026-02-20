"use client";
import { BST } from "@/lib/bst/BST";
import { computePositions } from "@/lib/layout/computePositions";

export default function Home() {
    const tree = new BST();
    tree.insertMany([10, 5, 15, 2, 7]);

    console.log(computePositions(tree.root));

    return <div>Layout ready</div>;
}