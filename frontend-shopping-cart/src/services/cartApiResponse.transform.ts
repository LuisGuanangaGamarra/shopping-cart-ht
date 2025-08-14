import { ProductType } from '../commons/types/productType';
import { CartApiResponseDTO, ProductApiDTO } from './types';

const transformProduct = (data: ProductApiDTO): ProductType => ({
    id: data.id,
    name: data.name,
    price: Number(data.price),
});

export const transformCartApiResponse =
    (data: CartApiResponseDTO): ProductType[] =>
        data.items.map(transformProduct);