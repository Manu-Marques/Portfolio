import './styles.css';
import { Link } from 'react-router-dom';
import photo from '../../../src/assets/photo.jpg';

export default function Home() {
    return (
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
                            <Link to="/experience" className='home-experience-title'>Expériences</Link>
                            <Link to="/competences" className='home-skills-title'>Compétences</Link>
                        </div>
                        <div className="home-right">
                            <Link to="/projets" className='home-projets-title'>Projets</Link>
                            <Link to="/formations" className='home-formations-title'>Formations</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}