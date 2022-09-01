import './../../resources/styles/components/home/InteractiveStyle.scss'
import './../../resources/design-tokens/css-variables.scss'
import light from './../../resources/media/home/light-mode.png'
import dark from './../../resources/media/home/dark-mode.png'
import React, {useEffect, useState } from "react";

function InteractiveStyle() {

    if(localStorage.getItem("--color") != null)
        document.documentElement.style.setProperty("--color", localStorage.getItem("--color"));
    if(localStorage.getItem("--color-primary") != null)
        document.documentElement.style.setProperty("--color-primary", localStorage.getItem("--color-primary"));
    if(localStorage.getItem("--color-secondary") != null)
        document.documentElement.style.setProperty("--color-secondary", localStorage.getItem("--color-secondary"));
    if(localStorage.getItem("--color-highlight") != null)
        document.documentElement.style.setProperty("--color-highlight", localStorage.getItem("--color-highlight"));
    if(localStorage.getItem("--color-basic-primary") != null)
        document.documentElement.style.setProperty("--color-basic-primary", localStorage.getItem("--color-basic-primary"));
    if(localStorage.getItem("--color-basic-secondary") != null)
        document.documentElement.style.setProperty("--color-basic-secondary", localStorage.getItem("--color-basic-secondary"));


    if(localStorage.getItem("--font-size-h0") != null)
        document.documentElement.style.setProperty("--font-size-h0", localStorage.getItem("--font-size-h0"));
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

    const [color, setColor] = useState(JSON.parse(localStorage.getItem("color")));
    const [smallFont, setSmallFont] = useState(localStorage.getItem("--font-size-h0") != '60px');

    useEffect(() => {
        console.log(color)
        if(color % 2 == 0){
            console.log("light")
            document.getElementById('light-mode').src = light;
        } else{
            document.getElementById('light-mode').src = dark;
        }
      }, []);


    useEffect(() => {
        // Accessing scss variable "--background-color"
        // and "--text-color" using plain JavaScript
        // and changing the same according to the state of "darkTheme"
        const root = document.documentElement;

        if(color % 2 == 0){
            document.getElementById('light-mode').src = light;
        } else{
            document.getElementById('light-mode').src = dark;
        }
        localStorage.setItem("color", color);

        if(color == 0) { //red light
            root?.style.setProperty("--color", "#cf0030");
            root?.style.setProperty("--color-primary", "#ffffff");
            root?.style.setProperty("--color-secondary", "#cf0030");
            root?.style.setProperty("--color-highlight", "#000000");

            localStorage.setItem("--color", "#cf0030");
            localStorage.setItem("--color-primary", "#ffffff");
            localStorage.setItem("--color-secondary", "#cf0030");
            localStorage.setItem("--color-highlight", "#000000");

            root?.style.setProperty("--color-basic-primary", "#ffffff");
            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#000000");

        } else if(color == 1){ //red dark
            root?.style.setProperty("--color", "#cf0030");
            root?.style.setProperty("--color-primary", "#cf0030");
            root?.style.setProperty("--color-secondary", "#ffffff");
            root?.style.setProperty("--color-highlight", "#000000");

            localStorage.setItem("--color", "#cf0030");
            localStorage.setItem("--color-primary", "#cf0030");
            localStorage.setItem("--color-secondary", "#ffffff");
            localStorage.setItem("--color-highlight", "#000000");

            root?.style.setProperty("--color-basic-primary", "#000000");
            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#ffffff");
        } else if(color == 2) { //orange light
            root?.style.setProperty("--color-primary", "#FFA500");
            root?.style.setProperty("--color-secondary", "#000000");
            root?.style.setProperty("--color-highlight", "#ffffff");
            root?.style.setProperty("--color", "#FFA500");


            localStorage.setItem("--color-primary", "#FFA500");
            localStorage.setItem("--color-secondary", "#000000");
            localStorage.setItem("--color-highlight", "#ffffff");
            localStorage.setItem("--color", "#FFA500");

            root?.style.setProperty("--color-basic-primary", "#ffffff");
            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#000000");


        } else if(color == 3){ //orange dark
            root?.style.setProperty("--color-primary", "#000000");
            root?.style.setProperty("--color-secondary", "#FFA500");
            root?.style.setProperty("--color-highlight", "#ffffff");
            root?.style.setProperty("--color", "#FFA500");


            localStorage.setItem("--color-primary", "#000000");
            localStorage.setItem("--color-secondary", "#FFA500");
            localStorage.setItem("--color-highlight", "#ffffff");
            localStorage.setItem("--color", "#FFA500");

            root?.style.setProperty("--color-basic-primary", "#000000");
            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#ffffff");
        } else if(color == 4) { //green light
            root?.style.setProperty("--color-primary", "#00AC8A");
            root?.style.setProperty("--color-secondary", "#000000");
            root?.style.setProperty("--color-highlight", "#ffffff");
            root?.style.setProperty("--color", "#00AC8A");

            localStorage.setItem("--color-primary", "#00AC8A");
            localStorage.setItem("--color-secondary", "#000000");
            localStorage.setItem("--color-highlight", "#ffffff");
            localStorage.setItem("--color", "#00AC8A");

            root?.style.setProperty("--color-basic-primary", "#ffffff");
            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#000000");

        } else if(color == 5) { //green dark
            root?.style.setProperty("--color-primary", "#000000");
            root?.style.setProperty("--color-secondary", "#00AC8A");
            root?.style.setProperty("--color-highlight", "#ffffff");
            root?.style.setProperty("--color", "#00AC8A");

            localStorage.setItem("--color-primary", "#000000");
            localStorage.setItem("--color-secondary", "#00AC8A");
            localStorage.setItem("--color-highlight", "#ffffff");
            localStorage.setItem("--color", "#00AC8A");

            root?.style.setProperty("--color-basic-primary", "#000000");
            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#ffffff");
        } else if(color == 6){ //navy light
            root?.style.setProperty("--color", "#202A44");
            root?.style.setProperty("--color-primary", "#ffffff");
            root?.style.setProperty("--color-secondary", "#202A44");
            root?.style.setProperty("--color-highlight", "#000000");

            localStorage.setItem("--color", "#202A44");
            localStorage.setItem("--color-primary", "#ffffff");
            localStorage.setItem("--color-secondary", "#202A44");
            localStorage.setItem("--color-highlight", "#000000");

            root?.style.setProperty("--color-basic-primary", "#ffffff");
            root?.style.setProperty("--color-basic-secondary", "#202A44");
            localStorage.setItem("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#202A44");
        } else if(color == 7){ //navy dark
            root?.style.setProperty("--color", "#202A44");
            root?.style.setProperty("--color-primary", "#202A44");
            root?.style.setProperty("--color-secondary", "#ffffff");
            root?.style.setProperty("--color-highlight", "#000000");

            localStorage.setItem("--color", "#202A44");
            localStorage.setItem("--color-primary", "#202A44");
            localStorage.setItem("--color-secondary", "#ffffff");
            localStorage.setItem("--color-highlight", "#000000");

            root?.style.setProperty("--color-basic-primary", "#202A44");
            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#202A44");
            localStorage.setItem("--color-basic-secondary", "#ffffff");
        } else if(color == 8){ //tan light
            root?.style.setProperty("--color", "#A47449");
            root?.style.setProperty("--color-primary", "#A47449");
            root?.style.setProperty("--color-secondary", "#ffffff");
            root?.style.setProperty("--color-highlight", "#000000");

            localStorage.setItem("--color", "#A47449");
            localStorage.setItem("--color-primary", "#A47449");
            localStorage.setItem("--color-secondary", "#ffffff");
            localStorage.setItem("--color-highlight", "#000000");

            root?.style.setProperty("--color-basic-primary", "#ffffff");
            root?.style.setProperty("--color-basic-secondary", "#000000");
            localStorage.setItem("--color-basic-primary", "#ffffff");
            localStorage.setItem("--color-basic-secondary", "#000000");
        } else if(color == 9){ //tan dark
            root?.style.setProperty("--color", "#A47449");
            root?.style.setProperty("--color-primary", "#000000");
            root?.style.setProperty("--color-secondary", "#A47449");
            root?.style.setProperty("--color-highlight", "#ffffff");

            localStorage.setItem("--color", "#A47449");
            localStorage.setItem("--color-primary", "#000000");
            localStorage.setItem("--color-secondary", "#A47449");
            localStorage.setItem("--color-highlight", "#ffffff");

            root?.style.setProperty("--color-basic-primary", "#000000");
            root?.style.setProperty("--color-basic-secondary", "#ffffff");
            localStorage.setItem("--color-basic-primary", "#000000");
            localStorage.setItem("--color-basic-secondary", "#ffffff");
        }

        root?.style.setProperty("--font-size-h0",
            smallFont ? "calc(42px + 0.2vw)" : "60px"
        );

        root?.style.setProperty("--font-size-h1",
            smallFont ? "calc(24px + 0.2vw)" : "36px"
        );

        root?.style.setProperty("--font-size-h2",
            smallFont ? "calc(18px + 0.2vw)" : "28px"
        );

        root?.style.setProperty("--font-size-h3",
            smallFont ? "calc(14px + 0.2vw)" : "24px"
        );

        root?.style.setProperty("--font-size-h4",
            smallFont ? "calc(12px + 0.2vw)" : "20px"
        );

        root?.style.setProperty("--font-size-body",
            smallFont ? "calc(10px + 0.2vw)" : "18px"
        );

        if(smallFont) {
            localStorage.setItem("--font-size-h0", "calc(42px + 0.2vw)");
            localStorage.setItem("--font-size-h1", "calc(24px + 0.2vw)");
            localStorage.setItem("--font-size-h2", "calc(18px + 0.2vw)");
            localStorage.setItem("--font-size-h3", "calc(14px + 0.2vw)");
            localStorage.setItem("--font-size-h4", "calc(12px + 0.2vw)");
            localStorage.setItem("--font-size-body", "calc(10px + 0.2vw)");
        } else {
            localStorage.setItem("--font-size-h0", "60px");
            localStorage.setItem("--font-size-h1", "36px");
            localStorage.setItem("--font-size-h2", "28px");
            localStorage.setItem("--font-size-h3", "24px");
            localStorage.setItem("--font-size-h4", "20px");
            localStorage.setItem("--font-size-body", "18px");
        }
    }, [color, smallFont]);


    function updateColor(c){
        if(color === c || color === c+1)
            return;
        if(color % 2 == 0)
            setColor(c)
        else
            setColor(c+1)
    }

    function updateFontSize(curr) {
        if((curr == true && smallFont == true) ||  (curr == false && smallFont == false) ) {}
        else {
            setSmallFont(!smallFont);
        }
    }

    function updateLightMode() {
        console.log("here")
        if(color % 2 !== 0) {
            console.log("here1")
            setColor(color - 1)
        }
        else {
            setColor(color + 1)
        }

    }

    return(
        <div className="interactive-style-container">
            <div>
                <div className="interactive-tab">
                    <div className="tab-text">
                        styles.css
                    </div>
                </div>
                <div className="interactive-box">
                    <div className="interactive-sidebar">
                        <button className="red-button" onClick={() => updateColor(0)}/>
                        <button className="orange-button" onClick={() => updateColor(2)}/>
                        <button className="green-button" onClick={() => updateColor(4)}/>
                        <button className="navy-button" onClick={() => updateColor(6)}/>
                        <button className="brown-button" onClick={() => updateColor(8)}/>
                        <br/>
                        <button className="small-text-button" onClick={() => updateFontSize(true)}>A</button>
                        <button className="big-text-button" onClick={() => updateFontSize(false)}>A</button>
                        <br/>
                        <button className="icon-button" onClick={() => updateLightMode()}>
                            <img id="light-mode" src={light} className="dark-mode-icon" />
                        </button>
                    </div>
                    <div className="codespace">
                        <div className="code-line">
                            <span className="line-number">1</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">2</span> .bridgets-personal-website &#123;
                        </div>
                        <div className="code-line">
                            <span className="line-number">3</span> &emsp;&emsp;color: {getComputedStyle(document.documentElement).getPropertyValue('--color')};
                        </div>
                        <div className="code-line">
                            <span className="line-number">4</span> &emsp;&emsp;font-size: {smallFont? "24px" : "36px"};
                        </div>
                        <div className="code-line">
                            <span className="line-number">5</span> &emsp;&emsp;dark-mode: {(color % 2 !== 0).toString()};
                        </div>
                        <div className="code-line">
                            <span className="line-number">6</span> &#125;
                        </div>
                        <div className="code-line">
                            <span className="line-number">7</span>
                        </div>
                        <div className="code-line">
                            <span className="line-number">8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InteractiveStyle;