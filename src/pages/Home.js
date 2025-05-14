import React from "react";
import "../components/styles/Home.css"
import main_mobile from "../components/assets/images/background_mobile_new.png"
import main_background from "../components/assets/images/background_new.png"

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
                    <div id="home" className="desktop-home">
                        <h1 className="homeAnchor">Home</h1>
                        <img className="profile_image" src={main_background} alt="project homepage" />
                        <div className="mouse_scroll">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows one"></span>
                                <span className="m_scroll_arrows two"></span>
                                <span className="m_scroll_arrows three"></span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="home" className="mobile-home">
                        <h1 className="homeAnchor">Home</h1>
                        <img className="profile_image" src={main_mobile} alt="project homepage" />
                        <div className="mouse_scroll">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows one"></span>
                                <span className="m_scroll_arrows two"></span>
                                <span className="m_scroll_arrows three"></span>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            
        );
    }
}

export default Home;