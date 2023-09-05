import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Footer from './../components/Footer.jsx';
import InteractiveStyle from './../components/home/InteractiveStyle.jsx';
import Crossword from './../components/home/Crossword.jsx';
import personal from './../resources/media/home/me.png';
import lavalab from './../resources/media/home/demonight.JPEG';
import ctc from './../resources/media/home/rfphome.JPG';
import website from './../resources/media/home/website.png';

function Home() {

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
            I like building things, but what I really like is building things with other people.
            <br/>
            <br/>
            —So let's build this website together.
            <br/>
            <br/>
            <span className="intro-interjection">Play with the <span className="code-font"> styles.css</span> sidebar!</span>
          </div>

          <div>
            <InteractiveStyle/>
          </div>
      </div>
      <br/>
      <div className="home-content">
          <img src={personal} className="home-image" alt="collage of me"/>
          <div className="introduction-r">
            <div className="header-home">about—</div>
            While I'm from Boulder, Colorado, you'll usually find me in
            Los Angeles at the University of Southern California. Last year,
            however, I took my studies abroad to the University of Galway
            in Ireland.
            <br/>
            <br/>
            I like to build things that I think are cool, which for me means
            that they are intuitive, interactive, and sustainable. I'm biased for action, and am always
            considering impact, no matter the scale.
            <br/>
            <br/>
            My hope is that this website imparts these interests, but the best way
            to learn about someone is by talking to them, so <a className="home-link" href="#footer">reach out</a>!
          </div>
      </div>
      <div className="home-bottom"/>
      <div className="home-flex">
        <div className="introduction-l">
          <a className="header-home" href="/experience">experience—</a>
          <br/>
          <br/>
          From big tech to nonprofits to even a startup, I've worked with a surprising variety of companies
          and paradigms the short time I've been active in the professional software world.
        </div>
        <img src={ctc} className="ctc-image" alt="Volunteering with Code The Change"/>
      </div>
      <div className="home-bottom"/>
      <div className="home-flex-projects">
        <img src={lavalab} className="home-image" alt="Pitching at LavaLab Demo Night"/>
        <div className="introduction-r">
          <a className="header-home" href="/projects">projects—</a>
          <br/>
          <br/>
          Documentation is  one of my biggest pain-points (and thus one of
          my biggest goals for improvment). However, just because something isn't
          perfect, doesn't mean we shouldn't share it, so I wanted to include some
          bits of projects I'm especially proud of.
        </div>
      </div>
      <div className="home-bottom"/>
      <div className="home-flex">
        <div className="introduction-l">
          <a className="header-home" href="/leisure">leisure—</a>
          <br/>
          <br/>
          I struggled putting together sections for my leisure section because there are
          so many things that I enjoy doing, but the few I did include I felt were relevant
          enough to be written about.
          <br/>
          <br/>
          An honorable mention goes to puzzles, which doesn't have its
          own page, but is recognized here with an interactive crossword.
        </div>
        <Crossword/>
      </div>
      <div className="home-bottom"/>
      <div id="footer">
        <Footer/>
      </div>

    </div>
  );
}

export default Home;
