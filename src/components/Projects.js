import React from "react";
import "./styles/Projects.css";
import prima from "./images/primaMateria.png";
import techBlog from "./images/techBlog.png";
import { Container, Row, Col } from "react-bootstrap";
import Showcase from "./Carousel";

function Projects() {
    return (

        <div id="projects">
            {/* <h1 className="text-center anchor">My Projects</h1> */}
            <Container className="showcase">
                <Showcase />
            </Container>
            <Container className="row2">
                <Col>
                    <Row className="align-items-center">
                        <Col className="mainProject" lg={8}>
                            <p className="title">Prima Materia</p>
                            <span><img className="prima" src={prima} alt="project homepage"></img></span>
                            <p><a href="https://github.com/bordanattila/Prima-Materia/">GitHub repository</a></p>
                            <p><a href="https://attilamagic-app.herokuapp.com/">Deployed project</a></p>
                        </Col>
                        <Col className="featuredProject" lg={4}>
                            <p className="title">Tech Blog</p>
                            <span><img className="techBlog" src={techBlog} alt="project homepage"></img></span>
                            <p><a>GitHub repository</a></p>
                            <p><a>Deployed project</a></p>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Projects;