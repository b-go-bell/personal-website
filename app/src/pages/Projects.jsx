import Nav from './../components/Nav.jsx';
import './../resources/styles/pages/Projects.scss';
import etu from './../resources/media/projects/etu2.png';
import rfp from './../resources/media/projects/rfp.png';
import tms from './../resources/media/projects/tms-code.png';
import cvai from './../resources/media/projects/cvai.gif';
import { Parallax } from "react-parallax";
import { useEffect } from 'react';


function Projects() {

    console.log(getComputedStyle(document.documentElement).getPropertyValue('--color'));
    if(localStorage.getItem("--color") != null)
        document.documentElement.style.setProperty("--color", localStorage.getItem("--color"));
    if(localStorage.getItem("--color-primary") != null)
        document.documentElement.style.setProperty("--color-primary", localStorage.getItem("--color-primary"));
    if(localStorage.getItem("--color-secondary") != null)
        document.documentElement.style.setProperty("--color-secondary", localStorage.getItem("--color-secondary"));
    if(localStorage.getItem("--color-highlight") != null)
        document.documentElement.style.setProperty("--color-highlight", localStorage.getItem("--color-highlight"));

    if(localStorage.getItem("--font-size-h1") != null)
        document.documentElement.style.setProperty("--font-size-h1", localStorage.getItem("--font-size-h1"));
    if(localStorage.getItem("--font-size-h2") != null)
        document.documentElement.style.setProperty("--font-size-h2", localStorage.getItem("--font-size-h2"));
    if(localStorage.getItem("--font-size-h3") != null)
        document.documentElement.style.setProperty("--font-size-h3", localStorage.getItem("--font-size-h3"));
    if(localStorage.getItem("--font-size-h4") != null)
        document.documentElement.style.setProperty("--font-size-h4", localStorage.getItem("--font-size-h4"));
    if(localStorage.getItem("--font-size-body") != null)
        document.documentElement.style.setProperty("--font-size-body", localStorage.getItem("--font-size-body"));

    if(localStorage.getItem("--color-basic-primary") != null)
        document.documentElement.style.setProperty("--color-basic-primary", localStorage.getItem("--color-basic-primary"));
    if(localStorage.getItem("--color-basic-secondary") != null)
        document.documentElement.style.setProperty("--color-basic-secondary", localStorage.getItem("--color-basic-secondary"));

    let color = JSON.parse(localStorage.getItem("color"));

    useEffect( () => {
        const root = document.documentElement;
        if(color % 2 === 0){
            root?.style.setProperty("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#ffffff");

            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#000000");

            document.getElementById("h-title").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title1").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title2").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title3").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');

            if(color === 6){
                root?.style.setProperty("--color-basic-primary", "#ffffff");
                localStorage.setItem("--color-basic-primary", "#ffffff");

                root?.style.setProperty("--color-basic-secondary", "#202A44");
                localStorage.setItem("--color-basic-secondary", "#202A44");

                document.getElementById("h-title").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-basic-primary');
            }

        } else {
            root?.style.setProperty("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-primary", "#000000");

            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#ffffff");

            document.getElementById("title1").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title2").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title3").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');

            if(color === 7){
                root?.style.setProperty("--color-basic-primary", "#202A44");
                localStorage.setItem("--color-basic-primary", "#202A44");

                root?.style.setProperty("--color-basic-secondary", "#ffffff");
                localStorage.setItem("--color-basic-secondary", "#ffffff");

                document.getElementById("title1").style.color = "#ffffff";
                document.getElementById("title2").style.color = "#ffffff";
                document.getElementById("title3").style.color = "#ffffff";
            }
        }
    }, [color]);

    return (
        <div className="projects-container">
            <div>
                <Nav/>
            </div>
            <div className="h-project" id="h-project">
                <div className="h-description">
                    <div className="h-project-info">
                        <div className="h-project-title" id="h-title">
                            easyTeamUp
                        </div>
                        <div className="h-project-details" id="h-details">
                            &emsp;&ensp;USC • spring 2022
                        </div>
                        <div className="h-project-descrip" id="h-descrip1">
                            A social media platform algorithmically designed to bring people together.
                        </div>
                        <div className="h-project-descrip" id="h-descrip1">
                            Winner of USC CSCI 310: Software Engineering android app competition, comprised of over 180 students and 70 teams.
                        </div>
                    </div>
                    <div className="h-project-notice" id="h-notice">
                        <em>highlighted project</em>
                    </div>
                </div>
                <div className="parallax-container">
                    <Parallax  bgImage={etu} strength={400} className="etu" alt="easyTeamUp image"/>
                </div>
            </div>
            <div className="other-projects">
                <div className="project">
                    <div>
                        <img src={rfp} className="l-project-image" alt="RFP"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title" id="title1">
                                The Ron Finley Project
                            </div>
                            <div className="r-project-details">
                                &emsp;&ensp;Code the Change • spring 2022&emsp;&ensp;
                            </div>
                            <div className="r-project-descrip">
                                Code the Change partnered with <em>The Ron Finley Project</em> to create an inquiry management system to organize the nonprofit's to-dos.
                            </div>
                            <div className="r-project-descrip">
                                The design was brought to life with React, TypeScript, HTML, and CSS/SASS; the functionality was brought to fruition with Node.js and PostgreSQL.
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="project">
                <div>
                        <img src={tms} className="l-project-image" alt="TrackMyStuff"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title" id="title2">
                                TrackMyStuff
                            </div>
                            <div className="r-project-details">
                                &emsp;&ensp;personal project • winter 2021/22&emsp;&ensp;
                            </div>
                            <div className="r-project-descrip">
                                A full-stack RESTful web application that allows users to view, add, edit, or delete items to their personal list.
                            </div>
                            <div className="r-project-descrip">
                                TrackMyStuff was built with a PostgreSQL database at its core, connected to a React, HTML, and SASS frontend with a Flask API.
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div>
                        <img src={cvai} className="l-project-image" alt="CVAI"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title" id="title3">
                                Curriculum VitAI
                            </div>
                            <div className="r-project-details">
                                &emsp;&ensp;USC • fall 2021&emsp;&ensp;
                            </div>
                            <div className="r-project-descrip">
                                An intelligent resume-builder that employed the power of GPT-3 to help craft the perfect cover letter.
                            </div>
                            <div className="r-project-descrip">
                                CVAI was a full-stack web application built with React, HTML, CSS, Spring, and MongoDB.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom" />
            </div>
        </div>
    );


}

export default Projects;