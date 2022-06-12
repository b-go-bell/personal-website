import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Crossword from './../components/home/Crossword.jsx';

import mail from './../resources/media/home/mail.png';
import email from './../resources/media/home/emerald-mail.png';
import linkedin from './../resources/media/home/linkedin.png';
import elinkedin from './../resources/media/home/emerald-linkedin.png';
import github from './../resources/media/home/github.png';
import egithub from './../resources/media/home/emerald-github.png';

function Home() {

  function hover(id) {
    if(id === 'mail')
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

  return (
    <div className="home-container">
      <Nav/>
      <div className="home-content">
        <Crossword/>
        <div className="info">
          <div>
            <span className="title">Bridget G Bell</span> is a software engineer, UX/UI designer, and passionate learner, among many other things. Read on to learn more.
          </div>
          <br/>
          <div className="para">
            From a Fortune 500 to a non-profit, I've taken my skills to a variety of places.
              <a  className="para-link" href="/experience"> Experience⟶</a>
          </div>
          <br/>
          <div className="para">
            No matter where I am, I love to think, plan, and, most of all, create.
            <a  className="para-link" href="/projects"> Projects⟶</a>
          </div>
          <br/>
          <div className="para">
            Hiking, music-ing, running, tennis-ing, and cooking is just the beginning.
            <a  className="para-link" href="/leisure"> Leisure⟶</a>
          </div>
          <br/>
          <div className="external-links">
              <a href="mailto:bridget.go.bell@gmail.com" className="mail-icon">
                <img id="mail" src={mail} className="icon"  alt="mail" onMouseOver={ () => hover("mail")} onMouseOut={() => unhover("mail")} />
              </a>
              <a href="https://github.com/b-go-bell" target="_blank" rel="noopener noreferrer">
                <img id="github" src={github} className="icon" alt="github" onMouseOver={ () => hover("github")} onMouseOut={() => unhover("github")} />
              </a>
              <a href="https://www.linkedin.com/in/bridget-go-bell/" target="_blank" rel="noopener noreferrer">
                <img id="linkedin" src={linkedin} className="icon" alt="linkedin" onMouseOver={ () => hover("linkedin")} onMouseOut={() => unhover("linkedin")}/>
              </a>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Home;
