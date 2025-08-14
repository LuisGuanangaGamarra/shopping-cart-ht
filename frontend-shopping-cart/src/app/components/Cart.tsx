"use client";

import { useMemo } from 'react';

import { ListGroup } from 'react-bootstrap';

import { useCart } from '@/commons/Providers/CartProvider/CartProvider';


const Cart = () => {
    const { cart } = useCart();
    const total = useMemo(
        () => cart.reduce((sum, p) => sum + p.price, 0),
        [cart]
    );

    return (
        <div>
            <h2>Carrito</h2>
            <ListGroup>
                {cart.map((product, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between">
                        {product.name} - ${product.price}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <p className="mt-2">Total: ${total}</p>
        </div>
    );
};

export default Cart;
