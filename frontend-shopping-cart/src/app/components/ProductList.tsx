"use client";

import { useCart } from '../../Cart/context/CartContext';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ProductList = () => {
    const { products, addToCart } = useCart();

    return (
        <Row>
            {products?.map((product) => (
                <Col key={product.id} md={4} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
