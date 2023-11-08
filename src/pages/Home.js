import React from "react";
import "../components/styles/Home.css"
import main_mobile from "../components/assets/images/main_background_mobile.png"

class Home extends React.Component {
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
            <div>
                {isDesktop ? (
                    <div id="home">
                        <h1 className="homeAnchor">Home</h1>
                        <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
                    </div>
                ) : (
                    <div id="mobile">
                        <h1 className="homeAnchor">Home</h1>
                        <img className="profile_image" src={main_mobile} alt="project homepage"></img>
                        <p className="scroll-down"><a href="#complements" className="animate">More</a></p>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Home;