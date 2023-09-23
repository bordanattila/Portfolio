import React from "react";
import { Col, Row, Container, Figure } from "react-bootstrap";
import FrontEndImg from "./images/front-end.png";
import BackEndImg from "./images/back-end.png";
import "./styles/Skills.css"

function Skills() {
    return (
        <Container id="skills" >
            <h1 className="anchor">My Skills</h1>
            <div className="skills">
                <Row>
                    <Col lg={6} className="frontEndList">
                        <Row>
                            <Col xs={2}>
                                <Figure>
                                    <Figure.Image src={FrontEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">Front End</h3>
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
                            <Col xs={2}>
                                <Figure>
                                    <Figure.Image src={BackEndImg}></Figure.Image>
                                </Figure>
                            </Col>
                            <Col>
                                <h3 className="skillTitle">Back End</h3>
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
                    <Col >
                        
                            
                        <Row className="icons">
                        
                            <Col>
                            <span><i title="HTML5" className="devicon-html5-plain dev"></i></span>
                    <span><i title="CSS3" className="devicon-css3-plain dev"></i></span>
                    <span><i title="Bootstrap" className="devicon-bootstrap-plain dev"></i></span>
                    <span><i title="JavaScript" className="devicon-javascript-plain dev"></i></span>
                    <span><i title="Express.js" className="devicon-express-original dev"></i></span>
                    <span><i title="Node.js" className="devicon-nodejs-plain dev"></i></span>
                    <br></br>
                    <span><i title="Handlebars" className="devicon-handlebars-plain dev"></i></span>
                    <span><i title="React.js" className="devicon-react-original dev"></i></span>
                    <span><i title="jQuery" className="devicon-jquery-plain dev"></i></span>
                    <span><i title="Sequelize" className="devicon-sequelize-plain dev"></i></span>
                    <span><i title="MySQL" className="devicon-mysql-plain-wordmark dev"></i></span>
                    <span><i title="MongoDB" className="devicon-mongodb-plain dev"></i></span>
                    <br></br>
                    <span><i title="GraphQL" className="devicon-graphql-plain dev"></i></span>
                    <span><i title="Heroku" className="devicon-heroku-original dev" ></i></span>
                    <span><i title="Github" className="devicon-github-original dev"></i></span>
                    <span><i title="Python" className="devicon-python-plain dev"></i></span>
                    <span><i title="Flask" className="devicon-flask-original dev"></i></span>
                    <span><i title="Selenium" className="devicon-selenium-original dev"></i></span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Skills;