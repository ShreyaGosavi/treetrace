"use client";
import { BST } from "@/lib/bst/BST";

export default function Home() {
    const tree = new BST();

    tree.insertMany([10, 5, 15, 2, 7, 12, 20]);
    tree.delete(5);

    console.log("inorder", tree.inorder());
    console.log("pre", tree.preorder());
    console.log("post", tree.postorder());

    return <div>BST ready</div>;
}