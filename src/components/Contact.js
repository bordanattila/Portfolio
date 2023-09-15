import React from "react";
import "./styles/contact.css";


const currentDate = new Date();
const year = currentDate.getFullYear();

function Contact() {
    return (

        <div className="container-lg skills">
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
                        <span>© {year} Attila Bordán</span>
        </div>
    );
}

export default Contact;