import React from "react";
import ProfilePicture from "../components/assets/images/profile_img.png";
import "../components/styles/Home.css"
import Video from "../components/assets/video/homeSectionVideo.mp4";
import main from "../components/assets/images/main_background.png"
import { Col, Row, Container, Image, Figure } from "react-bootstrap";


function Home() {
    return (
        // <>
        
            <div id="home">
            <h1 className="homeAnchor">Home</h1>
            {/* <Figure>
                                    <Figure.Image className="main_img" src={main}></Figure.Image>
                                </Figure> */}
            {/* <section className="background">

            <video autoPlay loop muted id="video">
            <source src={Video} type='video/mp4' />
            </video>
            </section> */}
            {/* <Container className="homeContainer"> */}
                {/* <Row className="homeRow">
                    <Col lg={8}>
                        <h1 className="myName anchor">Attila Bordán</h1>
                        <h3 className="jobTitle">Full Stack Web Developer</h3>
                    </Col>
                    <Col lg={4}>
                        <Image className="profile_img  " src={ProfilePicture} alt={"Profile picture"} rounded />
                    </Col>
                </Row> */}
                <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
            {/* </Container> */}
        </div>
    );
}

export default Home;