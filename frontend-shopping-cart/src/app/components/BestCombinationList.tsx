import { Card, ListGroup } from "react-bootstrap";

import { ProductType } from "@/commons/types/productType";

type BestCombinationProps = {
    selectedProducts: ProductType[];
    total: number;
};

export default function BestCombination({ selectedProducts, total }: BestCombinationProps) {
    if (selectedProducts.length === 0) return null;

    return (
        <Card className="mb-4">
            <Card.Header>
                <h5>Productos seleccionados (total: ${total})</h5>
            </Card.Header>
            <ListGroup variant="flush">
                {selectedProducts.map((p) => (
                    <ListGroup.Item key={p.id}>
                        {p.name} - ${p.price}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}