import './../resources/styles/pages/Experience.scss';
import './../resources/styles/pages/Projects.scss';
import Nav from './../components/Nav.jsx';
import intel from './../resources/media/experience/intel_new_logo.jpg';
import ia from './../resources/media/experience/ia.JPG';
import viterbi from './../resources/media/experience/viterbi.png';
import heatmap from './../resources/media/experience/heatmap.png';
import anark from './../resources/media/experience/AnarkLogo.jpg';

function Experience() {

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


    return(
        <div className="experience-container">
            <Nav/>
            <div className="other-projects">
            <div className="project">
                    <div className="project-info">
                        <div className="l-project-title" id="title1">
                            Intel Corporation
                        </div>
                        <div className="l-project-details">
                            &emsp;&ensp;software application + engineer intern • summer 2023 + 2022&emsp;&ensp;
                        </div>
                        <div className="l-project-descrip">
                            As a software engineer intern for Intel's TD ATA MES Backend team, I gained
                            in-depth experience with company-specific tools and industry-standard practices.
                        </div>
                        <div className="l-project-descrip">
                            During my internship I created a
                            fully-functional devops pipeline and a foundational testing suite
                            that was ready for my team to use out-of-the-box. I additionally
                            served as a co-lead of my intern cohort.
                        </div>
                        <div className="l-project-descrip">
                            Next summer, I'll be rejoining my nuclear team as a software application intern.
                        </div>
                    </div>
                    <div>
                        <img src={intel} className="exp-image" alt="Intel logo"/>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-info">
                        <div className="l-project-title" id="title1">
                            ICAROS Lab
                        </div>
                        <div className="l-project-details">
                            &emsp;&ensp;research assistant • spring 2022&emsp;&ensp;
                        </div>
                        <div className="l-project-descrip">
                            Immediately loving CSCI 360: Introduction to Artificial Intelligence, I
                            pestered one of the class TA's to let me help out with his work in the
                            Interactive and Collaborative Autonomous Robotics lab.
                        </div>
                        <div className="l-project-descrip">
                            Being in the lab for just a single semester before the schoolyear ended,
                            I worked on creating my own implementation of MAP-Elites, a Quality Diversity algorithm
                            that generates morphologically diverse, optimal solutions within a multi-dimensional
                            problem space.
                        </div>
                    </div>
                    <div>
                        <img src={heatmap} className="exp-image" alt="Intel logo"/>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-info">
                        <div className="l-project-title" id="title1">
                            USC CSCI 103
                        </div>
                        <div className="l-project-details">
                            &emsp;&ensp;course producer • spring 2022&emsp;&ensp;
                        </div>
                        <div className="l-project-descrip">
                            CSCI 103: Introduction to Programming is one of the early
                            "weeder" classes for computer science majors at USC, which is a
                            notion I try to minimize as much as possible.
                        </div>
                        <div className="l-project-descrip">
                            Every week, I hold office hours for students to go over difficult concepts and
                            help debug their programming labs and assignments. In addition to this, I also
                            hold exam review sessions and help proctor and grade exams.
                        </div>
                    </div>
                    <div>
                        <img src={viterbi} className="exp-image" alt="Intel logo"/>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-info">
                        <div className="l-project-title" id="title1">
                            Internet Archive
                        </div>
                        <div className="l-project-details">
                            &emsp;&ensp;wayback machine intern • summer 2021&emsp;&ensp;
                        </div>
                        <div className="l-project-descrip">
                            The summer between my freshman and sophomore year I joined the
                            Internet Archive's Wayback Machine team, where I primarily
                            wrote Python scripts to handle large sets of
                            URLs to be archived in the Wayback Machine and created technical
                            Wayback Machine training material.

                        </div>
                        <div className="l-project-descrip">
                            I had the honor of extending my internship through October,
                            culminating in a joint speech with the Director of the Wayback Machine
                            about the history of web archiving at the nonprofit's 25th anniversary
                            celebration in October, attended and ultimately viewed by over 5k people.
                        </div>
                    </div>
                    <div>
                        <img src={ia} className="exp-image" alt="Intel logo"/>
                    </div>
                </div>
                <br/>
                <div className="project">
                    <div className="project-info">
                        <div className="l-project-title" id="title1">
                            Anark Corporation
                        </div>
                        <div className="l-project-details">
                            &emsp;&ensp;quality engineer intern • summer 2020&emsp;&ensp;
                        </div>
                        <div className="l-project-descrip">
                            As a quality engineer intern for Anark, I developed
                            command line, RESTful API, and manual tests for the Anark Core Workstation,
                            and logged detailed result, bug, and references for the software engineers.
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <img src={anark} className="exp-image" alt="Intel logo"/>
                    </div>
                </div>
                <div className="bottom" />
            </div>
        </div>
    );
}

export default Experience;