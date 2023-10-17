import React from "react";
import "./styles/Projects.css";
import prima from "./images/primaMateria.png";
import techBlog from "./images/techBlog.png";
import EgaugnalMobile from "./images/egaugnal-mob.png";
import { Container, Row, Col } from "react-bootstrap";
import Showcase from "./Carousel";

function Projects() {
    return (

        <div id="projects">
            <h1 className="text-center anchor">Projects</h1>
            <Container className="showcase">
                <Showcase />
            </Container>
            <Container className="row2">
                {/* <Col> */}
                    <Col className="mainProject" >
                        <p className="title">Prima Materia</p>
                        <span><img className="prima" src={prima} alt="project homepage"></img></span>
                        <a target="_blank" href="https://github.com/bordanattila/Prima-Materia/" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                        <p><a href="https://attilamagic-app.herokuapp.com/">Deployed project</a></p>
                    </Col>
                {/* </Col> */}
                <Row className="align-items-center">
                    <Col className="featuredProject" lg={6}>
                        <p className="title">Tech Blog</p>
                        <span><img className="techBlog" src={techBlog} alt="project homepage"></img></span>
                        <p><a>GitHub repository</a></p>
                        <p><a>Deployed project</a></p>
                    </Col>
                    <Col lg={6}>
                        <p className="title">Egaugnal</p>
                        <span><img className="prima" src={EgaugnalMobile} alt="project homepage"></img></span>
                        <a target="_blank" href="https://github.com/bordanattila/Prima-Materia/" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                        <p><a href="https://attilamagic-app.herokuapp.com/">Deployed project</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;