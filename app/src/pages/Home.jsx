import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Crossword from './../components/home/Crossword.jsx';

import mail from './../resources/media/home/mail.png';
import linkedin from './../resources/media/home/linkedin.png';
import github from './../resources/media/home/github.png';

function Home() {
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
              <a href="mailto:bridget.go.bell@gmail.com">
                <img src={mail} className="icon" alt="mail"/>
              </a>
              <a href="https://github.com/b-go-bell" target="_blank" rel="noopener noreferrer">
                <img src={github} className="icon" alt="github"/>
              </a>
              <a href="https://www.linkedin.com/in/bridget-go-bell/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className="icon" alt="linkedin"/>
              </a>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Home;
