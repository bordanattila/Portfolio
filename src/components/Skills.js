import React from "react";
import ProfilePicture from "./images/profile_img.jpg";
import "./styles/Skills.css"

function Home() {
    return (

        <div className="container-lg skills">
            <div className="row2 align-items-center justify-content-center">
                <div className="col-lg-8">
                    <h1 className="text-center">Attila Bordán</h1>
                    <h3>Full Stack Web Developer</h3>
                    <i title="HTML5" className="devicon-html5-plain dev"></i>
                    <i title="CSS3" className="devicon-css3-plain dev"></i>
                    <i title="Bootstrap" className="devicon-bootstrap-plain dev"></i>
                    <i title="JavaScript" className="devicon-javascript-plain dev"></i>
                    <i title="Express.js" className="devicon-express-original dev"></i>
                    <i title="Node.js" className="devicon-nodejs-plain dev"></i>
                    <i title="Handlebars" className="devicon-handlebars-plain dev"></i>
                    <i title="React.js" className="devicon-react-original dev"></i>
                    <br></br>
                    <i title="jQuery" className="devicon-jquery-plain dev"></i>
                    <i title="Sequelize" className="devicon-sequelize-plain dev"></i>
                    <i title="MySQL" className="devicon-mysql-plain-wordmark dev"></i>
                    <i title="MongoDB" className="devicon-mongodb-plain dev"></i>
                    <i title="GraphQL" className="devicon-graphql-plain dev"></i>
                    <i title="Heroku" className="devicon-heroku-original dev" ></i>
                    <i title="Github" className="devicon-github-original dev"></i>
                    <i title="Python" className="devicon-python-plain dev"></i>
                    <i title="Flask" className="devicon-flask-original dev"></i>
                    <i title="Selenium" className="devicon-selenium-original dev"></i>
                </div>
                <img className="profile_img col-lg-4" src={ProfilePicture} alt={"Profile picture"}></img>
            </div>
            {/* <div className="aboutMeText container text-center">
                <div className="bio row justify-content-center">
                    <div className="col-md-auto">
                        <p >Earned a certificate in full stack development form the University of Minnesota and developed skills in
                            HTML, CSS, JavaScript, Bootstrap, MERN, Material UI, Handlebars, MySQL, jQuery, Apollo, and a bit of Python and Motoku. </p>
                        <p >Having an appetite for continuous learning and problem solving. I enjoy collaborating and connecting with co-workers. <br></br>
                            Passionate about building applications that assist people to make their lives easier. </p>
                        <p className="bottom">Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home;