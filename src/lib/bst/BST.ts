/* ================= TREE NODE ================= */

export interface TreeNode {
    id: string;
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/* ================= BST CLASS ================= */

export class BST {
    root: TreeNode | null = null;

    /* ---------- NODE CREATION ---------- */

    private createNode(value: number): TreeNode {
        return {
            id: crypto.randomUUID(), // stable id for React/SVG
            value,
            left: null,
            right: null,
        };
    }

    /* ================= INSERT ================= */

    insert(value: number) {
        const newNode = this.createNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            // ignore duplicates
            if (value === current.value) return;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    /* ---------- BULK INSERT (for testing/seed) ---------- */

    insertMany(values: number[]) {
        values.forEach((v) => this.insert(v));
    }

    /* ================= SEARCH ================= */

    search(value: number): TreeNode | null {
        let current = this.root;

        while (current) {
            if (value === current.value) return current;
            current = value < current.value ? current.left : current.right;
        }

        return null;
    }

    /* ================= DELETE ================= */

    delete(value: number) {
        this.root = this._deleteRec(this.root, value);
    }

    private _deleteRec(node: TreeNode | null, value: number): TreeNode | null {
        if (!node) return null;

        // traverse
        if (value < node.value) {
            node.left = this._deleteRec(node.left, value);
            return node;
        }

        if (value > node.value) {
            node.right = this._deleteRec(node.right, value);
            return node;
        }

        /* ===== NODE FOUND ===== */

        // case 1 → leaf
        if (!node.left && !node.right) return null;

        // case 2 → one child
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // case 3 → two children
        const successor = this._findMin(node.right);

        // preserve id but replace value
        node.value = successor.value;

        node.right = this._deleteRec(node.right, successor.value);

        return node;
    }

    private _findMin(node: TreeNode): TreeNode {
        while (node.left) node = node.left;
        return node;
    }

    /* ================= TRAVERSALS ================= */

    inorder(): TreeNode[] {
        const result: TreeNode[] = [];

        const dfs = (node: TreeNode | null) => {
            if (!node) return;
            dfs(node.left);
            result.push(node);
            dfs(node.right);
        };

        dfs(this.root);
        return result;
    }

    preorder(): TreeNode[] {
        const result: TreeNode[] = [];

        const dfs = (node: TreeNode | null) => {
            if (!node) return;
            result.push(node);
            dfs(node.left);
            dfs(node.right);
        };

        dfs(this.root);
        return result;
    }

    postorder(): TreeNode[] {
        const result: TreeNode[] = [];

        const dfs = (node: TreeNode | null) => {
            if (!node) return;
            dfs(node.left);
            dfs(node.right);
            result.push(node);
        };

        dfs(this.root);
        return result;
    }

    /* ================= UTILITIES ================= */

    clear() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }
}