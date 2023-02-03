import './styles.css';
import Video from "../../../src/assets/espace.mp4";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
            <div className="layout">
                <video className='video' src={Video} autoPlay loop muted />
            </div>
            <div className='container'>
                <div className='resume'>
                    <h2 className='presentation'>Hi, I'm <span className="presentation-word">Emanuel</span></h2>
                    <h2 className='presentation'>I'm a <span className="presentation-word">Front-Developer</span></h2>
                </div>
                <div className="content">
                    <Link to="/experience" className='experience'>Experience</Link>
                    <Link to="/skills" className='skills'>Skills</Link>
                    <Link to="/about" className='about'>About</Link>
                    <Link to="projects" className='projects'>Projects</Link>
                    <Link to="contact" className='contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
}