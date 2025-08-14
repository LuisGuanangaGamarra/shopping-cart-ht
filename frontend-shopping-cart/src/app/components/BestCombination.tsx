"use client";

import { useState, useMemo } from "react";

import { Container, Form, Button } from "react-bootstrap";

import { ProductType } from "@/commons/types/productType";
import { useCart } from '@/commons/Providers/CartProvider/CartProvider';
import { findBestCombination } from "@/utils/findBestCombination";
import BestCombinationList from "./BestCombinationList";

export const BestCombination = () => {
    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([])
    const [budget, setBudget] = useState<number>(0);
    const { products } = useCart();

    const handleCalculate = () => {
        const result = findBestCombination(products, budget);
        setSelectedProducts(result);
    };

    const total = useMemo(
        () => selectedProducts.reduce((sum, p) => sum + p.price, 0),
        [selectedProducts]
    );

    return(
        <Container className="mt-5">
            <h2>Calculadora de mejor combinación de productos</h2>

            <Form.Group className="mb-3" controlId="budget">
                <Form.Label>Presupuesto:</Form.Label>
                <Form.Control
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    min={0}
                    placeholder="Ingrese su presupuesto"
                />
            </Form.Group>

            <Button variant="primary" className="mb-3" onClick={handleCalculate}>
                Calcular mejor combinación
            </Button>
            <BestCombinationList
                selectedProducts={selectedProducts}
                total={total}
                budget={budget}
            />
        </Container>
    )
}