import React, { useState, useEffect } from "react";
import brand from "./assets/images/brand_logo.svg";
import "./styles/Navigation.css";
import { Nav, Navbar, Container, Stack } from "react-bootstrap";

function NavigationBar() {
    return (
        <Container>
            <Navbar collapseOnSelect id="nav" fixed="top" className="navigationbar" expand="lg" >
                <Navbar.Brand href="#home">attila bordán</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
                    <Nav className="" activeKey="/home" variant="underline">
                        {/* <Stack direction="horizontal" gap={5}> */}
                        <Nav.Item>
                            <Nav.Link href="#home">./home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#skills">./skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#projects">./projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact">./contact</Nav.Link>
                        </Nav.Item>
                        {/* </Stack> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavigationBar;