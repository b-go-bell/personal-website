import './../resources/styles/pages/Experience.scss';
import './../resources/styles/pages/Projects.scss';
import Nav from './../components/Nav.jsx';
import Footer from './../components/Footer.jsx';
import NonUSC from './../components/experience/NonUSC.jsx';
import USC from './../components/experience/USC.jsx';

import { useEffect } from 'react';

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

    let color = JSON.parse(localStorage.getItem("color"));

    useEffect( () => {
        const root = document.documentElement;
        if(color % 2 === 0){
            root?.style.setProperty("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#ffffff");

            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#000000");

            if(color === 6){
                root?.style.setProperty("--color-basic-primary", "#ffffff");
                localStorage.setItem("--color-basic-primary", "#ffffff");

                root?.style.setProperty("--color-basic-secondary", "#202A44");
                localStorage.setItem("--color-basic-secondary", "#202A44");
            }

        } else {
            root?.style.setProperty("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-primary", "#000000");

            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#ffffff");

            if(color === 7){
                root?.style.setProperty("--color-basic-primary", "#202A44");
                localStorage.setItem("--color-basic-primary", "#202A44");

                root?.style.setProperty("--color-basic-secondary", "#ffffff");
                localStorage.setItem("--color-basic-secondary", "#ffffff");
            }
        }
    }, [color]);

    return(
        <div className="experience-container">
            <Nav/>
            <div className="exp-other-projects">
                <div className="experience-header">
                    Outside of USC
                </div>
                <NonUSC/>
                <div className="experience-header">
                    At USC
                </div>
                <USC/>
            </div>
            <Footer/>
        </div>
    );
}

export default Experience;