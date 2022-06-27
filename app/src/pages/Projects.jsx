import Nav from './../components/Nav.jsx';
import './../resources/styles/pages/Projects.scss';
import etu from './../resources/media/projects/etu.png';

function Projects() {
    return (
        <div className="projects-container">
            <div>
                <Nav/>
            </div>
            <div className="project">
                <div className="description">
                    text
                </div>
                <img src={etu} className="etu"/>
            </div>
        </div>
    );
}

export default Projects;