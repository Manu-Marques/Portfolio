import './styles.css';
import { Link } from 'react-router-dom';
import photo from '../../../src/assets/photo2.jpg';

export default function Home() {
    return (
        <div className="home">
            <div className='container'>
                <div className='resume'>
                    <h2 className='presentation'>Hi, I'm <span className="presentation-word">Emanuel</span></h2>
                    <h2 className='presentation'>I'm a <span className="presentation-word">Front-Developer</span></h2>
                    <img className='presentation-img' src={photo} alt="moi" />
                </div>
                <div className="content">
                    <Link to="/experience" className='experience'>Experience</Link>
                    <Link to="/skills" className='skills'>Skills</Link>
                    <Link to="/about" className='about'>About</Link>
                    <Link to="/projets" className='projets'>Projets</Link>
                    <Link to="/contact" className='contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
}