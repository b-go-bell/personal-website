import sign from './../resources/media/signature.png'
import './../resources/styles/components/Nav.scss'

function Nav() {
    return(
        <div className="nav-container">
            <div className="home">
                <a href="/" className="signature">
                    {/* <img src={sign} className="signature" alt="logo-signature"/> */}
                    BRIDGET G BELL
                </a>
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