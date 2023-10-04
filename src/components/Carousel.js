import React from "react";
import "./styles/Carousel.css";
import PrimaMateria from "./images/prima-materia-home.jpg";
import techBlog from "./images/techBlog2.png";
import TextEditor from "./images/textEditor.png";
import Weather from "./images/weatherDashboard.png";
import Scheduler from "./images/workDayScheduler.png";
import NoteTaker from "./images/noteTaker.png";
import Egaugnal from "./images/egaugnal.png";
import Title from "./images/projectsTitle.png";

import { Col, Row, Container, Figure, Card } from "react-bootstrap";

function Showcase () {
    return (
<Container className="spinner">
    <span id="img1" ><img src={PrimaMateria}></img></span>
    <span id="img2" ><img src={techBlog}></img></span>
    <span id="img3" ><img src={TextEditor}></img></span>
    <span id="img4" ><img src={Weather}></img></span>
    <span id="img5" ><img src={Scheduler}></img></span>
    <span id="img6"><img src={Egaugnal}></img></span>
    <span id="img7"><img src={NoteTaker}></img></span>
    <span id="img8"><img src={Title}></img></span>
</Container>
    )
}

export default Showcase;