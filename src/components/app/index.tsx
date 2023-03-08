import "./styles.css";
import Home from '../home';
import Projets from "../projets";
import Skills from "../skills";
import Experience from "../experience";
import Formations from "../formations";
import Contact from "../contact";
import Background from "../background";
import Footer from "../footer";
import ScrollToTop from "../scrollToTop/scrollTotop";
import Arrow from "../arrow";
import photo from '../../../src/assets/photo.jpg';
import { HashLink as Link } from "react-router-hash-link";




export default function App() {

  return (
    <div className="App">
      <Contact />
      <div className="home">
        <div className='home-container'>
          <div className="home-row">
            <div className='home-resume'>
              <div className="home-me">
                <h2 className='home-presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
                <h2 className='home-presentation'>Je suis <span className="presentation-word">Développeur Web</span></h2>
              </div>
              <img className='home-img' src={photo} alt="moi" />
            </div>
            <div className="home-menu">
              <div className="home-left">
                <Link className='home-experience-title' to='#experience' smooth>
                  <div >Expériences</div>
                </Link>
                <Link className='home-skills-title' to="#skills" smooth>
                  <div >Compétences</div>
                </Link>
              </div>
              <div className="home-right">
                <Link className='home-projets-title' to="#projets" smooth>
                  <div>Projets</div>
                </Link>
                <Link className='home-formations-title' to="#formations" smooth>
                  <div>Formations</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Projets />
      <Skills />
      <Experience />
      <Formations />
      <Background />
      <Arrow />
      <Footer />
    </div>
  );
}