import './styles.css';
import Video from "../../../src/assets/espace.mp4";

export default function Home() {
    return (
        <div className="home">
            <div className="layout">
                <video className='video' src={Video} autoPlay loop muted />
            </div>
            <div className='container'>
                <div className="first-line">
                    <div className='resume'>
                        <h1 className='word'>About</h1>
                        <h2 className='word'>Emanuel Marques Lé</h2>
                        <h2 className='word'>Développeur Web Front-End</h2>
                    </div>
                    <div className='projects'>
                        <h1 className='word'>Projects</h1>
                    </div>
                </div>
                <div className="content">
                    <h1 className='text'>Bienvenue dans le Portfolio d'Emanuel</h1>
                </div>
                <div className="second-line">
                    <div className='skills'>
                        <h1 className='word'>Skills</h1>
                    </div>
                    <div className='contact'>
                        <h1 className='word' >Contact</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}