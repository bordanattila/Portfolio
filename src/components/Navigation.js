import React, { useState, useEffect } from "react";
// import ReactDOM from "react";
import "./styles/Navigation.css";
import { Nav, Navbar, Container, Stack } from "react-bootstrap";

function NavigationBar() {
    return (
         <Container>
        <Navbar id="nav" fixed="top" className="navigationbar" expand="lg" >

            <Navbar.Brand>bordan attila</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                {/* <Nav className="me-auto"> */}
                <Stack direction="horizontal" gap={5}>
                    <Nav.Link href="#home">./home</Nav.Link>
                    <Nav.Link href="#skills">./skills</Nav.Link>
                    <Nav.Link href="#projects">./projects</Nav.Link>
                    <Nav.Link href="#contact">./contact</Nav.Link>
                </Stack>
                {/* </Nav> */}
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
}

export default NavigationBar;