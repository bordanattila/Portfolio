import React from "react";
import { Col, Row, Container, Figure } from "react-bootstrap";
import FrontEndImg from "./images/front-end.png";
import BackEndImg from "./images/back-end.png";
import "./styles/Skills.css"

function Skills() {
    return (
        <div id="skills">
            <h1 >My Skills</h1>
            <Container className="skills">
                <Row>
                    <Col lg={6} className="front">
                        <Row>
                            <Col sm={2}>
                                <Figure>
                                    <Figure.Image src={FrontEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3>Front End</h3>
                            </Col>
                        </Row>
                        <Row justify-content="center">
                            <Col>
                                <h4><code>HTML</code></h4>
                                <h4><code>CSS</code></h4>
                                <h4><code>JavaScript</code></h4>
                                <h4><code>Bootstrap</code></h4>
                                <h4><code>Material-UI</code></h4>
                                <h4><code>JavaScript</code></h4>
                            </Col>
                            <Col>
                                <h4><code>jQuery</code></h4>
                                <h4><code>React</code></h4>
                                <h4><code>Flask</code></h4>
                                <h4><code>Jinja</code></h4>
                                <h4><code>Selenium</code></h4>
                                <h4><code>WordPress</code></h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col sm={2}>
                                <Figure>
                                    <Figure.Image src={BackEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3>Back End</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4><code>Node.js</code></h4>
                                <h4><code>Express.js</code></h4>
                                <h4><code>JavaScript</code></h4>
                                <h4><code>MySQL</code></h4>
                                <h4><code>Sequelize</code></h4>
                                <h4><code>Apollo</code></h4>
                            </Col>
                            <Col>
                                <h4><code>NoSQL</code></h4>
                                <h4><code>Graph QL</code></h4>
                                <h4><code>MongoDB</code></h4>
                                <h4><code>PHP</code></h4>
                                <h4><code>Python</code></h4>
                                <h4><code>Motoku</code></h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;