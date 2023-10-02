import React from "react";
import { Col, Row, Container, Figure, Card } from "react-bootstrap";
import FrontEndImg from "./images/frontend.svg";
import BackEndImg from "./images/backend.svg";
import DevToolImg from "./images/devtool.svg"
import AboutMeImg from "./images/aboutme.svg"
import "./styles/Skills.css"

import heroku from "./assets/icons8-heroku-48.png";

function Skills() {
    return (
        <Container id="skills" >
            <h1 className="anchor">My Skills</h1>
            <div>
                <Row className="skills justify-content-center">
                <Col className="aboutMe" lg={4} xl={5}>
                        <Row className="align-items-center skillsHeader">
                            <Col>
                                <Figure>
                                    <Figure.Image className="aboutMeImg" src={AboutMeImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">About Me</h3>
                            </Col>
                        </Row>
                        <Row className="bottomBorder">
                            <Col>
                                <h4><code>I'm passionate about building user friendly and beautiful applications.</code></h4>
                                <h4><code>Having an appetite for continuous learning and problem solving.</code></h4>
                                <h4><code>I enjoy collaborating and connecting with co-workers.</code></h4>
                                <h4><code>Looking to bring my passion and technical skills to any exciting project.</code></h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} xl={6} className="frontEndList">
                        <Row className="align-items-center skillsHeader">
                            <Col >
                                <Figure>
                                    <Figure.Image className="frontEndImg" src={FrontEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">Front End</h3>
                            </Col>
                        </Row>
                        <Row className="bottomBorder">
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
                    <Col className="backEndList" lg={4} xl={5}>
                        <Row className="align-items-center skillsHeader">
                            <Col>
                                <Figure>
                                    <Figure.Image src={BackEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">Back End</h3>
                            </Col>
                        </Row>
                        <Row className="bottomBorder">
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
                    <Col className="devToolList" lg={4} xl={5}>
                        <Row className="align-items-center skillsHeader">
                            <Col>
                                <Figure>
                                    <Figure.Image className="devToolsImg" src={DevToolImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">Dev Tools</h3>
                            </Col>
                        </Row>
                        <Row className="bottomBorder">
                            <Col>
                                <h4><code>GitHub</code></h4>
                                <h4><code>Atom</code></h4>
                                <h4><code>VSCode</code></h4>
                                <h4><code>PyCharm</code></h4>
                                <h4><code>Thony</code></h4>
                                <h4><code>Insomnia</code></h4>
                                <h4><code>Local</code></h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Skills;