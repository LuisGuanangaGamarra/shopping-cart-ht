"use client";

import { useMemo } from 'react';
import { useCart } from '../../Cart/context/CartContext';
import { ListGroup } from 'react-bootstrap';

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
