import React from "react";
import "../components/styles/Projects.css";
import prima from "../components/assets/images/primaMateria.png";
import techBlog from "../components/assets/images/techBlog-tablet.png";
import EgaugnalMobile from "../components/assets/images/egaugnal-mobile.png";
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
                                <span><img className="prima" src={prima} alt="project homepage"></img></span>
                            </Col>
                            <Col lg={6}>
                                <p className="title">Prima Materia</p>
                                <p>A MERN application for users who love Magic the Gathering. It allows users to create an account, manage a wishlist, build decks, and complete refined searches.</p>
                                <p className="tech">MongoDB Express React Node Material-UI</p>
                                <a target="_blank" href="https://github.com/bordanattila/Prima-Materia/" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://attilamagic-app.herokuapp.com/" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </Col>
                        </Row>
                        <Row className="glowBorder">
                            <Col lg={6}>
                                <p className="title">Tech Blog</p>
                                <p>This is an application where tech enthusiasts can share thoughts and comments on various topics. The application was developed following the MVC framework and utilizes Sequelize and Handlebars.js.</p>
                                <p className="tech">Express MySQL Node Sequelize Bcrypt Handlebars</p>
                                <a target="_blank" href="http://github.com/bordanattila/Tech_Blog" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://tech-blog-attila.herokuapp.com/" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </Col>
                            <Col lg={6}>
                                <span><img className="techBlog" src={techBlog} alt="project homepage"></img></span>
                            </Col>
                        </Row>
                        <Row className="glowBorder">
                            <Col lg={6}>
                                <span><img className="egaugnal iphone" src={EgaugnalMobile} alt="project homepage"></img></span>
                            </Col>
                            <Col lg={6}>
                                <p className="title">Egaugnal</p>
                                <p>A language learning application that follow the MVC framework. Users can learn the spelling of words in over 90 languages through the Google Translate API and the pronunciation through Google TextToSpeech API. The app was built using Handlebars, Sequelize, and MySQL.</p>
                                <p className="tech">Express MySQL Node Sequelize Bcrypt Handlebars</p>
                                <a target="_blank" href="https://github.com/bordanattila/egaugnal/" rel="noreferrer" className="github footerIcon"><i className="fa-brands fa-github"></i></a>
                                <a target="_blank" href="https://egaugnal.herokuapp.com/" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
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