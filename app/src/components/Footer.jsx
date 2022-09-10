import './../resources/styles/components/Nav.scss'
import resume from './../resources/media/home/Resume.pdf';

function Footer() {
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



    return(
        <div>
            <div className="footer-container">
                <div className="flinks">
                    <div className="flink">
                        contact—
                    </div>
                    <a className="flink-text" href="mailto:bridget.go.bell@gmail.com">
                        bridget.go.bell@gmail.com
                    </a>
                </div>
                <div className="flinks">
                    <div className="flink">
                        info—
                    </div>
                    <a className="flink-text" target="_blank" href={resume}>
                        resume
                    </a>
                </div>
                <div className="flinks">
                    <div className="flink">
                        social—
                    </div>
                    <div className="flink-text-special">
                        <a className="flink-style" target="_blank" href="https://www.linkedin.com/in/bridget-go-bell/">LinkedIn</a>, <a className="flink-style" target="_blank" href="https://github.com/b-go-bell">GitHub</a>, <a className="flink-style" target="_blank" href="https://www.instagram.com/bridget_go_bell/">Instagram</a>
                    </div>
                </div>
            </div>
            <div>
                <br/>
            </div>
        </div>
    );
}

export default Footer;