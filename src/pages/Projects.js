import React from "react";
import "../components/styles/Projects.css";
import NutriPal from "../components/assets/images/NutriPal2.png";
import techBlog from "../components/assets/images/techBlog-tablet.png";
import EventHorizon from "../components/assets/images/eventHorizon.png";
import { Container, Row, Col } from "react-bootstrap";
import Showcase from "../components/Carousel";
import Project from "../components/Project";
import projects from "../components/assets/projects/projects.js";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (

            <div id="projects">
            {isDesktop ? (
                <>
                <h1 className="anchor projects">Some Projects I've Created</h1>
                <Container className="showcase">
                    <Showcase />
                </Container>
                </>
            ) : (
                <h1 className="anchor projects">Some Projects I've Created</h1>
            )
            }
                <Container>
                    <Row className=" justify-content-center">
                        <Row className="glowBorder">
                        <Col lg={6} >
                                <span><img className="featured" src={NutriPal} alt="project homepage"></img></span>
                            </Col>
                            <Col lg={6}>
                                <p className="title">NutriPal</p>
                                <p>A MERN application built to track nutrition. This app enables users to effortlessly log their daily food intake by scanning product barcodes or searching by name. Users can review their current and previous day's logs, and save recipes for streamlined tracking.</p>
                                <p className="tech">MongoDB, Express, React, Node, TailwindCSS, Apollo, GraphQL, jwt, Bcrypt, Luxon, ky, Axios, Chart.js, Quagga2, Azure</p>
                                <a target="_blank" href="https://github.com/bordanattila/NutriPal" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://nutripal-hbcff5htezbqdwe9.canadacentral-01.azurewebsites.net" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </Col>
                        </Row>
                        <Row className="glowBorder">
                            <Col lg={6}>
                                <p className="title">EventHorizon</p>
                                <p>EventHorizon is a web application that allows users to browse events around the world and register for them if interested. The platform provides an intuitive interface to explore various events and manage registrations effortlessly.</p>
                                <p className="tech">Next.js, Typescript, MongoDB</p>
                                <a target="_blank" href="https://github.com/bordanattila/EventHorizon" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://event-horizon-sepia.vercel.app/" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </Col>
                            <Col lg={6} >
                                <span><img className="featured" src={EventHorizon} alt="project homepage"></img></span>
                            </Col>
                        </Row>
                        <Row className="glowBorder">
                            <Col lg={6}>
                                <span><img className="featured" src={techBlog} alt="project homepage"></img></span>
                            </Col>
                            <Col lg={6}>
                                <p className="title">Tech Blog</p>
                                <p>This is an application where tech enthusiasts can share thoughts and comments on various topics. The application was developed following the MVC framework and utilizes Sequelize and Handlebars.js.</p>
                                <p className="tech">Express, MySQL, Node, Sequelize, Bcrypt, Handlebars,</p>
                                <a target="_blank" href="https://github.com/bordanattila/TechBlog" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://tech-blog-e9b8389da074.herokuapp.com/" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </Col>
                        </Row>
                    </Row>
                    <h1 className="anchor projects">Other Projects</h1>
                    {/* <div className="otherProjects"> */}
                        <Project projects={projects} />
                    {/* </div> */}
                </Container>
            </div>
        );
    }
}

export default Projects;