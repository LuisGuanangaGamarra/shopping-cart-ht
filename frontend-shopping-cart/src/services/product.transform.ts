import { Product } from '../Product/types/product';
import { CartApiResponseDTO, ProductApiDTO } from './types';

const transformProduct = (data: ProductApiDTO): Product => ({
    id: data.id,
    name: data.name,
    price: Number(data.price),
});

export const transformProductApiResponse =
    (data: Product[]): Product[] =>
        data as Product[];

export const transformCartApiResponse =
    (data: CartApiResponseDTO): Product[] =>
        data.items.map(transformProduct);