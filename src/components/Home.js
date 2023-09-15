import React from "react";
import NavigationBar from "./Navigation";
import ProfilePicture from "./images/profile_img.jpg";
import "./styles/Home.css"
import { Col, Row, Container, Image } from "react-bootstrap";

function Home() {
    return (
<div>
<div id="home"></div>
        <Container>

            <Row className="homeRow">
                <Col lg={6}>
                    <h1 className="text-center">Attila Bordán</h1>
                    <h3>Full Stack Web Developer</h3>
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
                <Col lg={6}>
                    <Image className="profile_img  " src={ProfilePicture} alt={"Profile picture"} rounded />
                </Col>
            </Row>
        
        <Container>

        <p class="scroll-down"><a href="#complements" class="animate">More</a></p>
        </Container>
        </Container>

        </div>
    );
}

export default Home;