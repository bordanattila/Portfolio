import React from "react";
import FrontEndImg from "../components/assets/images/frontend.svg";
import BackEndImg from "../components/assets/images/backend.svg";
import DevToolImg from "../components/assets/images/devtool.svg";
import AboutMeImg from "../components/assets/images/aboutme.svg";
import Education from "../components/assets/images/education.svg";
import resumePDF from "../components/assets/resume/Attila_Bordan_Resume.pdf";
import "../components/styles/Skills.css";
import { Col, Row, Container, Figure, Tooltip, OverlayTrigger } from "react-bootstrap";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

function Skills() {
  return (
    <Container id="skills">
      <h1 className="anchor about">  ---   About   ---   </h1>
      <Row className="skills justify-content-center">
        <Col className="aboutMe" lg={4} xl={6}>
          <Row className="align-items-center">
            <Col>
              <Figure>
                <Figure.Image className="aboutMeImg" src={AboutMeImg} />
              </Figure>
            </Col>
            <Col>
              <h3 className="skillTitle">About Me</h3>
            </Col>
          </Row>
          <Row className="skillText">
            <Col>
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
                <h4><code>I'm a dedicated software developer with a passion for creating intuitive, user-friendly applications that combine aesthetic appeal with functional design.</code></h4>
                <h4><code>I thrive in collaborative environments where innovative ideas and technical problem-solving come together to build impactful solutions.</code></h4>
                <h4><code>Committed to continuous learning, I’m always seeking opportunities to grow and contribute to forward-thinking teams.</code></h4>
                <h4><code>I’m eager to bring both my technical skills and enthusiasm for excellence to meaningful, dynamic projects.</code></h4>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Download Resume</Tooltip>}>
                  <a href={resumePDF} download target='_blank' rel="noreferrer">
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </a>
                </OverlayTrigger>
              </motion.div>
            </Col>
          </Row>
        </Col>

        <Col lg={4} className="educationList">
          <Row className="align-items-center skillsHeader">
            <Col>
              <Figure>
                <Figure.Image className="frontEndImg" src={Education} />
              </Figure>
            </Col>
            <Col>
              <h3 className="skillTitle">Education</h3>
            </Col>
          </Row>
          <Row className="skillText">
            <Col>
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
                <h4><code><strong>BS</strong> Southern New Hampshire University - Computer Science</code></h4>
                <h4><code>University of Minnesota - Full Stack Web Developer</code></h4>
                <h4><code><strong>MS</strong> Florida Institute of Technology - Supply Chain Management</code></h4>
                <h4><code><strong>BA</strong> American Military University - Logistics and Transportation Management</code></h4>
              </motion.div>
            </Col>
          </Row>
        </Col>

        <Col lg={3} className="frontEndList">
          <Row className="align-items-center skillsHeader">
            <Col>
              <Figure>
                <Figure.Image className="frontEndImg" src={FrontEndImg} />
              </Figure>
            </Col>
            <Col>
              <h3 className="skillTitle">Front End</h3>
            </Col>
          </Row>
          <Row className="skillText">
            <Col>
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
                <h4><code>HTML</code></h4>
                <h4><code>CSS</code></h4>
                <h4><code>JavaScript</code></h4>
                <h4><code>Bootstrap</code></h4>
                <h4><code>Typescript</code></h4>
                <h4><code>JavaScript</code></h4>
              </motion.div>
            </Col>
            <Col>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible">
                <h4><code>jQuery</code></h4>
                <h4><code>React</code></h4>
                <h4><code>Flask</code></h4>
                <h4><code>Jinja</code></h4>
                <h4><code>Selenium</code></h4>
                <h4><code>WordPress</code></h4>
              </motion.div>
            </Col>
          </Row>
        </Col>

        <Col className="backEndList" lg={3}>
          <Row className="align-items-center skillsHeader">
            <Col>
              <Figure>
                <Figure.Image src={BackEndImg} />
              </Figure>
            </Col>
            <Col>
              <h3 className="skillTitle">Back End</h3>
            </Col>
          </Row>
          <Row className="skillText">
            <Col>
              <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible">
                <h4 className="test"><code>Node.js</code></h4>
                <h4 className="test"><code>Express.js</code></h4>
                <h4 className="test"><code>JavaScript</code></h4>
                <h4 className="test"><code>MySQL</code></h4>
                <h4 className="test"><code>Sequelize</code></h4>
                <h4 className="test"><code>Apollo</code></h4>
              </motion.div>
            </Col>
            <Col>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible">
                <h4><code>NoSQL</code></h4>
                <h4><code>Graph QL</code></h4>
                <h4><code>MongoDB</code></h4>
                <h4><code>PHP</code></h4>
                <h4><code>Python</code></h4>
                <h4><code>Java</code></h4>
              </motion.div>
            </Col>
          </Row>
        </Col>

        <Col className="devToolList" lg={3}>
          <Row className="align-items-center skillsHeader">
            <Col>
              <Figure>
                <Figure.Image className="devToolsImg" src={DevToolImg} />
              </Figure>
            </Col>
            <Col>
              <h3 className="skillTitle">Dev Tools</h3>
            </Col>
          </Row>
          <Row className="skillText">
            <Col>
              <motion.div variants={fadeInRight} initial="hidden" whileInView="visible">
                <h4><code>GitHub</code></h4>
                <h4><code>Atom</code></h4>
                <h4><code>VSCode</code></h4>
                <h4><code>PyCharm</code></h4>
                <h4><code>Thony</code></h4>
                <h4><code>Insomnia</code></h4>
                <h4><code>Local</code></h4>
                <h4><code>Figma</code></h4>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;