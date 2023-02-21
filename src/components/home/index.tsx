import './styles.css';
import { Link } from 'react-router-dom';
import photo from '../../../src/assets/photo.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className='home-container'>
                <div className="home-row">
                    <div className='home-resume'>
                        <h2 className='home-presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
                        <h2 className='home-presentation'>Je suis <span className="presentation-word">Développeur Front-End</span></h2>
                        <img className='home-img' src={photo} alt="moi" />
                    </div>
                    <div className="home-content">
                        <Link to="/experience" className='home-experience'>Expériences</Link>
                        <Link to="/competences" className='home-skills'>Compétences</Link>
                        <Link to="/projets" className='home-projets'>Projets</Link>
                        <Link to="/formations" className='home-formations'>Formations</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}