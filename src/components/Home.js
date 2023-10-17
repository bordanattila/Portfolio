import React from "react";
import ProfilePicture from "./images/profile_img.jpg";
import "./styles/Home.css"
import { Col, Row, Container, Image } from "react-bootstrap";

import Video from "./video/homeSectionVideo.mp4";

function Home() {
    return (
        <div>
        
            <div id="home"></div>
            <h1 className="homeAnchor">Home</h1>
            <section className="background">

            <video autoPlay loop muted id="video">
            <source src={Video} type='video/mp4' />
            </video>
            </section>
            <Container className="homeContainer">
                <Row className="homeRow">
                    <Col lg={8}>
                        <h1 className="myName anchor">Attila Bordán</h1>
                        <h3 className="jobTitle">Full Stack Web Developer</h3>
                    </Col>
                    <Col lg={4}>
                        <Image className="profile_img  " src={ProfilePicture} alt={"Profile picture"} rounded />
                    </Col>
                </Row>
                {/* </Container>
        <Container> */}
                <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
            </Container>

        </div>
    );
}

export default Home;