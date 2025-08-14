"use client";

import { createContext, useContext, ReactNode } from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { ProductType } from '../../types/productType';
import { CartProviderTypes } from './types/CartProviderTypes';
import { addProductToCart, getCart, getProducts } from '../../../services/api';


const CartContext = createContext<CartProviderTypes | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClient();

    const { data: cart = [] } =  useQuery({
        queryKey: ["cart"],
        queryFn: getCart,
    });

    const { data: products = [] } =  useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const addMutation = useMutation({
        mutationFn: addProductToCart,
        onSuccess: (data) => {
            queryClient.setQueryData(['cart'], data);
        },
    });

    return (
        <CartContext.Provider
            value={{
                cart,
                products,
                addToCart: (product: ProductType) => addMutation.mutate(product)
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('se tiene que usar el CartProvider');
    return context;
};