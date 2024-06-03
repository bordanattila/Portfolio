import React from "react";
import "./styles/Carousel.css";
import PrimaMateria from "./assets/images/prima-materia-home.png";
import techBlog from "./assets/images/techBlog.png";
import TextEditor from "./assets/images/textEditor.png";
import Weather from "./assets/images/weatherDashboard.png";
import Scheduler from "./assets/images/workDayScheduler.png";
import NoteTaker from "./assets/images/noteTaker.png";
import Egaugnal from "./assets/images/egaugnal.png";
import Snake from "./assets/images/snake_game.png";

import { Container } from "react-bootstrap";

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
    <span id="img8"><img src={Snake}></img></span>
</Container>
    )
}

export default Showcase;