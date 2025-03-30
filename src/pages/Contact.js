import React from "react";
import "../components/styles/Contact.css";


const currentDate = new Date();
const year = currentDate.getFullYear();

function Contact() {
    return (
        <>
          <section id="contact" className="contact-section">
            <h1 className="contactAnchor">Let’s Connect</h1>
            <p className="contact-subtitle">You’ve made it this far — might as well say hi 😄</p>
    
            <a href="mailto:bordan_attila@outlook.com" className="email-link">
              <button className="btn-hover btn contact-btn">
                📬 Drop Me a Line
              </button>
            </a>
    
            <p className="contact-social-text">Or find me wandering the wastelands of the internet:</p>
    
            <div className="contact-icons">
              <a
                href="https://github.com/bordanattila"
                target="_blank"
                rel="noreferrer"
                className="footerIcon github"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
    
              <a
                href="https://www.linkedin.com/in/bordanattila/"
                target="_blank"
                rel="noreferrer"
                className="footerIcon linkedin"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
    
              <a
                href="https://www.facebook.com/attila.bordan.7"
                target="_blank"
                rel="noreferrer"
                className="footerIcon facebook"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </section>
    
          <footer>
            <span className="copyright">© {year} Attila Bordán</span>
          </footer>
        </>
      );
}

export default Contact;