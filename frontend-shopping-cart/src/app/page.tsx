import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container, Row, Col } from 'react-bootstrap';


export default function HomePage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <h1>Productos</h1>
                    <ProductList />
                </Col>
                <Col md={4}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
}
