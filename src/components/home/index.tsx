import './styles.css';
import { Link } from 'react-router-dom';
import photo from '../../../src/assets/photo.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className='container'>
                <div className='resume'>
                    <h2 className='presentation'>Bonjour, je m'appelle <span className="presentation-word">Emanuel</span></h2>
                    <h2 className='presentation'>Je suis <span className="presentation-word">Développeur Front-End</span></h2>
                    <img className='presentation-img' src={photo} alt="moi" />
                </div>
                <div className="content">
                    <Link to="/experience" className='experience'>Expériences</Link>
                    <Link to="/competences" className='skills'>Compétences</Link>
                    <Link to="/contact" className='contact'>Contact</Link>
                    <Link to="/projets" className='projets'>Projets</Link>
                    <Link to="/parcours" className='parcours'>Parcours</Link>
                </div>
            </div>
        </div>
    );
}