import React from "react";
import "./styles/Navigation.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavigationBar() {
    return (
        // <Container fluid>

        <Navbar className="navigationbar " expand="lg" fixed="top">
            {/* <Container> */}
            <Navbar.Brand>bordan attila</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

                <Nav.Link>./home</Nav.Link>
                <Nav.Link>./skills</Nav.Link>
                <Nav.Link>./projects</Nav.Link>
                <Nav.Link>./contact</Nav.Link>
            </Nav>
            {/* </Container> */}
            </Navbar.Collapse>
        </Navbar>
        // </Container>
    );
}

export default NavigationBar;