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
                    <div id="home" className="desktop-home">
                        <h1 className="homeAnchor">Home</h1>
                        <div class="mouse_scroll">
                            <div class="mouse">
                                <div class="wheel"></div>
                            </div>
                            <div>
                                <span class="m_scroll_arrows one"></span>
                                <span class="m_scroll_arrows two"></span>
                                <span class="m_scroll_arrows three"></span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id="mobile" className="mobile-home">
                        <h1 className="homeAnchor">Home</h1>
                        <img className="profile_image" src={main_mobile} alt="project homepage" />
                        <div class="mouse_scroll">
                            <div class="mouse">
                                <div class="wheel"></div>
                            </div>
                            <div>
                                <span class="m_scroll_arrows one"></span>
                                <span class="m_scroll_arrows two"></span>
                                <span class="m_scroll_arrows three"></span>
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