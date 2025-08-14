export interface ProductApiDTO {
    id: number;
    name: string;
    price: number;
}

export interface CartApiResponseDTO {
    id: number;
    items: ProductApiDTO[];
}

export interface CartApiRequestDTO {
    id_product: number;
}