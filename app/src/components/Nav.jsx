import sign from './../resources/media/signature.png'
import './../resources/styles/components/Nav.scss'

function Nav() {
    return(
        <div className="container">
            <div className="home">
                <img src={sign} className="signature"/>
            </div>
            <div className="links">
                <a className="link" href="/experience">
                    experience
                </a>
                <a className="link" href="/projects">
                    projects
                </a>
                <a className="link" href="/leisure">
                    leisure
                </a>
            </div>
        </div>
    );
}

export default Nav;