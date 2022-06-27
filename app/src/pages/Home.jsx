import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Crossword from './../components/home/Crossword.jsx';
import { useState } from 'react';

import mail from './../resources/media/home/mail-outline.jpg';
import email from './../resources/media/home/email.png';
import linkedin from './../resources/media/home/linkedin-outline.png';
import elinkedin from './../resources/media/home/elinkedin.png';
import github from './../resources/media/home/github-outline.png';
import egithub from './../resources/media/home/egithub.png';

function Home() {

  function hover(id) {
    //if(id === 'mail')
      document.getElementById(id).src = email;
    if(id === 'github')
      document.getElementById(id).src = egithub;
    if(id === 'linkedin')
      document.getElementById(id).src = elinkedin;
  }

  function unhover(id) {
    if(id === 'mail')
      document.getElementById(id).src = mail;
    if(id === 'github')
      document.getElementById(id).src = github;
    if(id === 'linkedin')
      document.getElementById(id).src = linkedin;
  }

  const duration = 300;
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);




  return (
    <div className="home-container">
      <Nav/>
      <div className="home-content">
        <div>
        <Crossword/>
        </div>
        <div className="info">
          <div>
            <span className="title">Bridget G Bell</span> is a software engineer, UX/UI designer, and passionate learner, among many other things. Explore this site to learn more.
          </div>
          <br/>
          <div className="external-links">
              <a href="mailto:bridget.go.bell@gmail.com" className="mail-icon">
                <img id="mail" src={mail} className="mail-icon" alt="mail" onMouseOver={ () => hover("mail")} onMouseOut={() => unhover("mail")} />
              </a>
              <a href="https://www.linkedin.com/in/bridget-go-bell/" target="_blank" rel="noopener noreferrer">
                <img id="linkedin" src={linkedin} className="icon" alt="linkedin" onMouseOver={ () => hover("linkedin")} onMouseOut={() => unhover("linkedin")}/>
              </a>
              <a href="https://github.com/b-go-bell" target="_blank" rel="noopener noreferrer">
                <img id="github" src={github} className="icon" alt="github" onMouseOver={ () => hover("github")} onMouseOut={() => unhover("github")} />
              </a>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Home;
