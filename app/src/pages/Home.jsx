import './../resources/styles/pages/Home.scss';
import Nav from './../components/Nav.jsx';
import Crossword from './../components/home/Crossword.jsx';

function Home() {
  return (
    <div className="home-container">
      <Nav/>
      <div className="home-content">
        <Crossword/>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Home;
