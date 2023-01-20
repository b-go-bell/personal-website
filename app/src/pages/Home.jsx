import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Footer from './../components/Footer.jsx';
import InteractiveStyle from './../components/home/InteractiveStyle.jsx';
import Crossword from './../components/home/Crossword.jsx';
import personal from './../resources/media/home/me.png';
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
      <br/>
      <div className="home-content">
          <img src={personal} className="home-image" alt="collage of me"/>
          <div className="introduction-r">
            <div className="header-home">about—</div>
            While I'm from Boulder, Colorado, you'll usually find me in
            Los Angeles at University of Southern California; this past semester,
            however, I took my studies abroad to University of Galway,
            in Ireland.
            <br/>
            <br/>
            I'm interested in technological sustainability, especially what that means
            socially. I like to build things that I think are cool, which for me means
            that they are intuitive, interactive, and accessible.
            <br/>
            <br/>
            My hope is that this website actively imparts these interests, but I
            believe the most active way you can learn about someone is meeting them, so reach out!
          </div>
      </div>
      <div className="home-bottom"/>
      <div className="home-flex">
        <div className="introduction-l">
          <a className="header-home" href="/experience">experience—</a>
          <br/>
          <br/>
          From big tech to nonprofits, I've worked with a surprising variety of companies
          and paradigms the short time I've been active in the professional software world.
        </div>
        <img src={ctc} className="ctc-image" alt="CTC volunteering"/>
      </div>
      <div className="home-bottom"/>
      <div className="home-flex-projects">
        <img src={website} className="home-image" alt="personal website project"/>
        <div className="introduction-r">
          <a className="header-home" href="/projects">projects—</a>
          <br/>
          <br/>
          Documentation is  one of my biggest pain-points (and thus one of
          my biggest goals for improvment). However, just because something isn't
          perfect, doesn't mean we shouldn't share it, so I wanted to include some
          (bits) of projects I'm especially proud of.
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
          enough to be written about. An honorable mention goes to puzzles, which doesn't have its
          own page, but is recognized here.
        </div>
        <Crossword/>
      </div>
      <div className="home-bottom"/>
      <Footer/>
    </div>
  );
}

export default Home;
