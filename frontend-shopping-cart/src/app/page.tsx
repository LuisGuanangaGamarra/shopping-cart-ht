import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container, Row, Col } from 'react-bootstrap';
import { BestCombination } from "@/app/components/BestCombination";


export default function HomePage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <Row>
                        <Col xs={12}>
                            <h1>Productos</h1>
                            <ProductList />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BestCombination />
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
}
