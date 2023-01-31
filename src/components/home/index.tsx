import './styles.css';
import Video from "../../../src/assets/espace.mp4";

export default function Home() {
    return (
        <div className="home">
                <div className="layout">
                    <video className='video' src={Video} autoPlay loop muted />
                </div>
            <div className='container'>
                <div className="content">
                    <h1 className='text'>Bienvenue dans le Portfolio d'Emanuel</h1>
                </div>
                <div className='resume'>
                    <h2 className=''>Emanuel Marques Lé</h2>
                    <h2 className=''>Développeur Web Front-End</h2>
                </div>
                <div className='projects'>
                    <h2>Projects</h2>
                </div>
                <div className='skills'>
                    <h2>Skills</h2>
                    </div>
                <div className='contact'>
                    <h2>Contact</h2>
                    </div>
            </div>
        </div>
    );
}