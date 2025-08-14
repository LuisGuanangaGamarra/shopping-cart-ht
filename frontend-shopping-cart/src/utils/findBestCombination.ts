import { Product } from "@/Product/types/product";

export const findBestCombination = (products: Product[], budget: number): Product[] => {
    const n = products.length;
    const dp: Product[][][] = Array.from({ length: n + 1 }, () =>
        Array.from({ length: budget + 1 }, () => [])
    );

    for (let i = 1; i <= n; i++) {
        const { price } = products[i - 1];
        for (let b = 0; b <= budget; b++) {
            if (price <= b) {
                const withProduct = [...dp[i - 1][b - price], products[i - 1]];
                const withoutProduct = dp[i - 1][b];
                const totalWith = withProduct.reduce((sum, p) => sum + p.price, 0);
                const totalWithout = withoutProduct.reduce((sum, p) => sum + p.price, 0);
                dp[i][b] = totalWith > totalWithout ? withProduct : withoutProduct;
            } else {
                dp[i][b] = dp[i - 1][b];
            }
        }
    }

    return dp[n][budget];
};