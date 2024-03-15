import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";

export default function Brands() {
    return (
        <section id={ styles.brands }>
            <Container>
                <Row>
                    <Col>
                        Стоит только поверить, что вы можете – и вы уже 
                        на полпути к цели.
                        Вторые полпути это выбор прапильной химии.
                    </Col>
                    <Col>
                        <Row>
                            <Col>Lozung</Col>
                        </Row>
                        <Row>
                            <Col>Brand1</Col>
                            <Col>Brand3</Col>
                            <Col>Brand2</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}