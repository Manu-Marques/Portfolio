import './styles.css';
import Video from "../../../src/assets/espace.mp4";

export default function Home() {
    return (
        <div className="home">
            <div className="layout">
                <video className='video' src={Video} autoPlay loop muted />
            </div>
            <div className='container'>
                    <div className='resume'>
                        <h2 className='word'>Emanuel Marques Lé</h2>
                        <h2 className='word'>Développeur Web Front-End</h2>
                    </div>
                 <div className="content">
                    <h1 className='skills'>Skills</h1>
                    <h1 className='about'>About</h1>
                    <h1 className='contact'>Contact</h1>
                    <h1 className='projects'>Projects</h1>
                    <h1 className='experience'>Experience</h1>
                </div>
            </div>
        </div>
    );
}