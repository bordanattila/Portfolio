import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Project = ({ projects }) => {

    // return (
    //     <Carousel className="otherProjects" pause={"hover"}>
    //         {projects.map((project, index) => (

    //             <Carousel.Item key={index}>
    //                 <Carousel.Caption>
    //                     <h3 className="projectName">{project.projectName}</h3>
    //                     <img className="projectImg" src={project.imageSource} alt={"Project"} />
    //                     <p className="projectDescription">{project.description}</p>
    //                     <a href={project.repo} target={"_blank"} className="projectPadding"><i className="fa-brands fa-github" ></i></a>
    //                     {project.deployed === "Not deployed" ? <span className="projectPadding">Not deployed</span> : <a href={project.deployed} target={"_blank"} className="footerIcon"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>}
    //                     <p></p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         ))};
    //     </Carousel>
    // );


    return (
        <div className="otherProjects">

        {projects.map((project, index) => (

        <div key={index} className="project-card gradient-border">
            <p className="projectName projectPadding">{project.projectName}</p>
            <img className="projectImg" src={project.imageSource} alt={"Project"}></img>
            <p className="projectDescription projectPadding">{project.description}</p>
            <a href={project.repo} target={"_blank"} className="projectPadding"><i className="fa-brands fa-github fa-colour"></i></a>
            {project.deployed === "Not deployed" ? <span className="projectPadding">Not deployed</span> : <a href={project.deployed} target={"_blank"} className="footerIcon"><i className="fa-solid fa-arrow-up-right-from-square fa-colour"></i></a>}
        </div>
        ))};
        </div>
    );
}

export default Project;