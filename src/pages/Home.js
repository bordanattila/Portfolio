import React from "react";
import ProfilePicture from "../components/assets/images/profile_img.png";
import "../components/styles/Home.css"
import Video from "../components/assets/video/homeSectionVideo.mp4";
import main from "../components/assets/images/main_background.png"
import main_mobile from "../components/assets/images/main_background_mobile.png"
import { Col, Row, Container, Image, Figure } from "react-bootstrap";
import { render } from "react-dom";


// function Home() {



//     return (
//         // <>

//             <div id="home">
//             <h1 className="homeAnchor">Home</h1>
//             <Container>
//             <Col className="main_img">
//             <img className="profile_image" src={main} alt="project homepage"></img>
//             </Col>
//             </Container>
//             {/* <Figure>
//                                     <Figure.Image className="main_img" src={main}></Figure.Image>
//                                 </Figure> */}
//             {/* <section className="background">

//             <video autoPlay loop muted id="video">
//             <source src={Video} type='video/mp4' />
//             </video>
//             </section> */}
//             {/* <Container className="homeContainer"> */}
//                 {/* <Row className="homeRow">
//                     <Col lg={8}>
//                         <h1 className="myName anchor">Attila Bordán</h1>
//                         <h3 className="jobTitle">Full Stack Web Developer</h3>
//                     </Col>
//                     <Col lg={4}>
//                         <Image className="profile_img  " src={ProfilePicture} alt={"Profile picture"} rounded />
//                     </Col>
//                 </Row> */}
//                 <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
//             {/* </Container> */}
//         </div>
//     );
// }

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false //This is where I am having problems
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
        this.setState({ isDesktop: window.innerWidth > 768 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div>
                {isDesktop ? (
                    <div id="home">
                        <h1 className="homeAnchor">Home</h1>
                        <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
                    </div>
                ) : (
                    <div id="mobile">
                        <h1 className="homeAnchor">Home</h1>
                        <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Home;
{/* <div>
    <Figure>
        <Figure.Image className="main_img" src={main_mobile}></Figure.Image>
    </Figure>
    <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
</div> */}