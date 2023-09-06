import Nav from './../components/Nav.jsx';
import Footer from './../components/Footer.jsx';
import './../resources/styles/pages/Projects.scss';
import etu from './../resources/media/projects/etu1.png';
import rfp from './../resources/media/projects/rfp.png';
import tms from './../resources/media/projects/tms-code.png';
import cvai from './../resources/media/projects/cvai.gif';
import asla from './../resources/media/projects/asla.png';
import firefly from './../resources/media/projects/Firefly.PNG';
import { Parallax } from "react-parallax";
import { useEffect } from 'react';


function Projects() {

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

    let color = null;
    if(JSON.parse(localStorage.getItem("color")) !== null)
        color = JSON.parse(localStorage.getItem("color"));
    else
        color = 6;



    useEffect( () => {
        const root = document.documentElement;
        if(color % 2 === 0){
            root?.style.setProperty("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#ffffff");

            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#000000");

            document.getElementById("h-title").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title0").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title1").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title2").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title3").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
            document.getElementById("title4").style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');

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

                document.getElementById("title0").style.color = "#ffffff";
                document.getElementById("title1").style.color = "#ffffff";
                document.getElementById("title2").style.color = "#ffffff";
                document.getElementById("title3").style.color = "#ffffff";
                document.getElementById("title4").style.color = "#ffffff";
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
                            Firefly
                        </div>
                        <div className="h-project-details" id="h-details">
                            &emsp;&ensp;LavaLab • spring 2023
                        </div>
                        <div className="h-project-descrip" id="h-descrip1">
                            A technical feedback tool empowering seamless debugging for developers and effortless commenting for users.
                        </div>
                        <div className="h-project-descrip" id="h-descrip1">
                            Winner of the Judge's Choice Award for the Spring '23 LavaLab cohort, the top prize available.
                        </div>
                        <div className="h-project-descrip" id="h-descrip1">
                            I served as the team's product manager; watch my 3-minute pitch <a href="https://www.youtube.com/watch?v=Yf0kycLK31w" target="_blank" class="demo-link">here</a>.
                        </div>

                    </div>
                    <div className="h-project-notice" id="h-notice">
                        <em>highlighted project</em>
                    </div>
                </div>
                <div className="parallax-container">
                    <img className="firefly-image" src={firefly} alt="Firefly Winning the Judge's Choice Award"></img>
                </div>
            </div>
            <div className="other-projects">
                <div className="project">
                    <div>
                        <img src={etu} className="l-project-image" alt="easy team up screenshots"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title" id="title0">
                                <br/>
                                <br/>
                                EasyTeamUp
                            </div>
                            <div className="r-project-details">
                                &emsp;&ensp;USC CSCI 310 • spring 2022&emsp;&ensp;
                            </div>
                            <div className="r-project-descrip">
                                A social media platform algorithmically designed to bring people together; Winner of USC CSCI 310: Software Engineering android app competition, comprised of over 180 students and 70 teams.
                            </div>
                            <div className="r-project-descrip">
                                As one of three team-members, I built out the entire frontend of the app in Android Studio using Java and XML, writing over 60k lines of code in a month and a half to get it release-ready.
                            </div>
                            <div className="r-project-descrip">
                                The app allowed for the creation, deletion, viwing, joining and leaving of events. Once an event's due date passed, the event was automatically scheduled using a dynamic programming algorithm to
                                best fit all attendee's schedule, then notified everyone of the set time.
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
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
                            <div className="r-project-descrip">
                                I implemented roughly two-thirds of the project's frontend, working on the lookup and reminders page building dropdown, card, and search
                                components, and putting other members' pieces together in the last month of the project.
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
                                Over winter break, I built a full-stack RESTful web application that allows users to view, add, edit, or delete items to their personal list.
                            </div>
                            <div className="r-project-descrip">
                                TrackMyStuff was built with a PostgreSQL database at its core, connected to a React, HTML, and SASS frontend with a Flask API.
                            </div>
                            <div className="r-project-descrip">
                                I never formally released the project for public use, but it was good practice for me building something end-to-end.
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
                                An intelligent resume-builder that employed the power of GPT-3 to help craft the perfect cover letter (before ChatGPT became popular a year later!).
                            </div>
                            <div className="r-project-descrip">
                                CVAI was a full-stack web application built with React, HTML, CSS, Spring, and MongoDB.
                            </div>
                            <div className="r-project-descrip">
                                I worked primarily on building the frontend of CVAI's website, but also wrote the main API call that connected to GPT-3.
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div>
                        <img src={asla} className="l-project-image" alt="ASLA"/>
                    </div>
                    <div className="r-description">
                        <div className="project-info">
                            <div className="r-project-title" id="title4">
                                Affordable South LA
                            </div>
                            <div className="r-project-details">
                                &emsp;&ensp;Code the Change • spring 2021&emsp;&ensp;
                            </div>
                            <div className="r-project-descrip">
                                CTC worked with the nonprofit ASLA
                                to create a mobile-friendly website to spread awareness about the southern
                                California housing crisis and connect residents to beneficial resources, including other
                                struggling residents.
                            </div>
                            <div className="r-project-descrip">
                                The web app was built with React, HTML, CSS, and Node, with an additional
                                Google Analytics Feature.
                            </div>
                            <div className="r-project-descrip">
                                As I was getting the hang of web development, I built the top of the landing page, and wrote a couple of backend form APIs.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom" />
            </div>
            <br/>
            <Footer/>
        </div>
    );


}

export default Projects;