import React from "react";

function Project(props) {

    return (
                <div className="project-card gradient-border">
                    <p className="footerIcon">{props.project.projectName}</p>
                    <img className="project_img" src={props.project.imageSource} alt={"Project"}></img>
                    <p className="footerIcon">{props.project.description}</p>
                    <a href={props.project.repo} target={"_blank"} className="footerIcon"><i className="fa-brands fa-github"></i></a>
                    {props.project.deployed === "Not deployed" ? <span className="footerIcon">Not deployed to IC Blockchain</span> : <a href={props.project.deployed} target={"_blank"} className="footerIcon"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>}
                    {/* <p><a href={item.deployed} target={"_blank"} className="footerIcon"> View application »</a></p> */}
                </div>
            );
}

export default Project;