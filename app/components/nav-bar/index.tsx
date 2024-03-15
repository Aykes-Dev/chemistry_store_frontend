'use client';
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBAr() {
    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="images/logo.png"
                            height="5"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="m-auto mt-1">
                        <Nav.Link href="/shop" className="m-auto">Магазин</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}