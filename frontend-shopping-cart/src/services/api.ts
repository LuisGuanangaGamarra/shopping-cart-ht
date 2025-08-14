import { ProductType } from '@/commons/types/productType';
import { CartApiRequestDTO, CartApiResponseDTO } from './types';
import { transformCartApiResponse } from "@/services/cartApiResponse.transform";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getProducts = async (): Promise<ProductType[]> => {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error('Error al obtener productos');
    const data: ProductType[] = await res.json();
    return data;
};

export const getCart = async (): Promise<ProductType[]> => {
    const res = await fetch(`${API_URL}/cart`);
    if (!res.ok) throw new Error('Error al obtener el carrito');
    const data: CartApiResponseDTO = await res.json();
    return transformCartApiResponse(data);
};

export const addProductToCart = async (product: ProductType): Promise<ProductType[]> => {
    const productApiRequest: CartApiRequestDTO = {
        id_product: product.id,
    };

    const res = await fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productApiRequest),
    });
    const data: CartApiResponseDTO = await res.json();
    return transformCartApiResponse(data);
};
