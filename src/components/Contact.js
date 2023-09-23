import React from "react";
import { Col, Row, Container, Figure } from "react-bootstrap";
import "./styles/Contact.css";


const currentDate = new Date();
const year = currentDate.getFullYear();

function Contact() {
    return (

        <div id="contact">
            <h1 className="contactAnchor">Contact</h1>
            <Container>
                <h2>If you would like to contact me, you can do so by sending an email to <br></br><a href="mailto:bordanattila007@gmail.com">bordanattila007@gmail.com</a></h2>
                <ul className="footerList">
                    <li>
                        <a target="_blank" href="https://github.com/bordanattila" className="github footerIcon"><i class="fa-brands fa-github"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/attila-bord%C3%A1n-7621a941/" className="linkedin footerIcon"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/attila.bordan.7" className="facebook footerIcon"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                </ul>
            </Container>
                <span className="theEnd">© {year} Attila Bordán</span>
        </div>
    );
}

export default Contact;