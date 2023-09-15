import React, { useState, useEffect } from "react";
// import ReactDOM from "react";
import "./styles/Navigation.css";
import { Nav, Navbar, Container, Stack } from "react-bootstrap";

function NavigationBar() {
    // const [scrolled,setScrolled]=useState(false);

    // const handleScroll=() => {
    //   const offset=window.scrollY;
    //   if(offset > 200 ){
    //     setScrolled(true);
    //   }
    //   else{
    //     setScrolled(false);
    //   }
    // }
    // useEffect(() => {
    //   window.addEventListener('scroll',handleScroll)
    // })
  
    // let x=['navbar'];
    // if(scrolled){
    //   x.push('scrolled');
    // }
    return (
        
        <Navbar id="nav" fixed="left" className="navigationbar" expand="lg" >
         <Container>

            <Navbar.Brand>bordan attila</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                {/* <Nav className="me-auto"> */}
                <Stack direction="horizontal" gap={5}>
                    <Nav.Link href="#home">./home</Nav.Link>
                    <Nav.Link href="#skills">./skills</Nav.Link>
                    <Nav.Link href="/#projects">./projects</Nav.Link>
                    <Nav.Link href="#contact">./contact</Nav.Link>
                </Stack>
                {/* </Nav> */}
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavigationBar;