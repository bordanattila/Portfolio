import React from "react";
import "../components/styles/Contact.css";


const currentDate = new Date();
const year = currentDate.getFullYear();

function Contact() {
    return (
<>

        <div id="contact">
            <h1 className="contactAnchor contact">Get In Touch</h1>
            <div className="footerList">
                <h2 className="contacth2">You can reach me via email <a href="mailto:bordanattila007@gmail.com">here</a></h2>
                <h3 className="contacth3">Here are some links if you would like to get social</h3>
                {/* <ul className="footerList">
                    <li> */}
                    {/* <Col>
                    <Row> */}
                        <a target="_blank" href="https://github.com/bordanattila" className="github footerIcon" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    {/* </li>
                    <li> */}
                        <a target="_blank" href="https://www.linkedin.com/in/attila-bord%C3%A1n-7621a941/" className="linkedin footerIcon" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    {/* </li>
                    <li> */}
                        <a target="_blank" href="https://www.facebook.com/attila.bordan.7" className="facebook footerIcon" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    {/* </li>
                </ul> */}
                {/* </Row>
                </Col> */}
            </div>
        </div>
                <span className="copyright">© {year} Attila Bordán</span>
</>
    );
}

export default Contact;