import { Product } from "../../Product/types/product";

export interface CartContextType {
    cart: Product[];
    products: Product[];
    addToCart: (product: Product) => void;
}