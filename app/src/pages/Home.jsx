import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import InteractiveStyle from './../components/home/InteractiveStyle.jsx';
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


  return (
    <div className="home-container">
      <Nav/>
      <div className="home-content">
          <div className="introduction">
            Hi— I'm Bridget.
            <br/>
            <br/>
            I like doing a lot of things.
            <br/>
            <span className="intro-interjection">(that's what this website is for)</span>
            <br/>
            But, what I really like is doing things with other people.
            <br/>
            <br/>
            —So let's do this website together!
          </div>
          <div>
            <InteractiveStyle/>
          </div>
      </div>
    </div>
  );
}

export default Home;
