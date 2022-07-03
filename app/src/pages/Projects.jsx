import Nav from './../components/Nav.jsx';
import './../resources/styles/pages/Projects.scss';
import etu from './../resources/media/projects/etu2.png';
import rfp from './../resources/media/projects/rfp0.png';
import tms from './../resources/media/projects/tms-code.png';
import cvai from './../resources/media/projects/cvai.gif';
import { Parallax } from "react-parallax";


function Projects() {
    return (
        <div className="projects-container">
            <div>
                <Nav/>
            </div>
            <div className="h-project">
                <div className="h-description">
                    <div className="h-project-info">
                        <div className="h-project-title">
                            easyTeamUp
                        </div>
                        <div className="h-project-details">
                            &emsp;&ensp;USC • spring 2022
                        </div>
                        <div className="h-project-descrip">
                            A social media platform algorithmically designed to bring people together.
                        </div>
                        <div className="h-project-descrip">
                            Winner of USC CSCI 310: Software Engineering app competition, comprised of over 180 students and 70 teams.
                        </div>
                    </div>
                    <div className="h-project-notice">
                        <em>highlighted project</em>
                    </div>
                </div>
                <div className="parallax-container">
                    <Parallax  bgImage={etu} strength={400} className="etu"/>
                </div>
            </div>
            <div className="other-projects">
                <div className="project">
                    <div>
                        <img src={rfp} className="l-project-image"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title">
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
                    <div className="l-description">
                        <div className="project-info">
                            <div className="l-project-title">
                                TrackMyStuff
                            </div>
                            <div className="l-project-details">
                                &emsp;&ensp;personal project • winter 2021/22&emsp;&ensp;
                            </div>
                            <div className="l-project-descrip">
                                A full-stack RESTful web application that allows users to view, add, edit, or delete items to their personal list.
                            </div>
                            <div className="l-project-descrip">
                                TrackMyStuff was built with a PostgreSQL database at its core, connected to a React, HTML, and SASS frontend with a Flask API.
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={tms} className="r-project-image"/>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div>
                        <img src={cvai} className="l-project-image"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title">
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