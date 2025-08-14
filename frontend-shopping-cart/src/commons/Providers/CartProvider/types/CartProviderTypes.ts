import { ProductType } from "../../../types/productType";

export interface CartProviderTypes {
    cart: ProductType[];
    products: ProductType[];
    addToCart: (product: ProductType) => void;
}