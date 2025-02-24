import React from "react";

const Project = ({ projects }) => {

    return (
        <div className="otherProjects">

        {projects.map((project, index) => (

        <div key={index} className="project-card">
            <p className="projectName projectPadding">{project.projectName}</p>
            <img className="projectImg" src={project.imageSource} alt={"Project"}></img>
            <p className="projectDescription projectPadding">{project.description}</p>
            <div>
            <a href={project.repo} target={"_blank"} className="projectPadding" rel="noreferrer" ><i className="fa-brands fa-github fa-colour"></i></a>
            {project.deployed === "Not deployed" ? <span className="projectPadding">Not deployed</span> : <a href={project.deployed} target={"_blank"} rel="noreferrer" className="footerIcon"><i className="fa-solid fa-arrow-up-right-from-square fa-colour"></i></a>}
        </div>
        </div>
        ))};
        </div>
    );
}

export default Project;