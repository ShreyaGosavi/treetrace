import { TreeNode } from "../bst/BST";

export interface PositionedNode {
    id: string;
    value: number;
    x: number;
    y: number;
}

interface LayoutConfig {
    horizontalGap?: number;
    verticalGap?: number;
}

export function computePositions(
    root: TreeNode | null,
    config: LayoutConfig = {}
): PositionedNode[] {
    const horizontalGap = config.horizontalGap ?? 100;
    const verticalGap = config.verticalGap ?? 100;

    const positioned: PositionedNode[] = [];
    let index = 0;

    const dfs = (node: TreeNode | null, depth: number) => {
        if (!node) return;

        // left subtree
        dfs(node.left, depth + 1);

        // current node (inorder moment)
        positioned.push({
            id: node.id,
            value: node.value,
            x: index * horizontalGap,
            y: depth * verticalGap,
        });

        index++;

        // right subtree
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);

    return positioned;
}